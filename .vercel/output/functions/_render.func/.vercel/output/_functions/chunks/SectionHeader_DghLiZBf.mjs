import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, f as renderSlot, r as renderTemplate } from './astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    id,
    background = "white",
    padding = "normal",
    class: customClass = ""
  } = Astro2.props;
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-blue-50",
    gradient: "bg-gradient-to-b from-white to-gray-50"
  };
  const paddingClasses = {
    small: "py-12",
    normal: "py-20",
    large: "py-32"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${bgClasses[background]} ${paddingClasses[padding]} px-4 ${customClass}`, "class")}> <div class="max-w-6xl mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/components/Section.astro", void 0);

const $$Astro = createAstro();
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const { title, subtitle, align = "center" } = Astro2.props;
  const alignClass = align === "center" ? "text-center" : "text-left";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${alignClass} mb-12`, "class")}> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> ${title} </h2> ${subtitle && renderTemplate`<p class="text-xl text-gray-600 max-w-3xl mx-auto"> ${subtitle} </p>`} </div>`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/components/SectionHeader.astro", void 0);

export { $$Section as $, $$SectionHeader as a };
