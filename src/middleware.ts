import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    // Check if the user is trying to access a protected route
    if (context.url.pathname.startsWith('/ledenportaal')) {
        // Check for the authentication cookie
        const authCookie = context.cookies.get('vs_auth_token');

        // If not authenticated, redirect to the login page
        if (!authCookie || authCookie.value !== 'authenticated') {
            return context.redirect('/login');
        }
    }

    // If authenticated or accessing a public route, continue normally
    return next();
});
