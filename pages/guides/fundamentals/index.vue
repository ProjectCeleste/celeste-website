<template>
  <guide-section base="/guides/fundamentals" title="Fundamentals">
    <nuxt-child />
  </guide-section>
</template>

<script>
export default {
  transition: "fade",
  meta: {
    defaultRoute: "basic"
  },
  middleware: ["redirect"],
  head() {
    return {
      title: "Fundamentals - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: "Fundamentals - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Fundamentals - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
