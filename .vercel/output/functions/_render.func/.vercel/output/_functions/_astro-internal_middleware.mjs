import { d as defineMiddleware, s as sequence } from './chunks/index_BxnNq_4f.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D4I9NX1k.mjs';
import 'cookie';

const onRequest$1 = defineMiddleware((context, next) => {
  if (context.url.pathname.startsWith("/ledenportaal")) {
    const authCookie = context.cookies.get("vs_auth_token");
    if (!authCookie || authCookie.value !== "authenticated") {
      return context.redirect("/login");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
