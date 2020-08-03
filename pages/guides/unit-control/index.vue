<template>
  <guide-section base="/guides/unit-control" title="Unit Control">
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
      title: "Unit Control - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: "Unit Control - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Unit Control - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
