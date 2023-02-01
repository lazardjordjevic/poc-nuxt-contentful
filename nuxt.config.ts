// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    generate: {
        routes: [
            '/journal/:id',
            // add additional dynamic routes here as needed
        ],
    },
})
