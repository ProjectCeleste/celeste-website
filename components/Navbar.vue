<template>
  <nav
    id="nav"
    class="navbar"
    role="navigation"
    aria-label="main navigation dropdown"
  >
    <div class="navbar-brand">
      <nuxt-link :to="{ name: 'index' }" class="navbar-item is-primary">
        <img src="~assets/logo_roman.png" alt="Project Celeste" class="logo" />
      </nuxt-link>
    </div>

    <div class="navbar-menu navbar-menu-wide">
      <div class="navbar-start">
        <b-navbar-group
          v-for="(group, key) of itemsStart"
          :key="key + '_group_start'"
          :items="group.items"
          :title="group.title"
          :is-right="true"
        >
        </b-navbar-group>
      </div>

      <div class="navbar-end">
        <b-navbar-group
          v-for="(group, key) of itemsEnd"
          :key="key + '_group_end'"
          :items="group.items"
          :title="group.title"
        >
        </b-navbar-group>
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
        <template v-for="(group, key) of itemsStart">
          <nuxt-link
            v-for="(item, keyItem) of group.items"
            :key="keyItem + '_mobile_' + key + '_item_start'"
            :to="item.to"
            exact-active-class="is-active"
            class="navbar-item"
          >
            {{ item.title }}
          </nuxt-link>
        </template>
        <template v-for="(group, key) of itemsEnd">
          <nuxt-link
            v-for="(item, keyItem) of group.items"
            :key="keyItem + '_mobile_' + key + '_item_end'"
            :to="item.to"
            exact-active-class="is-active"
            class="navbar-item"
          >
            {{ item.title }}
          </nuxt-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // TODO responsiveness, group with dropdowns?
  name: "BNavbar",
  data() {
    return {
      showNav: false,
      itemsStart: [
        {
          title: "Game",
          items: [
            {
              title: "Civilizations",
              to: { name: "civilizations" }
            },
            {
              title: "Guides",
              to: { name: "guides" }
            },
            {
              title: "Marketplace",
              to: { name: "marketplace" }
            }
          ]
        },
        {
          title: "Support",
          items: [
            {
              title: "Status",
              to: { name: "status" }
            },
            {
              title: "FAQ",
              to: { name: "faq" }
            }
          ]
        }
      ],
      itemsEnd: [
        {
          title: "Community",
          items: [
            {
              title: "Players",
              to: { name: "players" }
            },
            {
              title: "Personality Quiz",
              to: { name: "personality-quiz" }
            },
            {
              title: "Leaderboard",
              to: { name: "leaderboard" }
            },
            {
              title: "Community sites",
              to: { name: "community" }
            }
          ]
        },
        {
          title: "Play!",
          items: [
            {
              title: "Install",
              to: { name: "install" }
            },
            {
              title: "Rules",
              to: { name: "rules" }
            }
          ]
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
$logo-height: 120px;
$logo-width: 160px;

.navbar {
  background: $color--darker--opaque !important;
  font-size: 1.1rem;
  color: #fff;

  .navbar-burger {
    color: $color--lighter;
  }

  .navbar-menu.navbar-menu-wide {
    .navbar-start,
    .navbar-end {
      flex-grow: 1;
      width: 50%;
      max-width: 50%;
    }

    .navbar-start {
      justify-content: flex-end;
      margin-right: $logo-width / 2;
    }

    .navbar-end {
      justify-content: flex-start;
      margin-left: $logo-width / 2;
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
      padding: 0;
    }
  }

  .navbar-menu-mobile {
    background: $color--darker--opaque !important;
    padding-top: 3rem;

    @media screen and (min-width: 1024px) {
      & {
        display: none;
      }
    }

    .navbar-item {
      color: $grey-lighter !important;
      font-family: "Ashley Crawford MT", "Times New Roman", "Arimo", sans-serif;
      transition: background-color 0.25s ease, background-color 0.25s ease;
      text-shadow: 2px 0 2px #192b33;
      background: $color--darker--opaque;

      &:hover,
      &.is-active {
        color: white;
        background-color: $color--darker--active;
      }
    }
  }

  .logo {
    max-height: $logo-height;
    max-width: $logo-width;
  }
}
</style>
