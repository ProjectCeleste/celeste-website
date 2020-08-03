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
          propery: "og:title",
          content: "Civilizations - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          propery: "twitter:title",
          content: "Civilizations - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
