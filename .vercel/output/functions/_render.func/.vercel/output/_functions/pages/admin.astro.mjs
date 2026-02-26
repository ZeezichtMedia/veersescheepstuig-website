/* empty css                                 */
import { c as createComponent, a as renderHead, r as renderTemplate } from '../chunks/astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="nl"> <head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=/admin/index.html"><title>Redirecting to CMS...</title>${renderHead()}</head> <body> <p>Redirecting to CMS admin...</p>  </body> </html>`;
}, "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/admin.astro", void 0);

const $$file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
