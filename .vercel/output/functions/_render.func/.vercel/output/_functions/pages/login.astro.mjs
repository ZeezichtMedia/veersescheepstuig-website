/* empty css                                 */
import { c as createComponent, e as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/BaseLayout_VMbBn6rJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  let error = "";
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const password = data.get("password");
      if (password === "Hoist2014!") {
        Astro2.cookies.set("vs_auth_token", "authenticated", {
          path: "/",
          secure: true,
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 30,
          // 30 days
          sameSite: "lax"
        });
        return Astro2.redirect("/ledenportaal");
      } else {
        error = "Onjuist wachtwoord. Probeer het opnieuw.";
      }
    } catch (err) {
      console.error("Error parsing login form:", err);
      error = "Er is een fout opgetreden. Probeer het later opnieuw.";
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Inloggen Ledenportaal - Veerse Scheepstuig", "description": "Log in om toegang te krijgen tot het ledenportaal." }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="flex-grow bg-white min-h-[60vh] flex items-center justify-center py-16"> <div class="container mx-auto px-4 max-w-md"> <div class="bg-primary/5 rounded-xl p-8 border border-primary/10 shadow-sm text-center"> <h1 class="font-heading text-3xl text-primary font-bold mb-6">
Inloggen Ledenportaal
</h1> <p class="text-secondary-dark mb-8">
Voer het wachtwoord in om toegang te krijgen tot het
                    afgeschermde gedeelte voor leden van het Veerse Scheepstuig.
</p> ${error && renderTemplate`<div class="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm border border-red-200"> ${error} </div>`} <form method="POST" class="space-y-6"> <div> <label for="password" class="sr-only">Wachtwoord</label> <input type="password" id="password" name="password" required class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-primary transition-colors text-center text-lg" placeholder="Wachtwoord"> </div> <button type="submit" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
Inloggen
</button> </form> <div class="mt-8 text-sm text-gray-500"> <p>
Problemen met inloggen? Neem contact op met het bestuur.
</p> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": async ($$result2) => renderTemplate`<meta name="robots" content="noindex, nofollow">` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/login.astro", void 0);

const $$file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
