<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-3 has-text-gold">
        Players
        <b-icon icon="account-group" size="is-large" icon-size="mdi-48px" />
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
      title: "Players - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          propery: "og:title",
          content: "Players - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          propery: "twitter:title",
          content: "Players - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_15.webp");
}
</style>
