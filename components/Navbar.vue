<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{ name: 'index' }" class="navbar-item is-primary">
        <img src="~assets/logo_roman.png" alt="Project Celeste" class="logo" />
      </nuxt-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link
          v-for="(item, key) of itemsStart"
          :key="key + 'start'"
          :to="item.to"
          exact-active-class="is-active"
          class="navbar-item"
        >
          {{ item.title }}
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <nuxt-link
          v-for="(item, key) of itemsEnd"
          :key="key + 'end'"
          :to="item.to"
          exact-active-class="is-active"
          class="navbar-item"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>

    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      :class="{ 'is-active': showNav }"
      @click="showNav = !showNav"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <div
      class="navbar-menu navbar-menu-mobile"
      :class="{ 'is-active': showNav }"
    >
      <div class="navbar-end">
        <nuxt-link
          v-for="(item, key) of itemsStart"
          :key="key + 'mobile_start'"
          :to="item.to"
          exact-active-class="is-active"
          class="navbar-item"
        >
          {{ item.title }}
        </nuxt-link>
        <nuxt-link
          v-for="(item, key) of itemsEnd"
          :key="key + 'mobile_end'"
          :to="item.to"
          exact-active-class="is-active"
          class="navbar-item"
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BNavbar",
  data() {
    return {
      showNav: false,
      itemsStart: [
        {
          title: "Home",
          to: { name: "index" }
        },
        {
          title: "Civilizations",
          to: { name: "civilizations" }
        },
        {
          title: "Status",
          to: { name: "status" }
        },
        {
          title: "Marketplace",
          to: { name: "status" }
        }
        // {
        //   title: "Personality Quiz",
        //   to: { name: "personality-quiz" }
        // }
      ],
      itemsEnd: [
        {
          title: "Community",
          to: { name: "community" }
        },
        {
          title: "Players",
          to: { name: "personality-quiz" }
        },
        {
          title: "Leaderboard",
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
  },
  mounted() {
    window.addEventListener("resize", this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize)
  },
  methods: {
    onResize() {
      this.showNav = false
    }
  }
}
</script>

<style lang="scss">
.navbar {
  background: transparent;
  font-size: 1.1rem;

  .navbar-item {
    color: white;
    transition: background-color 0.5s ease;

    &:hover {
      color: white;
    }

    &.is-active {
      color: white;
    }
  }

  .navbar-brand {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    .navbar-item:hover,
    .navbar-item.nuxt-link-active {
      background: none !important;
    }
  }

  .navbar-menu-mobile {
    @media screen and (min-width: 1024px) {
      & {
        display: none;
      }
    }

    .navbar-item {
      color: $grey-darker !important;

      &.is-active {
        background-color: $grey-lighter;
      }
    }
  }

  .logo {
    max-height: 120px;
  }
}
</style>
