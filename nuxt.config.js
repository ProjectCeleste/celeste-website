export default {
  mode: "universal",
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
        rel: "og:site_name",
        content: "Age of Empires Online - Project Celeste"
      },
      { rel: "og:title", content: "Age of Empires Online - Project Celeste" },
      { rel: "og:type", content: "website" },
      {
        rel: "og:description",
        content:
          "A fan-made community server that brings the excellent Age of Empires Online back to life! Complete co-op quests with your friends or challenge their skills in the PvP arena. Join the community and participate in tournaments or gain high level gear in co-op quests!"
      },
      {
        rel: "og:image",
        content: "https://www.projectceleste.com/assets/meta/512.png",
        crossorigin: "anonymous"
      }, // TODO change og icon
      {
        rel: "twitter:title",
        content: "Age of Empires Online - Project Celeste"
      },
      {
        rel: "twitter:description",
        content:
          "A fan-made community server that brings the excellent Age of Empires Online back to life! Complete co-op quests with your friends or challenge their skills in the PvP arena. Join the community and participate in tournaments or gain high level gear in co-op quests!"
      },
      {
        rel: "twitter:image:src",
        content: "https://www.projectceleste.com/assets/meta/512.png",
        crossorigin: "anonymous"
      },
      { rel: "twitter:card", content: "summary" }
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
