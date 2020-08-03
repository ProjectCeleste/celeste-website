<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-3 has-text-gold">
        Leaderboard
        <b-icon icon="podium" size="is-large" icon-size="mdi-48px" />
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
      title: "Leaderboard - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Leaderboard - Age Of Empires Online Celeste"
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
          content: "Leaderboard - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_21.webp");
}
</style>
