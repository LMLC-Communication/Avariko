export default defineNuxtConfig({
  app: {
    head: {
      title: 'Avariko Athletics',
      htmlAttrs: {
        lang: 'fr',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content:
            "Avariko Athletics est une salle de sport unique proposant un entraînement adapté et sur mesure pour tous. Que vous soyez débutant, sportif de haut niveau, ou à la recherche d'une meilleure forme physique, rejoignez-nous pour devenir la meilleure version de vous-même. Contactez-nous dès aujourd'hui !",
        },
        {
          name: 'msapplication-TileColor',
          content: '#0097a0',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#000000',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  nitro: {
    preset: 'vercel-edge',
  },
  css: [
    '~/assets/fonts/blender-pro/stylesheet.css',
    'leaflet/dist/leaflet.css', // Ajoutez cette ligne
  ],
  plugins: [
    { src: '@/plugins/aos', ssr: false, mode: 'client' },
    // '@/plugins/three.js'
  ],
  build: {
    transpile: ['treejs'],
  },
  modules: ['nuxt-simple-sitemap'],
  // /, /coachs, /contact, /horaires-et-tarifs, /mentions-legales, /offre
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://avariko-athletics.com',
    },
  },
});
