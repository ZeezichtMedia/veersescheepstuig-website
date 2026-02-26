/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_VMbBn6rJ.mjs';
import { $ as $$Section, a as $$SectionHeader } from '../chunks/SectionHeader_DghLiZBf.mjs';
import { g as getEntry } from '../chunks/_astro_content_Ct3s1hWF.mjs';
export { renderers } from '../renderers.mjs';

function getCloudinaryUrl(image, options = {}) {
  if (!image?.cloudinary?.public_id) return null;
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "limit",
    gravity = "auto"
  } = options;
  const cloudName = "dgf7hospk";
  const transformations = [];
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (width || height) {
    transformations.push(`c_${crop}`);
    if (crop === "fill") transformations.push(`g_${gravity}`);
  }
  transformations.push("fl_progressive");
  const transformString = transformations.join(",");
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${image.cloudinary.public_id}.${format === "auto" ? image.cloudinary.format : format}`;
}
function getImageUrl(image, fallbackUrl, options) {
  const cloudinaryUrl = getCloudinaryUrl(image, options);
  return cloudinaryUrl || fallbackUrl || "";
}

const $$Combo = createComponent(async ($$result, $$props, $$slots) => {
  const comboData = await getEntry("pages", "combo");
  const { Content } = await comboData.render();
  const frontmatter = comboData?.data;
  const data = {
    hero: {
      title: frontmatter?.title || "Het Combo",
      subtitle: "De muzikale ruggengraat van ons koor",
      imageUrl: frontmatter?.heroImage || "/images/concerten-header.webp",
      image: void 0
      // Explicitly undefined to satisfy getImageUrl signature
    },
    intro: frontmatter?.intro || "",
    members: frontmatter?.members || [],
    instruments: frontmatter?.instruments || []
  };
  console.log("Combo Data:", JSON.stringify(data, null, 2));
  if (!data.hero) console.error("HERO MISSING!");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Het Combo - Het Veerse Scheepstuig", "description": "Ontdek het combo van Het Veerse Scheepstuig. Vijf enthousiaste muzikanten die het koor begeleiden met gitaar, contrabas, accordeon en viool." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[60vh] flex items-center justify-center overflow-hidden"> <img${addAttribute(getImageUrl(data.hero.image, data.hero.imageUrl, {
    width: 1920,
    quality: "auto",
    format: "auto"
  }), "src")} alt="Het Combo van Het Veerse Scheepstuig" class="absolute inset-0 w-full h-full object-cover" loading="eager"> <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div> <div class="relative z-10 text-center px-4 max-w-5xl mx-auto"> <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"> ${data.hero.title} </h1> <p class="text-xl md:text-2xl text-white/95 drop-shadow-lg"> ${data.hero.subtitle} </p> </div> </section>  ${renderComponent($$result2, "Section", $$Section, { "id": "content", "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Vijf enthousiaste muzikanten", "align": "left" })} <div class="mt-8 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"> <!-- 5 members photo --> <div class="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white lg:translate-x-4 z-10"> <img src="/images/DSCN7029.webp" alt="Het volledige combo (5 leden)" class="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"> <p class="text-white font-bold p-6 text-lg tracking-wide drop-shadow-md">
Voltallig Combo
</p> </div> </div> <!-- 4 members photo --> <div class="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white lg:-translate-x-4 lg:translate-y-12"> <img src="/images/DSCN3157.webp" alt="Combo (4 leden)" class="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"> <p class="text-white font-bold p-6 text-lg tracking-wide drop-shadow-md">
Kleine Formatie
</p> </div> </div> </div> <div class="prose prose-lg max-w-none text-xl text-gray-700 leading-relaxed mb-6"> ${renderComponent($$result3, "Content", Content, {})} </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "gray", "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-6xl mx-auto"> ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Onze muzikanten", "subtitle": "Vijf vaste leden" })} ${data.members && data.members.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${data.members.map((member) => renderTemplate`<div class="bg-white p-6 rounded-xl shadow-lg text-center"> ${(member.image || member.imageUrl) && renderTemplate`<div class="mb-4 mx-auto w-3/4 overflow-hidden rounded-lg aspect-square"> <img${addAttribute(getImageUrl(
    typeof member.image === "string" ? null : member.image,
    typeof member.image === "string" ? member.image : member.imageUrl,
    {
      width: 450,
      height: 600,
      crop: "fill",
      quality: "auto",
      format: "auto"
    }
  ), "src")}${addAttribute(member.name, "alt")} class="w-full h-full object-cover object-top" loading="lazy"> </div>`} <h3 class="text-2xl font-bold text-gray-900 mb-2"> ${member.name} </h3> <p class="text-primary-600 font-semibold text-lg"> ${member.instrument} </p> </div>`)} </div>`} </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center"> <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <h4 class="text-xl font-bold text-gray-900 mb-2">
5 Vaste muzikanten
</h4> <p class="text-gray-600">Enthousiast en toegewijd</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path> </svg> </div> <h4 class="text-xl font-bold text-gray-900 mb-2">
Bijna alle nummers
</h4> <p class="text-gray-600">Volledige begeleiding</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h4 class="text-xl font-bold text-gray-900 mb-2">
Wekelijkse repetities
</h4> <p class="text-gray-600">Elke woensdag samen</p> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "gray", "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Ervaar ons live!
</h2> <p class="text-xl text-gray-700 mb-8">
Wilt u het koor en combo in actie zien? Boek ons voor uw evenement of
        kom langs bij een repetitie.
</p> <a href="/contact" class="inline-block bg-primary hover:bg-primary-600 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg">
Neem contact op
</a> </div> ` })} ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/combo.astro", void 0);

const $$file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/combo.astro";
const $$url = "/combo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Combo,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
