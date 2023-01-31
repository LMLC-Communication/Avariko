export default defineNuxtConfig({
  app: {
    head: {
      title: 'Avariko',
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: 'description',
          content:
            "Avariko est un lieu de sport incroyable qui vous offre une expérience de crossfit de haut niveau. Nous proposons une variété d'entraînements de crossfit pour tous les niveaux, des débutants aux athlètes expérimentés. Que vous soyez intéressé par une routine de remise en forme ou par une préparation physique pour des compétitions, notre équipe de coachs expérimentés vous guidera tout au long de votre parcours.",
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
  css: ['~/assets/fonts/blender-pro/stylesheet.css'],
  plugins: [
    { src: '@/plugins/aos', ssr: false, mode: 'client' },
    // '@/plugins/three.js'
  ],
  build: {
    transpile: ['treejs'],
  },
});
