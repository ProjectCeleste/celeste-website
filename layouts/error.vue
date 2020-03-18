<template>
  <section class="section is-vcentered error-page">
    <div class="container has-text-centered">
      <p class="content">
        <b-icon
          size="is-large"
          icon="alert-circle-outline"
          class="error has-text-danger"
        />
      </p>
      <h1 v-if="error.statusCode === 404" class="title has-text-gold">
        Page not found
      </h1>
      <h1 v-else class="title has-text-gold">
        An error occurred
      </h1>
      <p class="description">
        <nuxt-link to="/">
          Back to home page
        </nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  transition: "fade",
  props: {
    error: { type: Object, required: true }
  }
}
</script>

<style lang="scss">
.error-page {
  background-image: url("~assets/img/background_16.webp");

  .description a {
    font-family: "Arimo", "Calibri", "Carlito", sans-serif;
    color: white !important;
    text-shadow: 2px 0 2px #192b33;
    font-size: $size-5;
  }

  .error .mdi {
    font-size: 6rem !important;
  }
}
</style>
