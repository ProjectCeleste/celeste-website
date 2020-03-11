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
  middleware: ["redirect"]
}
</script>
