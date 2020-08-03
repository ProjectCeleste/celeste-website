<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-3 has-text-gold">
        Marketplace
        <b-icon icon="basket" size="is-large" icon-size="mdi-48px" />
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  transition: "fade",
  scrollToTop: true,
  head() {
    return {
      title: "Marketplace - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          propery: "og:title",
          content: "Marketplace - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          propery: "twitter:title",
          content: "Marketplace - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_22.webp");
}
</style>
