import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate, a as renderHead, b as renderComponent, f as renderSlot } from './astro/server_XcAptiy-.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';

const logo = "/images/logo.png";
const logoHeight = 80;
const logoWhite$1 = "/images/logo-white.png";
const logoWhiteHeight = 80;
const logoAlt = "Het Veerse Scheepstuig";
const navigation = [
	{
		label: "Home",
		link: "/"
	},
	{
		label: "Wie zijn wij",
		link: "/koor",
		submenu: [
			{
				label: "Koor",
				link: "/koor"
			},
			{
				label: "Dirigent",
				link: "/dirigent"
			},
			{
				label: "Combo",
				link: "/combo"
			},
			{
				label: "Bestuur",
				link: "/bestuur"
			}
		]
	},
	{
		label: "Concerten",
		link: "/concerten"
	},
	{
		label: "Foto's & Video's",
		link: "/fotos-videos"
	},
	{
		label: "Repertoire",
		link: "/repertoire",
		submenu: [
			{
				label: "Repertoire",
				link: "/repertoire"
			},
			{
				label: "Onze Muziek",
				link: "/onze-muziek"
			}
		]
	},
	{
		label: "Contact",
		link: "/contact"
	},
	{
		label: "Ledenportaal",
		link: "/ledenportaal"
	}
];
const ctaText = "Boek ons";
const ctaLink = "/contact";
const ctaColor = "primary";
const headerData = {
	logo: logo,
	logoHeight: logoHeight,
	logoWhite: logoWhite$1,
	logoWhiteHeight: logoWhiteHeight,
	logoAlt: logoAlt,
	navigation: navigation,
	ctaText: ctaText,
	ctaLink: ctaLink,
	ctaColor: ctaColor
};

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const navigation = headerData.navigation || [];
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" data-astro-cid-3ef6ksr2> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between h-20" data-astro-cid-3ef6ksr2> <!-- Logo --> <a href="/" class="flex items-center justify-center relative"${addAttribute(`height: ${Math.max(headerData.logoHeight, headerData.logoWhiteHeight)}px; min-width: 150px;`, "style")} data-astro-cid-3ef6ksr2> <img id="logo-white"${addAttribute(headerData.logoWhite, "src")}${addAttribute(headerData.logoAlt, "alt")}${addAttribute(`height: ${headerData.logoWhiteHeight}px`, "style")} class="w-auto object-contain transition-opacity duration-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-astro-cid-3ef6ksr2> <img id="logo-color"${addAttribute(headerData.logo, "src")}${addAttribute(headerData.logoAlt, "alt")}${addAttribute(`height: ${headerData.logoHeight}px`, "style")} class="w-auto object-contain transition-opacity duration-300 opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-astro-cid-3ef6ksr2> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center space-x-8" data-astro-cid-3ef6ksr2> ${navigation.map((item) => item.submenu ? renderTemplate`<div class="relative group" data-astro-cid-3ef6ksr2> <button class="nav-link font-medium transition-colors flex items-center gap-1" data-astro-cid-3ef6ksr2> ${item.label} <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-3ef6ksr2></path> </svg> </button> <!-- Dropdown Menu --> <div class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" data-astro-cid-3ef6ksr2> <div class="py-2" data-astro-cid-3ef6ksr2> ${item.submenu.map((subitem) => renderTemplate`<a${addAttribute(subitem.link, "href")} class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors" data-astro-cid-3ef6ksr2> ${subitem.label} </a>`)} </div> </div> </div>` : renderTemplate`<a${addAttribute(item.link, "href")} class="nav-link font-medium transition-colors" data-astro-cid-3ef6ksr2> ${item.label} </a>`)} <!-- CTA Button --> <a${addAttribute(headerData.ctaLink, "href")}${addAttribute(`cta-button cta-button-${headerData.ctaColor} px-6 py-2 rounded-full font-bold transition-all`, "class")} data-astro-cid-3ef6ksr2> ${headerData.ctaText} </a> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg transition-colors" aria-label="Toggle menu" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6 menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </nav> <!-- Mobile Menu --> <div id="mobile-menu" class="md:hidden hidden mobile-menu-bg" data-astro-cid-3ef6ksr2> <div class="px-4 pt-2 pb-6 space-y-3" data-astro-cid-3ef6ksr2> ${navigation.map((item, index) => item.submenu ? renderTemplate`<div data-astro-cid-3ef6ksr2> <button class="w-full text-left px-4 py-3 rounded-lg nav-link-mobile font-medium transition-colors flex items-center justify-between mobile-submenu-toggle"${addAttribute(`submenu-${index}`, "data-submenu")} data-astro-cid-3ef6ksr2> ${item.label} <svg class="w-4 h-4 transition-transform submenu-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-3ef6ksr2></path> </svg> </button> <div class="hidden pl-4 space-y-2 mt-2"${addAttribute(`submenu-${index}`, "id")} data-astro-cid-3ef6ksr2> ${item.submenu.map((subitem) => renderTemplate`<a${addAttribute(subitem.link, "href")} class="block px-4 py-2 rounded-lg nav-link-mobile text-sm transition-colors" data-astro-cid-3ef6ksr2> ${subitem.label} </a>`)} </div> </div>` : renderTemplate`<a${addAttribute(item.link, "href")} class="block px-4 py-3 rounded-lg nav-link-mobile font-medium transition-colors" data-astro-cid-3ef6ksr2> ${item.label} </a>`)} <a${addAttribute(headerData.ctaLink, "href")}${addAttribute(`block px-6 py-3 rounded-full font-bold text-center cta-button-mobile cta-button-mobile-${headerData.ctaColor} transition-all mt-4`, "class")} data-astro-cid-3ef6ksr2> ${headerData.ctaText} </a> </div> </div> </header>  `;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/components/Header.astro", void 0);

const logoWhite = "/images/logo-white.png";
const aboutText = "Shantykoor Het Veerse Scheepstuig brengt maritieme muziek tot leven. Van traditionele shanties tot moderne folksongs, ons vierstemmig koor en combo zorgen voor een sfeervol optreden.";
const contact = {
	email: "scheepstuig@zeelandnet.nl",
	phone: "06 40 70 89 02",
	address: "p/a Vernovenhoekstraat 45",
	city: "4443 AR Nisse"
};
const usefulLinks = [
	{
		label: "Home",
		link: "/"
	},
	{
		label: "Geschiedenis",
		link: "/geschiedenis"
	},
	{
		label: "Dirigent",
		link: "/dirigent"
	},
	{
		label: "Het Combo",
		link: "/combo"
	}
];
const infoLinks = [
	{
		label: "Repertoire",
		link: "/repertoire"
	},
	{
		label: "Contact",
		link: "/contact"
	},
	{
		label: "Nieuwsbrief",
		link: "/contact#nieuwsbrief"
	}
];
const image = "/images/contact-header.webp";
const imageAlt = "Het Veerse Scheepstuig";
const copyright = "Copyright © 2025 Shantykoor Het Veerse Scheepstuig";
const madeBy = "Website gemaakt door:";
const madeByLink = "https://zee-zicht.nl";
const madeByName = "Zee-Zicht Media";
const footerData = {
	logoWhite: logoWhite,
	aboutText: aboutText,
	contact: contact,
	usefulLinks: usefulLinks,
	infoLinks: infoLinks,
	image: image,
	imageAlt: imageAlt,
	copyright: copyright,
	madeBy: madeBy,
	madeByLink: madeByLink,
	madeByName: madeByName
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-secondary text-white"> <!-- Main Footer Content --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16"> <!-- Column 1: Logo & About --> <div class="lg:col-span-1"> <img${addAttribute(footerData.logoWhite, "src")}${addAttribute(headerData.logoAlt, "alt")} class="h-16 w-auto mb-4 object-contain" width="200" height="64"> <p class="text-gray-300 leading-relaxed text-sm"> ${footerData.aboutText} </p> </div> <!-- Column 2: Contact & Locatie --> <div> <h3 class="font-heading text-sm font-bold mb-6 inline-block border border-white/60 rounded-full px-4 py-1">Contact & Locatie</h3> <ul class="space-y-3"> <li> <a${addAttribute(`mailto:${footerData.contact.email}`, "href")} class="text-gray-300 hover:text-white transition-colors flex items-start gap-2"> <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>${footerData.contact.email}</span> </a> </li> <li> <a${addAttribute(`https://maps.google.com/?q=${footerData.contact.address},+${footerData.contact.city}`, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors flex items-start gap-2"> <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span> ${footerData.contact.address}<br> ${footerData.contact.city} </span> </a> </li> <li> <a${addAttribute(`tel:${footerData.contact.phone.replace(/-/g, "")}`, "href")} class="text-gray-300 hover:text-white transition-colors flex items-center gap-2"> <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>${footerData.contact.phone}</span> </a> </li> </ul> </div> <!-- Column 3: Handige Links --> <div> <h3 class="font-heading text-sm font-bold mb-6 inline-block border border-white/60 rounded-full px-4 py-1">Handige links</h3> <ul class="space-y-2"> ${footerData.usefulLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.link, "href")} class="text-gray-300 hover:text-white transition-colors">${link.label}</a> </li>`)} </ul> </div> <!-- Column 4: Informatie --> <div> <h3 class="font-heading text-sm font-bold mb-6 inline-block border border-white/60 rounded-full px-4 py-1">Informatie</h3> <ul class="space-y-2"> ${footerData.infoLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.link, "href")} class="text-gray-300 hover:text-white transition-colors">${link.label}</a> </li>`)} </ul> </div> <!-- Column 5: Image --> <div class="hidden lg:block"> <img${addAttribute(footerData.image, "src")}${addAttribute(footerData.imageAlt, "alt")} class="w-full h-auto rounded-lg shadow-xl object-cover max-h-[300px]" width="400" height="300"> </div> </div> </div> <!-- Bottom Bar --> <div class="border-t border-white/10"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-gray-300 text-sm"> ${footerData.copyright} </p> <p class="text-gray-300 text-sm"> ${footerData.madeBy} <a${addAttribute(footerData.madeByLink, "href")} target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary transition-colors font-medium">${footerData.madeByName}</a> </p> </div> </div> </div> </footer>`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, ogImage } = Astro2.props;
  const canonicalURL = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : Astro2.url;
  return renderTemplate`<html lang="nl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Security Headers --><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://identity.netlify.com https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.netlify.com;"><!-- Preconnect to Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- SEO --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}>${ogImage && renderTemplate`<meta property="twitter:image"${addAttribute(ogImage, "content")}>`}${renderHead()}</head> <body class="min-h-screen bg-white"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };
