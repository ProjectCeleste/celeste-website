<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a :class="{ 'navbar-link': true, 'navbar-link-chevron-left': isRight }">
      {{ title }}
    </a>
    <div class="navbar-dropdown" :class="{ 'is-right': isRight }">
      <nuxt-link
        v-for="(item, keyItem) of items"
        :key="keyItem"
        :to="item.to"
        exact-active-class="is-active"
        class="navbar-item"
      >
        {{ item.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BNavbarGroup",
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true },
    isRight: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.navbar-item {
  color: $grey-lighter !important;
  font-family: "Ashley Crawford MT", "Times New Roman", "Arimo", sans-serif;
  transition: background-color 0.25s ease, background-color 0.25s ease;
  text-shadow: 2px 0 2px #192b33;

  .navbar-link {
    transition: background-color 0.25s ease, background-color 0.25s ease;
    color: $grey-lighter;

    &:hover {
      color: $primary;
    }

    &:after {
      border-color: $color--gold;
    }

    &.navbar-link-chevron-left {
      padding-right: 0.75rem;
      padding-left: 2.5rem;

      &:after {
        left: 1.125rem;
        right: auto;
      }
    }
  }

  &:hover,
  &.is-active {
    .navbar-link {
      color: white;
      background-color: $color--darker--active;
    }

    .navbar-dropdown {
      animation: fade 0.25s ease;
    }
  }

  .navbar-dropdown {
    border: none;
    background: $color--darker--opaque;

    .navbar-item {
      color: $grey-lighter !important;

      &:hover,
      &.is-active {
        color: white !important;
        background-color: $color--darker--active;
      }
    }
  }
}

@media screen and (min-width: 1025px) {
  .navbar-item.is-hoverable:hover .navbar-dropdown {
    display: block !important;
  }
  .navbar-item.is-hoverable:focus-within .navbar-dropdown {
    display: none;
  }
}
</style>
