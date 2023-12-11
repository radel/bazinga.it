export default defineNuxtConfig({
  extends: '@nuxt-themes/typography',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  generate: {
    fallback: true
  },
  documentDriven: {
    page: false
  },

  target: 'static',
  /*
   ** Headers ofimport { defineNuxtConfig } from 'nuxt' import { defineNuxtConfig } from 'nuxt'the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'it'
    },
    title: 'Bazinga!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // { src: '~/plugins/substack.js', mode: 'client' }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  /*
   ** Nuxt.js dev-modules
   */
  image: {    
    domains: ['bazinga.it'], 
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-simple-sitemap',
    // 'vue-plausible',
    [
      '@nuxtjs/google-fonts',
      {
        download: true,
        display: 'swap',
        overwriting: true,
        families: {
          'IBM Plex Sans': {
            wght: [300, 800]
          },
           'Libre Franklin': {
            wght: [300, 700]
          }
        }
      }
    ]
  ],
  colorMode: {    classSuffix: ''  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    /* markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }, */
    nestedProperties: ['author.name']
  },

  sitemap: {    hostname: 'https://bazinga.it',  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
})
