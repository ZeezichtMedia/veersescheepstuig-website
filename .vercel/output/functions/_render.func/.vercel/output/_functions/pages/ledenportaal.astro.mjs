/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_VMbBn6rJ.mjs';
import { $ as $$Section, a as $$SectionHeader } from '../chunks/SectionHeader_DghLiZBf.mjs';
export { renderers } from '../renderers.mjs';

const $$Ledenportaal = createComponent(($$result, $$props, $$slots) => {
  const heroImage = "/images/contact-header.webp";
  const heroTitle = "Ledenportaal";
  const heroSubtitle = "Oefenmateriaal en muziekfiles voor leden";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ledenportaal - Het Veerse Scheepstuig", "description": "Ledenportaal met oefenbestanden en bladmuziek voor de leden van Het Veerse Scheepstuig." }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<section class="relative h-[60vh] flex items-center justify-center overflow-hidden"> <img${addAttribute(heroImage, "src")} alt="Hero afbeelding Ledenportaal" class="absolute inset-0 w-full h-full object-cover" loading="eager"> <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div> <div class="relative z-10 text-center px-4 max-w-5xl mx-auto"> <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"> ${heroTitle} </h1> <p class="text-xl md:text-2xl text-white/95 drop-shadow-lg"> ${heroSubtitle} </p> </div> </section>  ${renderComponent($$result2, "Section", $$Section, { "id": "muziekfiles", "padding": "large" }, { "default": ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Muziekfiles (Finale)", "align": "center" })} <div class="prose prose-lg prose-primary max-w-none text-gray-700 bg-white p-8 md:p-12 rounded-2xl shadow-xl mt-8"> <p>
Binnenkort vindt u hier alle muziekfiles, oefenbestanden en
                    bladmuziek (o.a. Finale-bestanden) om thuis te kunnen
                    oefenen.
</p> <p> <em>(Deze pagina wordt later nog verder aangevuld met
                        specifieke partijen)</em> </p> </div> </div> ` })} `, "head": ($$result2) => renderTemplate`<meta name="robots" content="noindex, nofollow">` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/ledenportaal.astro", void 0);

const $$file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/ledenportaal.astro";
const $$url = "/ledenportaal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Ledenportaal,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
