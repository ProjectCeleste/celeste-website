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
      title: "Economy - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          propery: "og:title",
          content: "Economy - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          propery: "twitter:title",
          content: "Economy - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
