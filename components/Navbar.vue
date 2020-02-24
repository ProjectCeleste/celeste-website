<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <slot name="brand" />
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <slot name="start" />
      </div>

      <div class="navbar-end">
        <slot name="end" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BNavbar"
}
</script>

<style lang="scss">
.navbar {
  .logo {
    max-height: 6rem;
  }
}
</style>
