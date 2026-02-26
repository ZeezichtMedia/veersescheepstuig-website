/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_VMbBn6rJ.mjs';
import { $ as $$Section, a as $$SectionHeader } from '../chunks/SectionHeader_DghLiZBf.mjs';
import { g as getEntry } from '../chunks/_astro_content_Ct3s1hWF.mjs';
export { renderers } from '../renderers.mjs';

const $$Dirigent = createComponent(async ($$result, $$props, $$slots) => {
  const dirigentData = await getEntry("pages", "dirigent");
  const data = dirigentData?.data || {
    heroImage: "/images/dirigent-header.webp",
    name: "Moritz Benschop",
    nickname: "The Jumping Man",
    bio: { intro: "", beginning: "", journey: "" },
    experience: [],
    motto: "Music was my first love and it will be my last."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Dirigent Moritz Benschop - Het Veerse Scheepstuig", "description": "Leer onze dirigent Moritz Benschop kennen. The Jumping Man die ons koor met energie en enthousiasme leidt sinds 2024." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[60vh] flex items-center justify-center overflow-hidden"> <img${addAttribute(data.heroImage, "src")}${addAttribute(`${data.name} - Dirigent`, "alt")} class="absolute inset-0 w-full h-full object-cover" loading="eager"> <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div> <div class="relative z-10 text-center px-4 max-w-5xl mx-auto"> <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"> ${data.name} </h1> <p class="text-xl md:text-2xl text-white/95 drop-shadow-lg">
Onze dirigent: ${data.nickname} </p> </div> </section>  ${renderComponent($$result2, "Section", $$Section, { "id": "content", "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Wie is Moritz Benschop?", "align": "left" })} <img src="https://res.cloudinary.com/dgf7hospk/image/upload/q_auto,f_auto,w_800,c_limit,fl_progressive/veersescheepstuig/moritz_1762501268816.webp" alt="Moritz Benschop" class="w-full h-auto rounded-xl shadow-lg mb-8" width="800" height="600"> <div class="prose prose-lg max-w-none"> <div class="text-xl text-gray-700 leading-relaxed mb-6">${unescapeHTML(data.bio.intro)}</div> <h3 class="text-3xl font-bold text-gray-900 mt-12 mb-6">
Hoe het allemaal begon...
</h3> <div class="text-xl text-gray-700 leading-relaxed mb-6">${unescapeHTML(data.bio.beginning)}</div> <h3 class="text-3xl font-bold text-gray-900 mt-12 mb-6">
Van gospel tot zeemanslied
</h3> <div class="text-xl text-gray-700 leading-relaxed mb-6">${unescapeHTML(data.bio.journey)}</div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "gray", "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Ervaring als dirigent", "align": "left" })} <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> ${data.experience && data.experience.map((exp) => renderTemplate`<div class="bg-white p-6 rounded-xl shadow-lg"> <div class="text-primary-600 font-bold mb-2">${exp.period}</div> <h4 class="text-xl font-bold text-gray-900 mb-2"> ${exp.organization} </h4> <p class="text-gray-600">${exp.role}</p> </div>`)} </div> ${data.motto && renderTemplate`<div class="bg-primary-50 p-8 rounded-xl mt-12"> <h3 class="text-2xl font-bold text-gray-900 mb-4">Zijn motto?</h3> <p class="text-xl text-gray-700 mb-4">
Moritz zegt het graag met de woorden van John Miles:
</p> <blockquote class="text-3xl font-bold text-primary-700 italic border-l-4 border-primary-500 pl-6">
"${data.motto}"
</blockquote> <p class="text-xl text-gray-700 mt-4">
En daar sluit hij zich van harte bij aan.
</p> </div>`} </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Kom luisteren naar ons koor
</h2> <p class="text-xl text-gray-700 mb-8">
Benieuwd naar Moritz en Het Veerse Scheepstuig in actie? Bekijk onze
        agenda of boek ons voor een optreden!
</p> <a href="/contact" class="inline-block bg-primary hover:bg-primary-600 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg">
Neem contact op
</a> </div> ` })} ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/dirigent.astro", void 0);

const $$file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/dirigent.astro";
const $$url = "/dirigent";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dirigent,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
