const OG_IMAGE = "/img/og_logo_roman.png"
const BASE_URL = process.env.BASE_URL || "http://localhost:3000"

export default {
  target: "static",
  mode: "universal",
  env: {
    baseUrl: BASE_URL
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Age Of Empires Online - Project Celeste",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A fan-made community server that brings the excellent Age of Empires Online back to life! Complete co-op quests with your friends or challenge their skills in the PvP arena. Join the community and participate in tournaments or gain high level gear in co-op quests!"
      },
      {
        property: "og:site_name",
        content: "Age of Empires Online - Project Celeste"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Age of Empires Online - Project Celeste"
      },
      { property: "og:type", content: "website" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "A fan-made community server that brings the excellent Age of Empires Online back to life! Complete co-op quests with your friends or challenge their skills in the PvP arena. Join the community and participate in tournaments or gain high level gear in co-op quests!"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: BASE_URL + OG_IMAGE
      },
      {
        property: "og:image:width",
        content: "400"
      },
      {
        property: "og:image:height",
        content: "400"
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Age of Empires Online - Project Celeste"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "A fan-made community server that brings the excellent Age of Empires Online back to life! Complete co-op quests with your friends or challenge their skills in the PvP arena. Join the community and participate in tournaments or gain high level gear in co-op quests!"
      },
      {
        hid: "twitter:image:src",
        property: "twitter:image:src",
        content: BASE_URL + OG_IMAGE
      },
      { property: "twitter:card", content: "summary" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/favicon/WebsiteLogo_16.png`
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/favicon/WebsiteLogo_32.png`
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "64x64",
        href: `/favicon/WebsiteLogo_64.png`
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        href: `/favicon/WebsiteLogo_128.png`
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "256x256",
        href: `/favicon/WebsiteLogo_256.png`
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff",
        href: `/fonts/AshleyCrawfordMT-Bold.woff`
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: `/fonts/AshleyCrawfordMT-Bold.woff2`
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/styles/main.scss"],
  styleResources: {
    scss: ["~styles/vars/*.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/b-components"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "vue-scrollto/nuxt",
    "@nuxtjs/style-resources",
    "nuxtjs-mdi-font"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    fallback: true
  }
}
