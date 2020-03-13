<template>
  <guide-section base="/guides/economy" title="Unit Control">
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
