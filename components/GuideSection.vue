<template>
  <div class="column">
    <h4 class="title is-4 has-text-centered has-text-white guide-title">
      {{ title }}
    </h4>
    <div v-if="base" class="tabs is-centered">
      <ul>
        <li class="is-basic">
          <nuxt-link :to="base + '/basic'" exact-active-class="is-active">
            Basic
          </nuxt-link>
        </li>
        <li class="is-intermediate">
          <nuxt-link
            :to="base + '/intermediate'"
            exact-active-class="is-active"
          >
            Intermediate
          </nuxt-link>
        </li>
        <li class="is-advanced">
          <nuxt-link :to="base + '/advanced'" exact-active-class="is-active">
            Advanced
          </nuxt-link>
        </li>
      </ul>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "GuideSection",
  props: {
    title: { type: String, required: true },
    base: { type: String, default: undefined }
  }
}
</script>
