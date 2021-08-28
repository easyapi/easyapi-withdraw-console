module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '{{ name }} - EasyAPI快速提现',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: []
  },
  css: [
    '@/assets/scss/common.scss',
    '@/assets/scss/element-variables.scss'
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/echarts',
    '@/plugins/router',
    '@/plugins/is-chinese-phone-number',
    '@/plugins/is-email',
    { src: '@/plugins/common.js', ssr: false }
  ],
  /*
   ** Customize the progress bar color
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  router: {
    base: '/console/'
  },
  axios: {},
  loading: {
    color: '#18c1d6',
    failedColor: '#18c1d6'
  },
  styleResources: {
    scss: './assets/scss/variables.scss'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
    },
    maxChunkSize: 300000, // 单个包最大尺寸
    extractCSS: true // 单独提取CSS
  },
  server: {
    port: 3000
  },
  env: {
    baseUrl: 'https://withdraw-api.easyapi.com',
    // baseUrl: 'http://127.0.0.1:7070',
    accountUrl: 'https://account-api.easyapi.com'
  }
}
