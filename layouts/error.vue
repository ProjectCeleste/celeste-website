<template>
  <section class="section is-vcentered error-page">
    <div class="container has-text-centered">
      <p class="error-img-container">
        <img src="~/assets/img/faq.webp" />
      </p>
      <h1 v-if="error.statusCode === 404" class="title has-text-white">
        Page not found
      </h1>
      <h1 v-else class="title has-text-white">
        An error occurred
      </h1>
      <p class="description">
        <nuxt-link to="/" class="button is-primary is-medium">
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

  .error .mdi {
    font-size: 6rem !important;
  }

  .error-img-container {
    margin-top: -3.25rem;
  }
}
</style>
