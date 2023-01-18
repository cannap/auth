export default defineNuxtConfig({
    vite: {
        server: {
            hmr: {
                protocol: "wss",
                clientPort: 443,
                path: "hmr/",
            }
        }
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@sidebase/nuxt-auth'
    ],

    auth: {
        isEnabled: true,
        origin: 'http://localhost:3000',
        basePath: '/api/auth',
        enableSessionRefreshPeriodically: false,
        enableSessionRefreshOnWindowFocus: true,
        enableGlobalAppMiddleware: true,

        globalMiddlewareOptions: {
            allow404WithoutAuth: true
        }
    }
})
