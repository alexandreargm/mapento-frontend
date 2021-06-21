export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mapento-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/tailwind',
    '~assets/css/typography',
    '~assets/css/vue-formulate'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/feed-utils.js', mode: 'client', ssr: 'false' },
    { src: '~/plugins/array-sort-by.js', mode: 'client', ssr: 'false' },
    { src: '~/plugins/luxon.js', mode: 'client', ssr: 'false' }
  ],

  router: {
    middleware: [
      'auth'
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://vueformulate.com
    '@braid/vue-formulate/nuxt',
    // https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    // https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['array-sort-by']
  },
  apollo: {
    clientConfigs: {
      default: '~/modules/apollo-nuxt/apollo-config.js'
    }
  },
  formulate: {
    configPath: '~/modules/vue-formulate/formulate.config.js'
  },
  // Allows hot-reloading when running inside a docker container.
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  },
  ssr: false // Disable Server Side rendering
}
