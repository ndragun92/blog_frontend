import webpack from 'webpack'

const apiUrl = process.env.apiUrl || 'http://localhost:3333'

export default {
  env: {
    apiUrl,
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    { src: '@/assets/fontawesome/fontawesome.min.css', lang: 'css' },
    { src: '@/assets/styles/global.scss', lang: 'scss' },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/axios.js' },
    { src: '@/plugins/vuelidate.js' },
    { src: '@/plugins/vue-lazyload.client.js', client: true },
    { src: '@/plugins/vue-directive-tooltip.js' },
    { src: '@/mixins/global.js' },
    { src: '@/components/global.js' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    // Doc: https://www.npmjs.com/package/nuxt-user-agent
    'nuxt-user-agent',
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Roboto:300,400,500,700,900&display=swap'],
    },
  },
  styleResources: {
    scss: [
      '@/assets/styles/variables/_fonts.scss',
      '@/assets/styles/variables/_colors.scss',
      '@/assets/styles/variables/_zIndex.scss',
      '@/assets/styles/variables/_mixins.scss',
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: apiUrl,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    optimization: {
      splitChunks: {
        name: true,
      },
    },
  },
}
