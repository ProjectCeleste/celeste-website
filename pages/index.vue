<template>
  <div>
    <parallax />
    <section
      id="after-parallax"
      class="section hero is-fullheight has-text-centered is-relative"
    >
      <div class="hero-body is-middle">
        <div class="container">
          <h1 class="title has-text-gold is-1">
            Age of Empires Online
          </h1>
          <h2 class="subtitle has-text-grey-lighter is-3">
            Project Celeste
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  transition: "fade"
}
</script>

<style lang="scss" scoped>
#after-parallax {
  background: linear-gradient(180deg, #1d1101 0%, $color--darker--opaque 20%);
}
</style>
