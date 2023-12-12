// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    css: [
        '~/assets/style.scss'
    ],
    modules: ['@pinia/nuxt'],
    experimental: {
        renderJsonPayloads: true
    },
    runtimeConfig: {
        baseUrl:  'https://lenta.ru/rss'
    }
})
