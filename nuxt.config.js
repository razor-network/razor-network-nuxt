const webpack = require('webpack')
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Razor Network',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Truly decentralized oracle network for Synthetic assets' },
      { name: 'keywords', content: 'razor, network, blockchain, oracle, network' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      // Google Fonts
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,600,500,700,800,900|Poppins:100,200,300,400,500,600,700,800,900&amp;subset=latin" },
      // Font Awesome
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' },
      // Atom dark theme
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/atom-one-dark.min.css' },
      // Animate.CSS
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' }
    ],
    script: [
      { src: '/jquery.min.js', body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './assets/css/style.css',
    './assets/css/style1.css',
    'aos/dist/aos.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Find the rule which contains a assets file extension
      const assetsLoader = config.module.rules.find(rule => rule.test.test('.png'));

      // Overwrite the test regex and add `pdf`
      assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf)$/i;

      return config;
    },
    vendor: ["aos", "jquery"]
  },
  plugins: [{ src: '~/plugins/aos', ssr: false }, { src: '~/plugins/main', ssr: false }]
}
