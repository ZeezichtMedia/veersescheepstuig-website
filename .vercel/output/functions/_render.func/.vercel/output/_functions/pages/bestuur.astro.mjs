/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_VMbBn6rJ.mjs';
import { $ as $$Section, a as $$SectionHeader } from '../chunks/SectionHeader_DghLiZBf.mjs';
import { g as getEntry } from '../chunks/_astro_content_Ct3s1hWF.mjs';
export { renderers } from '../renderers.mjs';

const $$Bestuur = createComponent(async ($$result, $$props, $$slots) => {
  const bestuurData = await getEntry("pages", "bestuur");
  const data = bestuurData?.data || {
    heroImage: "/images/bestuur-header.webp",
    board: [],
    general: {
      address: "",
      zipcode: "",
      city: "",
      phone: "",
      email: "",
      iban: "",
      bic: "",
      kvk: ""
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Bestuur - Het Veerse Scheepstuig", "description": "Maak kennis met het bestuur van Shantykoor Het Veerse Scheepstuig. Contactgegevens en informatie over het dagelijks bestuur." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[60vh] flex items-center justify-center overflow-hidden"> <img${addAttribute(data.heroImage, "src")} alt="Bestuur Het Veerse Scheepstuig" class="absolute inset-0 w-full h-full object-cover" loading="eager"> <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div> <div class="relative z-10 text-center px-4 max-w-5xl mx-auto"> <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
Het Bestuur
</h1> <p class="text-xl md:text-2xl text-white/95 drop-shadow-lg">
Samen zorgen we voor een goed draaiend koor
</p> </div> </section>  ${renderComponent($$result2, "Section", $$Section, { "id": "content", "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-6xl mx-auto"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Dagelijks bestuur", "subtitle": "Zo kunt u ons bereiken" })} <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"> ${data.board && data.board.slice(0, 3).map((member) => renderTemplate`<div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"> <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6"> <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> <div class="text-primary-600 font-bold mb-2 text-sm uppercase tracking-wide"> ${member.role} </div> <h4 class="text-2xl font-bold text-gray-900 mb-4"> ${member.name} </h4> <div class="space-y-2"> ${member.email && renderTemplate`<a${addAttribute(`mailto:${member.email}`, "href")} class="text-gray-700 hover:text-primary flex items-center gap-2 transition-colors text-sm"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> ${member.email} </a>`} ${member.phone && renderTemplate`<a${addAttribute(`tel:${member.phone.replace(/\s/g, "")}`, "href")} class="text-gray-700 hover:text-primary flex items-center gap-2 transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${member.phone} </a>`} </div> ${member.info && renderTemplate`<p class="text-xs text-gray-500 mt-4 italic">${member.info}</p>`} </div>`)} </div> ${data.board && data.board.length > 3 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> ${data.board.slice(3).map((member, index) => renderTemplate`<div${addAttribute(`p-8 rounded-2xl shadow-lg ${index % 2 === 0 ? "bg-gradient-to-br from-primary-50 to-primary-100" : "bg-gradient-to-br from-secondary-50 to-secondary-100"}`, "class")}> <div class="flex items-start gap-4"> <div${addAttribute(`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`, "class")}> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> <div> <div${addAttribute(`font-bold mb-2 text-sm uppercase tracking-wide ${index % 2 === 0 ? "text-primary-700" : "text-secondary-700"}`, "class")}> ${member.role} </div> <h4 class="text-xl font-bold text-gray-900 mb-2"> ${member.name} </h4> ${member.info && renderTemplate`<p class="text-sm text-gray-600 mb-3">${member.info}</p>`} ${member.email && renderTemplate`<a${addAttribute(`mailto:${member.email}`, "href")}${addAttribute(`flex items-center gap-2 transition-colors text-sm font-medium ${index % 2 === 0 ? "text-primary-700 hover:text-primary-800" : "text-secondary-700 hover:text-secondary-800"}`, "class")}> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> ${member.email} </a>`} </div> </div> </div>`)} </div>`} </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "gray", "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Algemene gegevens", "align": "left" })} <div class="bg-white p-8 rounded-2xl shadow-lg"> <h3 class="text-2xl font-bold text-gray-900 mb-6">
Shantykoor Het Veerse Scheepstuig
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> ${data.general && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` <div class="flex items-start gap-3 mb-4"> <svg class="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <div> <p class="font-medium text-gray-900">Postadres</p> <p class="text-gray-700">${data.general.address}</p> <p class="text-gray-700"> ${data.general.zipcode} ${data.general.city} </p> </div> </div> <div class="flex items-center gap-3 mb-4"> <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <div> <p class="font-medium text-gray-900">Telefoon</p> <a${addAttribute(`tel:${data.general.phone.replace(/\s/g, "")}`, "href")} class="text-primary hover:text-primary-700"> ${data.general.phone} </a> </div> </div> <div class="flex items-center gap-3"> <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <div> <p class="font-medium text-gray-900">Email</p> <a${addAttribute(`mailto:${data.general.email}`, "href")} class="text-primary hover:text-primary-700"> ${data.general.email} </a> </div> </div> ` })}`} </div> ${data.general && renderTemplate`<div class="bg-gray-50 p-6 rounded-xl"> <h4 class="font-bold text-gray-900 mb-4">
Financiële gegevens
</h4> <div class="space-y-2 text-sm"> <div class="flex justify-between"> <span class="text-gray-600">IBAN:</span> <span class="font-mono text-gray-900"> ${data.general.iban} </span> </div> <div class="flex justify-between"> <span class="text-gray-600">BIC:</span> <span class="font-mono text-gray-900"> ${data.general.bic} </span> </div> <div class="flex justify-between"> <span class="text-gray-600">KvK:</span> <span class="font-mono text-gray-900"> ${data.general.kvk} </span> </div> </div> </div>`} </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Vragen of opmerkingen?
</h2> <p class="text-xl text-gray-700 mb-8">
Neem vrijblijvend contact op met ons bestuur. We helpen u graag verder!
</p> <a href="/contact" class="inline-block bg-primary hover:bg-primary-600 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg">
Neem contact op
</a> </div> ` })} ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/bestuur.astro", void 0);

const $$file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/bestuur.astro";
const $$url = "/bestuur";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bestuur,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
