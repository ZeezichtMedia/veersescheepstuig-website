/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_VMbBn6rJ.mjs';
import { $ as $$Section, a as $$SectionHeader } from '../chunks/SectionHeader_DghLiZBf.mjs';
import { s as sanityClient } from '../chunks/client_cpWjcIkh.mjs';
export { renderers } from '../renderers.mjs';

const $$FotosVideos = createComponent(async ($$result, $$props, $$slots) => {
  const galleries = await sanityClient.fetch(`
  *[_type == "gallery" && draft != false] | order(date desc) {
    _id,
    draft,
    title,
    date,
    description,
    url,
    "thumbnailUrl": thumbnail.asset->url
  }
`);
  const mappedGalleries = galleries.map((gallery) => ({
    ...gallery,
    year: gallery.date ? gallery.date.substring(0, 4) : (/* @__PURE__ */ new Date()).getFullYear().toString(),
    thumbnail: gallery.thumbnailUrl || "/images/concerten-header.webp"
    // fallback image
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Foto's & Video's - Het Veerse Scheepstuig", "description": "Bekijk foto's en video's van onze optredens door de jaren heen. Herinneringen aan memorabele momenten van Het Veerse Scheepstuig." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[60vh] flex items-center justify-center overflow-hidden"> <img src="/images/contact-header.webp" alt="Foto's en Video's Het Veerse Scheepstuig" class="absolute inset-0 w-full h-full object-cover" loading="eager"> <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div> <div class="relative z-10 text-center px-4 max-w-5xl mx-auto"> <div class="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"> <span class="text-white/90 text-sm md:text-base font-medium tracking-wide">📸 Herinneringen</span> </div> <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
Foto's & Video's
</h1> <p class="text-xl md:text-2xl text-white/95 drop-shadow-lg">
Bekijk onze mooiste momenten door de jaren heen
</p> </div> </section>  ${renderComponent($$result2, "Section", $$Section, { "id": "content", "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-7xl mx-auto"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Onze galerij", "subtitle": "Klik op een jaar om de foto's en video's te bekijken" })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"> ${mappedGalleries.map((gallery) => renderTemplate`<a${addAttribute(gallery.url || "#", "href")}${addAttribute(gallery.url ? "_blank" : void 0, "target")}${addAttribute(gallery.url ? "noopener noreferrer" : void 0, "rel")} class="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2" style="box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);"> <!-- Thumbnail Image --> <div class="relative h-64 overflow-hidden bg-gray-100"> <img${addAttribute(gallery.thumbnail, "src")}${addAttribute(gallery.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"> <!-- Overlay on hover --> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"> <div class="absolute bottom-4 left-4 right-4 text-white"> <div class="flex items-center gap-4 text-sm font-semibold">
Klik om naar het album of de video te gaan
</div> </div> </div> <!-- Year Badge --> <div class="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg"> ${gallery.year} </div> </div> <!-- Content --> <div class="p-6"> <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors"> ${gallery.title} </h3> ${gallery.description && renderTemplate`<p class="text-gray-600 mb-4 line-clamp-2"> ${gallery.description} </p>`} <!-- View Button --> <div class="mt-4 flex items-center text-primary font-semibold group-hover:gap-2 transition-all"> <span>${gallery.url ? "Bekijk galerij" : "Binnenkort beschikbaar"}</span> ${gallery.url && renderTemplate`<svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg>`} </div> </div> </a>`)} </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "gradient", "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto text-center"> <div class="bg-white p-8 md:p-12 rounded-2xl border border-gray-200" style="box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);"> <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"> <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <h3 class="text-2xl font-bold text-gray-900 mb-4">
Foto's van ons optreden?
</h3> <p class="text-lg text-gray-700 leading-relaxed mb-6">
Heeft u foto's of video's gemaakt tijdens een van onze optredens? We horen graag van u! Stuur uw foto's naar ons en wie weet verschijnen ze binnenkort in onze galerij.
</p> <a href="/contact" class="inline-block bg-primary hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg">
Stuur uw foto's
</a> </div> </div> ` })} ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/fotos-videos.astro", void 0);

const $$file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/fotos-videos.astro";
const $$url = "/fotos-videos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FotosVideos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
