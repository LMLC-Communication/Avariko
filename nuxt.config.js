export default {
  // set title of the page
  head: {
    title: 'Avariko',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  nitro: {
    preset: 'vercel-edge',
  },
  css: ['~/assets/fonts/blender-pro/stylesheet.css'],
};
