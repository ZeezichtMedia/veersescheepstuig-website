import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DuMEMoo2.mjs';
import { manifest } from './manifest_BismdJjk.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/bestuur.astro.mjs');
const _page3 = () => import('./pages/combo.astro.mjs');
const _page4 = () => import('./pages/concerten.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/dirigent.astro.mjs');
const _page7 = () => import('./pages/fotos-videos.astro.mjs');
const _page8 = () => import('./pages/geschiedenis.astro.mjs');
const _page9 = () => import('./pages/koor.astro.mjs');
const _page10 = () => import('./pages/ledenportaal.astro.mjs');
const _page11 = () => import('./pages/login.astro.mjs');
const _page12 = () => import('./pages/onze-muziek.astro.mjs');
const _page13 = () => import('./pages/repertoire.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin.astro", _page1],
    ["src/pages/bestuur.astro", _page2],
    ["src/pages/combo.astro", _page3],
    ["src/pages/concerten.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/dirigent.astro", _page6],
    ["src/pages/fotos-videos.astro", _page7],
    ["src/pages/geschiedenis.astro", _page8],
    ["src/pages/koor.astro", _page9],
    ["src/pages/ledenportaal.astro", _page10],
    ["src/pages/login.astro", _page11],
    ["src/pages/onze-muziek.astro", _page12],
    ["src/pages/repertoire.astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "bd718ea2-ecb0-44f9-a721-68fd1c65fa70",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
