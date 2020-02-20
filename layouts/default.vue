<template>
  <div>
    <b-navbar>
      <template slot="brand" class="navbar-brand-centered">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item is-primary">
          <img src="~assets/logo.png" alt="Project Celeste" class="logo" />
        </nuxt-link>
      </template>
      <template slot="start">
        <nuxt-link
          v-for="(item, key) of items"
          :key="key"
          :to="item.to"
          exact-active-class="is-active"
          class="navbar-item"
        >
          {{ item.title }}
        </nuxt-link>
      </template>
    </b-navbar>

    <section class="main-content columns">
      <div class="container column is-12">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Home",
          to: { name: "index" }
        },
        {
          title: "Status",
          to: { name: "status" }
        },
        {
          title: "Community",
          to: { name: "community" }
        },
        {
          title: "Rules",
          to: { name: "rules" }
        },
        {
          title: "FAQ",
          to: { name: "faq" }
        }
      ]
    }
  }
}
</script>
