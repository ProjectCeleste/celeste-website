<template>
  <div></div>
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
          property: "og:title",
          content: "Fundamentals - Age Of Empires Online Celeste"
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
          content: "Fundamentals - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
