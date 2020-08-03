<template>
  <guide-section base="/guides/economy" title="Economy">
    <div></div>
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
      title: "Economy - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: "Economy - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Economy - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
