const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'College Society Service',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10,user-scalable=yes' },
      { hid: 'description', name: 'description', content: '단국대학교 소프트웨어학과 커뮤니티' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/fontawesome-all.min.css' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/css/jquery-ui.min.css' },
      { rel: 'stylesheet', href: '/css/nanumbarungothic.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor:[
      'axios',
      '~/plugins/dkswcm',
    ],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery',
      }),
    ]
  },
  css: [
    // '~node_modules/vue-wysiwyg/dist/vueWysiwyg.css',
    // '~node_modules/froala-editor/css/froala_editor.pkgd.min.css',
    // '~node_modules/froala-editor/css/froala_style.min.css',
    '~/assets/css/common.scss'
  ]
}
