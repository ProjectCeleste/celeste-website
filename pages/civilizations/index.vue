<template>
  <div></div>
</template>

<script>
export default {
  transition: "fade",
  meta: {
    defaultRoute: "greeks"
  },
  middleware: ["redirect"],
  head() {
    return {
      title: "Civilizations - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Civilizations - Age Of Empires Online Celeste"
        },
        {
          hid: "og:url",
          property: "og:url",
          content:
            (process.env.BASE_URL || "http://localhost:3000") + this.$route.path
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "Civilizations - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
