import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    generate: {
        routes: ['/journal/:id', '/'],
    },
    build: {
        transpile: ['contentful'],
    },
})
