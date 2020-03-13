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
  middleware: ["redirect"]
}
</script>
