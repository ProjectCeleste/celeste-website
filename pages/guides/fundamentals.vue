<template>
  <div class="column">
    <h4 class="title is-4 has-text-centered has-text-white guide-title">
      Build Orders
    </h4>
    <div class="tabs is-centered">
      <ul>
        <li class="is-basic">
          <nuxt-link
            to="/guides/fundamentals/basic"
            exact-active-class="is-active"
          >
            Basic
          </nuxt-link>
        </li>
        <li class="is-intermediate">
          <nuxt-link
            to="/guides/fundamentals/intermediate"
            exact-active-class="is-active"
          >
            Intermediate
          </nuxt-link>
        </li>
        <li class="is-advanced">
          <nuxt-link
            to="/guides/fundamentals/advanced"
            exact-active-class="is-active"
          >
            Advanced
          </nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child />
  </div>
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
