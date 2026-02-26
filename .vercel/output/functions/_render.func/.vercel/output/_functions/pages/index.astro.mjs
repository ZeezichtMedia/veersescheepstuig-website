/* empty css                                 */
import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, r as renderTemplate, G as spreadAttributes, f as renderSlot, b as renderComponent } from '../chunks/astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_VMbBn6rJ.mjs';
import 'clsx';
import { $ as $$Section, a as $$SectionHeader } from '../chunks/SectionHeader_DghLiZBf.mjs';
import { g as getEntry } from '../chunks/_astro_content_Ct3s1hWF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$D = createAstro();
const $$VideoHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$VideoHero;
  const {
    title,
    subtitle,
    videoSrc,
    posterSrc = "/images/hero-poster.jpg",
    ctaText = "Meer informatie",
    ctaLink = "#content"
  } = Astro2.props;
  return renderTemplate`<!-- Video Hero Section -->${maybeRenderHead()}<section class="relative h-screen flex items-center justify-center overflow-hidden"> <!-- Video Background (Optimized for all devices) --> ${videoSrc && renderTemplate`<video autoplay muted loop playsinline${addAttribute(posterSrc, "poster")} preload="none" class="absolute inset-0 w-full h-full object-cover hero-video"> <source${addAttribute(videoSrc, "src")} type="video/webm"> <source${addAttribute(videoSrc.replace(".webm", ".mp4"), "src")} type="video/mp4"> </video>`} <!-- Fallback Image (Shows while video loads) --> <img${addAttribute(posterSrc, "src")} alt="Hero afbeelding" class="absolute inset-0 w-full h-full object-cover" style="z-index: -1;" loading="eager"> <!-- Dark Overlay with gradient, made lighter upon request --> <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div> <!-- Hero Content --> <div class="relative z-10 text-center px-4 max-w-5xl mx-auto"> <!-- Small badge above title --> <div class="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"> <span class="text-white/90 text-sm md:text-base font-medium tracking-wide">🎵 Sinds 1999</span> </div> <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">${unescapeHTML(title)}</h1> <p class="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-lg leading-relaxed"> ${subtitle} </p> ${ctaText && ctaLink && renderTemplate`<a${addAttribute(ctaLink, "href")} class="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold px-12 py-6 rounded-2xl text-lg md:text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-secondary/50 border-2 border-secondary/40"> ${ctaText} <svg class="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a>`} </div> <!-- Scroll indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"> <a href="#content" class="block animate-bounce" aria-label="Scroll naar beneden"> <svg class="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </a> </div> </section>`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/components/VideoHero.astro", void 0);

const $$Astro$C = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$B = createAstro();
const $$Anchor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$Anchor;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "anchor", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 22V8"></path> <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path> <circle cx="12" cy="5" r="3"></circle> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Anchor.astro", void 0);

const $$Astro$A = createAstro();
const $$Bed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Bed;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "bed", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2 4v16"></path> <path d="M2 8h18a2 2 0 0 1 2 2v10"></path> <path d="M2 17h20"></path> <path d="M6 8v9"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Bed.astro", void 0);

const $$Astro$z = createAstro();
const $$Bike = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Bike;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "bike", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="18.5" cy="17.5" r="3.5"></circle> <circle cx="5.5" cy="17.5" r="3.5"></circle> <circle cx="15" cy="5" r="1"></circle> <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Bike.astro", void 0);

const $$Astro$y = createAstro();
const $$Calendar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Calendar;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "calendar", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M8 2v4"></path> <path d="M16 2v4"></path> <rect width="18" height="18" x="3" y="4" rx="2"></rect> <path d="M3 10h18"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Calendar.astro", void 0);

const $$Astro$x = createAstro();
const $$CalendarCheck2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$CalendarCheck2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "calendar-check-2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M8 2v4"></path> <path d="M16 2v4"></path> <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path> <path d="M3 10h18"></path> <path d="m16 20 2 2 4-4"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/CalendarCheck2.astro", void 0);

const $$Astro$w = createAstro();
const $$Car = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Car;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "car", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path> <circle cx="7" cy="17" r="2"></circle> <path d="M9 17h6"></path> <circle cx="17" cy="17" r="2"></circle> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Car.astro", void 0);

const $$Astro$v = createAstro();
const $$CheckCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$CheckCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-check-big", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M21.801 10A10 10 0 1 1 17 3.335"></path> <path d="m9 11 3 3L22 4"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/CheckCircle.astro", void 0);

const $$Astro$u = createAstro();
const $$Coffee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Coffee;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "coffee", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M10 2v2"></path> <path d="M14 2v2"></path> <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path> <path d="M6 2v2"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Coffee.astro", void 0);

const $$Astro$t = createAstro();
const $$Dog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Dog;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "dog", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11.25 16.25h1.5L12 17z"></path> <path d="M16 14v.5"></path> <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"></path> <path d="M8 14v.5"></path> <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Dog.astro", void 0);

const $$Astro$s = createAstro();
const $$Euro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Euro;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "euro", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 10h12"></path> <path d="M4 14h9"></path> <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Euro.astro", void 0);

const $$Astro$r = createAstro();
const $$Fish = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Fish;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "fish", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"></path> <path d="M18 12v.5"></path> <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path> <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path> <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"></path> <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Fish.astro", void 0);

const $$Astro$q = createAstro();
const $$Flame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Flame;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "flame", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Flame.astro", void 0);

const $$Astro$p = createAstro();
const $$Gamepad2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Gamepad2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "gamepad-2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<line x1="6" x2="10" y1="11" y2="11"></line> <line x1="8" x2="8" y1="9" y2="13"></line> <line x1="15" x2="15.01" y1="12" y2="12"></line> <line x1="18" x2="18.01" y1="10" y2="10"></line> <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Gamepad2.astro", void 0);

const $$Astro$o = createAstro();
const $$Gift = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Gift;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "gift", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect x="3" y="8" width="18" height="4" rx="1"></rect> <path d="M12 8v13"></path> <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path> <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Gift.astro", void 0);

const $$Astro$n = createAstro();
const $$Guitar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Guitar;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "guitar", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m11.9 12.1 4.514-4.514"></path> <path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"></path> <path d="m6 16 2 2"></path> <path d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Guitar.astro", void 0);

const $$Astro$m = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "house", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Home.astro", void 0);

const $$Astro$l = createAstro();
const $$Leaf = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Leaf;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "leaf", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path> <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Leaf.astro", void 0);

const $$Astro$k = createAstro();
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/MapPin.astro", void 0);

const $$Astro$j = createAstro();
const $$Mic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Mic;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mic", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 19v3"></path> <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path> <rect x="9" y="2" width="6" height="13" rx="3"></rect> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Mic.astro", void 0);

const $$Astro$i = createAstro();
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "moon", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Moon.astro", void 0);

const $$Astro$h = createAstro();
const $$Music = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Music;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "music", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M9 18V5l12-2v13"></path> <circle cx="6" cy="18" r="3"></circle> <circle cx="18" cy="16" r="3"></circle> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Music.astro", void 0);

const $$Astro$g = createAstro();
const $$Music2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Music2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "music-2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="8" cy="18" r="4"></circle> <path d="M12 18V2l7 4"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Music2.astro", void 0);

const $$Astro$f = createAstro();
const $$Route = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Route;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "route", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="6" cy="19" r="3"></circle> <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path> <circle cx="18" cy="5" r="3"></circle> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Route.astro", void 0);

const $$Astro$e = createAstro();
const $$ShieldCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ShieldCheck;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "shield-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> <path d="m9 12 2 2 4-4"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/ShieldCheck.astro", void 0);

const $$Astro$d = createAstro();
const $$Ship = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Ship;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "ship", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 10.189V14"></path> <path d="M12 2v3"></path> <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path> <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path> <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Ship.astro", void 0);

const $$Astro$c = createAstro();
const $$ShowerHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ShowerHead;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "shower-head", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m4 4 2.5 2.5"></path> <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"></path> <path d="M15 5 5 15"></path> <path d="M14 17v.01"></path> <path d="M10 16v.01"></path> <path d="M13 13v.01"></path> <path d="M16 10v.01"></path> <path d="M11 20v.01"></path> <path d="M17 14v.01"></path> <path d="M20 11v.01"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/ShowerHead.astro", void 0);

const $$Astro$b = createAstro();
const $$Snowflake = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Snowflake;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "snowflake", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m10 20-1.25-2.5L6 18"></path> <path d="M10 4 8.75 6.5 6 6"></path> <path d="m14 20 1.25-2.5L18 18"></path> <path d="m14 4 1.25 2.5L18 6"></path> <path d="m17 21-3-6h-4"></path> <path d="m17 3-3 6 1.5 3"></path> <path d="M2 12h6.5L10 9"></path> <path d="m20 10-1.5 2 1.5 2"></path> <path d="M22 12h-6.5L14 15"></path> <path d="m4 10 1.5 2L4 14"></path> <path d="m7 21 3-6-1.5-3"></path> <path d="m7 3 3 6h4"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Snowflake.astro", void 0);

const $$Astro$a = createAstro();
const $$Star = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Star;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "star", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Star.astro", void 0);

const $$Astro$9 = createAstro();
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "sun", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="4"></circle> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="m4.93 4.93 1.41 1.41"></path> <path d="m17.66 17.66 1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="m6.34 17.66-1.41 1.41"></path> <path d="m19.07 4.93-1.41 1.41"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Sun.astro", void 0);

const $$Astro$8 = createAstro();
const $$Target = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Target;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "target", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <circle cx="12" cy="12" r="6"></circle> <circle cx="12" cy="12" r="2"></circle> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Target.astro", void 0);

const $$Astro$7 = createAstro();
const $$Tent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Tent;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "tent", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M3.5 21 14 3"></path> <path d="M20.5 21 10 3"></path> <path d="M15.5 21 12 15l-3.5 6"></path> <path d="M2 21h20"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Tent.astro", void 0);

const $$Astro$6 = createAstro();
const $$Thermometer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Thermometer;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "thermometer", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Thermometer.astro", void 0);

const $$Astro$5 = createAstro();
const $$Users = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Users;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "users", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <path d="M16 3.128a4 4 0 0 1 0 7.744"></path> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <circle cx="9" cy="7" r="4"></circle> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Users.astro", void 0);

const $$Astro$4 = createAstro();
const $$Utensils = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Utensils;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "utensils", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path> <path d="M7 2v20"></path> <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Utensils.astro", void 0);

const $$Astro$3 = createAstro();
const $$Waves = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Waves;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "waves", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path> <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path> <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Waves.astro", void 0);

const $$Astro$2 = createAstro();
const $$Wifi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Wifi;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "wifi", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 20h.01"></path> <path d="M2 8.82a15 15 0 0 1 20 0"></path> <path d="M5 12.859a10 10 0 0 1 14 0"></path> <path d="M8.5 16.429a5 5 0 0 1 7 0"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Wifi.astro", void 0);

const $$Astro$1 = createAstro();
const $$Zap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Zap;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "zap", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path> ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/node_modules/lucide-astro/dist/Zap.astro", void 0);

const $$Astro = createAstro();
const $$USPCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$USPCard;
  const { title, description, icon, color = "blue" } = Astro2.props;
  const iconMap = {
    // Maritime/Music icons
    "music": $$Music,
    "anchor": $$Anchor,
    "ship": $$Ship,
    "waves": $$Waves,
    "users": $$Users,
    "star": $$Star,
    "music-2": $$Music2,
    "mic": $$Mic,
    "guitar": $$Guitar,
    // General icons
    "route": $$Route,
    "calendar-check-2": $$CalendarCheck2,
    "calendar": $$Calendar,
    "leaf": $$Leaf,
    "map-pin": $$MapPin,
    "car": $$Car,
    "shower-head": $$ShowerHead,
    "wifi": $$Wifi,
    "zap": $$Zap,
    "tent": $$Tent,
    "home": $$Home,
    "bed": $$Bed,
    "utensils": $$Utensils,
    "coffee": $$Coffee,
    "gamepad-2": $$Gamepad2,
    "bike": $$Bike,
    "dog": $$Dog,
    "check-circle": $$CheckCircle,
    "shield-check": $$ShieldCheck,
    "moon": $$Moon,
    "sun": $$Sun,
    "thermometer": $$Thermometer,
    "snowflake": $$Snowflake,
    "flame": $$Flame,
    "fish": $$Fish,
    "target": $$Target,
    "euro": $$Euro,
    "gift": $$Gift
  };
  const IconComponent = icon ? iconMap[icon] : null;
  const colorClasses = {
    blue: "bg-primary",
    green: "bg-secondary",
    yellow: "bg-primary-400",
    purple: "bg-secondary-400",
    cyan: "bg-primary-300"
  };
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-6 items-start"> ${IconComponent && renderTemplate`<div${addAttribute(`flex-shrink-0 w-16 h-16 rounded-full ${colorClasses[color]} flex items-center justify-center`, "class")}> ${renderComponent($$result, "IconComponent", IconComponent, { "size": 32, "class": "text-white" })} </div>`} <div class="flex-1"> <h3 class="font-heading font-bold text-gray-900 mb-2 text-xl"> ${title} </h3> <p class="text-gray-700 leading-relaxed"> ${description} </p> </div> </div>`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/components/USPCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homeData = await getEntry("pages", "home");
  const frontmatter = homeData?.data || {
    hero: {
      title: "Het Veerse Scheepstuig",
      subtitle: "Shantykoor met passie voor maritieme muziek",
      videoUrl: "",
      image: "https://res.cloudinary.com/dgf7hospk/image/upload/q_auto,f_auto,w_1920,c_limit,fl_progressive/veersescheepstuig/koor-foto_1762936244480.webp",
      ctaText: "Boek ons voor een optreden",
      ctaLink: "/contact"
    },
    intro: {
      title: "Maritieme muziek met hart en ziel",
      body: "Sinds 1999 brengt Het Veerse Scheepstuig maritieme muziek tot leven."
    },
    usps: []
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Het Veerse Scheepstuig - Shantykoor uit Veere", "description": "Shantykoor Het Veerse Scheepstuig brengt maritieme muziek tot leven. Vierstemmig koor en combo met traditionele shanties en moderne folksongs." }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "VideoHero", $$VideoHero, { "title": frontmatter.hero.title, "subtitle": frontmatter.hero.subtitle, "videoSrc": frontmatter.hero.videoUrl, "posterSrc": frontmatter.hero.image, "ctaText": frontmatter.hero.ctaText, "ctaLink": frontmatter.hero.ctaLink })}  ${renderComponent($$result2, "Section", $$Section, { "id": "content", "padding": "large" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center max-w-4xl mx-auto"> <!-- Small decorative line --> <div class="flex items-center justify-center mb-6"> <div class="h-1 w-12 bg-primary rounded-full"></div> <svg class="w-6 h-6 mx-4 text-primary" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <div class="h-1 w-12 bg-primary rounded-full"></div> </div> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"> ${frontmatter.intro.title} </h2> <p class="text-xl text-gray-700 leading-relaxed"> ${frontmatter.intro.body} </p> <!-- Stats or highlights --> <div class="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200"> <div> <div class="text-4xl font-bold text-primary mb-2">25+</div> <div class="text-sm text-gray-600 uppercase tracking-wide">
Jaren ervaring
</div> </div> <div> <div class="text-4xl font-bold text-primary mb-2">40+</div> <div class="text-sm text-gray-600 uppercase tracking-wide">
Koorleden
</div> </div> <div> <div class="text-4xl font-bold text-primary mb-2">4</div> <div class="text-sm text-gray-600 uppercase tracking-wide">
CD's uitgebracht
</div> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "gradient", "padding": "large" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "Wat maakt ons bijzonder?", "subtitle": "Ontdek Het Veerse Scheepstuig" })} <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"> ${frontmatter.usps.map((usp) => renderTemplate`<div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"> ${renderComponent($$result3, "USPCard", $$USPCard, { "title": usp.name, "description": usp.description, "icon": usp.icon, "color": "blue" })} </div>`)} </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "padding": "large" }, { "default": async ($$result3) => renderTemplate` <div class="relative overflow-hidden bg-gradient-to-br from-primary-600 to-secondary text-white rounded-3xl p-12 md:p-16 shadow-2xl"> <!-- Decorative elements --> <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div> <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div> <div class="relative text-center max-w-3xl mx-auto"> <div class="inline-block mb-4 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full"> <span class="text-white/90 text-sm font-medium">🎵 Beschikbaar voor boekingen</span> </div> <h2 class="text-4xl md:text-5xl font-bold mb-6">
Boek Het Veerse Scheepstuig
</h2> <p class="text-xl text-white/90 mb-8 leading-relaxed">
Op zoek naar een sfeervol optreden met maritieme muziek? Neem contact
          met ons op voor beschikbaarheid en mogelijkheden.
</p> <a href="/contact" class="inline-block bg-white text-secondary hover:bg-gray-100 font-bold px-12 py-5 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-xl">
Neem contact op
<svg class="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> ` })} ` })}`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/index.astro", void 0);

const $$file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
