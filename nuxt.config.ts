// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-15',

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "@/assets/styles/_mixins.scss" as *;',
        },
      },
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'referrer',
          content: 'no-referrer',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },

  icon: {
    mode: 'svg',
    componentName: 'NuxtIcon',
    customCollections: [
      {
        prefix: 'logo',
        dir: './app/assets/icons/logo',
        normalizeIconName: false,
      },
    ],
  },

  experimental: {
    asyncContext: true,
    typedPages: true,
  },
})
