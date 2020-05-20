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
          name: "og:title",
          content: "Leaderboard - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
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
