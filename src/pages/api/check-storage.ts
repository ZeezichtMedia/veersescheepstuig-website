import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { sanityClient } from '../../sanity/client';

// Astro draait dit server-side (Vercel serverless), nooit prerenderen.
export const prerender = false;

// Gratis Sanity-plan: 100 GB asset-opslag.
const STORAGE_LIMIT_BYTES = 100 * 1024 * 1024 * 1024;

// Env var uit Astro (import.meta.env) of Node runtime (process.env) halen.
function env(key: string): string | undefined {
    return (import.meta.env as Record<string, string | undefined>)[key] ?? process.env[key];
}

const THRESHOLD = Number(env('STORAGE_ALERT_THRESHOLD') ?? '80');
const ALERT_TO = env('ALERT_EMAIL_TO') ?? 'info@agensea.nl';

export const GET: APIRoute = async ({ request, url }) => {
    // 1. Beveiliging: alleen Vercel Cron (of handmatig met de secret) mag dit draaien.
    //    Vercel Cron stuurt automatisch "Authorization: Bearer <CRON_SECRET>" mee.
    const secret = env('CRON_SECRET');
    const auth = request.headers.get('authorization');
    if (!secret || auth !== `Bearer ${secret}`) {
        return json({ error: 'Unauthorized' }, 401);
    }

    // ?test=1 forceert een testmail, ook als de opslag onder de drempel zit.
    const isTest = url.searchParams.get('test') === '1';

    // 2. Meet de totale opslag van alle afbeeldingen en bestanden.
    let totalBytes = 0;
    let assetCount = 0;
    try {
        const stats = await sanityClient.fetch<{ totalBytes: number | null; assetCount: number }>(`{
      "totalBytes": math::sum(*[_type in ["sanity.imageAsset","sanity.fileAsset"]].size),
      "assetCount": count(*[_type in ["sanity.imageAsset","sanity.fileAsset"]])
    }`);
        totalBytes = stats?.totalBytes ?? 0;
        assetCount = stats?.assetCount ?? 0;
    } catch (err) {
        return json({ error: 'Sanity-query mislukt', detail: String(err) }, 500);
    }

    const percent = (totalBytes / STORAGE_LIMIT_BYTES) * 100;
    const usedGB = (totalBytes / 1024 ** 3).toFixed(2);

    // 3. Onder de drempel en geen test? Niets doen.
    if (percent < THRESHOLD && !isTest) {
        return json({ ok: true, percent: round(percent), usedGB, assetCount, alerted: false });
    }

    // 4. Stuur de waarschuwingsmail.
    try {
        await sendAlert({ percent, usedGB, assetCount, isTest });
    } catch (err) {
        return json({ error: 'Mail versturen mislukt', detail: String(err) }, 500);
    }

    return json({ ok: true, percent: round(percent), usedGB, assetCount, alerted: true, test: isTest });
};

function round(n: number): number {
    return Math.round(n * 10) / 10;
}

function json(body: unknown, status = 200): Response {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' },
    });
}

async function sendAlert(opts: {
    percent: number;
    usedGB: string;
    assetCount: number;
    isTest: boolean;
}): Promise<void> {
    const host = env('SMTP_HOST');
    const port = Number(env('SMTP_PORT') ?? '587');
    const user = env('SMTP_USER');
    const pass = env('SMTP_PASS');
    const from = env('SMTP_FROM') ?? user;

    if (!host || !user || !pass) {
        throw new Error('SMTP-configuratie ontbreekt (SMTP_HOST / SMTP_USER / SMTP_PASS)');
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // 465 = SSL, 587 = STARTTLS
        auth: { user, pass },
    });

    const pct = Math.round(opts.percent);
    const subjectPrefix = opts.isTest ? '[TEST] ' : '';
    const dashboard = 'https://www.sanity.io/manage/project/ac66g3f5';

    const textBody = [
        opts.isTest ? 'DIT IS EEN TESTMAIL (de opslag zit mogelijk nog onder de drempel).\n' : '',
        `De Sanity-opslag van Het Veerse Scheepstuig zit op ${pct}% van de limiet.`,
        '',
        `Gebruikt: ${opts.usedGB} GB van 100 GB`,
        `Aantal bestanden: ${opts.assetCount}`,
        '',
        'Wat je kunt doen:',
        '- Oude of ongebruikte foto- en mediabestanden opruimen in Sanity, of',
        '- Het Sanity-abonnement bekijken voor meer ruimte.',
        '',
        `Beheer: ${dashboard}`,
        '',
        'Je krijgt deze melding wekelijks zolang de opslag boven de drempel blijft.',
    ].join('\n');

    const htmlBody = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #111;">
      ${opts.isTest ? '<p style="background:#fef3c7;color:#92400e;padding:10px 14px;border-radius:8px;font-size:14px;">Dit is een testmail (de opslag zit mogelijk nog onder de drempel).</p>' : ''}
      <h2 style="color:#111D4A;margin-bottom:4px;">Sanity opslag op ${pct}%</h2>
      <p style="color:#444;margin-top:0;">Website Het Veerse Scheepstuig</p>

      <div style="background:#f3f4f6;border-radius:12px;padding:18px 20px;margin:18px 0;">
        <div style="height:14px;background:#e5e7eb;border-radius:999px;overflow:hidden;">
          <div style="height:14px;width:${Math.min(pct, 100)}%;background:${pct >= 90 ? '#dc2626' : '#1991B9'};"></div>
        </div>
        <p style="margin:12px 0 0;font-size:15px;"><strong>${opts.usedGB} GB</strong> van 100 GB gebruikt &middot; ${opts.assetCount} bestanden</p>
      </div>

      <p style="font-size:15px;line-height:1.5;">Wat je kunt doen:</p>
      <ul style="font-size:15px;line-height:1.6;color:#333;">
        <li>Oude of ongebruikte foto- en mediabestanden opruimen in Sanity, of</li>
        <li>Het Sanity-abonnement bekijken voor meer ruimte.</li>
      </ul>

      <p style="margin:22px 0;">
        <a href="${dashboard}" style="background:#1991B9;color:#fff;text-decoration:none;padding:11px 22px;border-radius:8px;font-weight:600;display:inline-block;">Open Sanity-beheer</a>
      </p>

      <p style="font-size:13px;color:#888;border-top:1px solid #eee;padding-top:14px;">
        Je krijgt deze melding wekelijks zolang de opslag boven ${THRESHOLD}% blijft. Drempel aanpasbaar via de omgevingsvariabele STORAGE_ALERT_THRESHOLD.
      </p>
    </div>`;

    await transporter.sendMail({
        from,
        to: ALERT_TO,
        subject: `${subjectPrefix}Sanity opslag ${pct}% vol - Veerse Scheepstuig`,
        text: textBody,
        html: htmlBody,
    });
}
