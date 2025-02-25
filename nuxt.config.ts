// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
})

// '@nuxtjs/axios' QUEBRANDO O SERVIDOR CONFIGURAR AXIOS/NUXT