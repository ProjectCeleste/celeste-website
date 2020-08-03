<template>
  <nav
    id="nav"
    :class="{
      navbar: true,
      'navbar-landing': $nuxt.$route.name == 'index',
      'navbar-open': showNav
    }"
    role="navigation"
    aria-label="main navigation dropdown"
  >
    <transition name="fade">
      <div v-if="$nuxt.$route.name != 'index'" class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item is-primary">
          <img
            src="~assets/logo_roman.webp"
            alt="Project Celeste"
            class="logo"
          />
        </nuxt-link>
      </div>
    </transition>

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
            }
            // {
            //   title: "Marketplace",
            //   to: { name: "marketplace" }
            // }
            // TODO re-enable marketplace page
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
            // {
            //   title: "Players",
            //   to: { name: "players" }
            // },
            // TODO re-enable players page
            {
              title: "Personality Test",
              to: { name: "personality-test" }
            },
            // {
            //   title: "Leaderboard",
            //   to: { name: "leaderboard" }
            // },
            // TODO re-enable leaderboard page
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
  transition: background-color 0.5s ease;
  font-size: 1.1rem;
  color: #fff;

  &.navbar-landing {
    background: linear-gradient(
      180deg,
      $color--darker--opaque 0%,
      rgba($color--darker--opaque, 0) 100%
    ) !important;

    &.navbar-open {
      transition: none;
      background: $color--darker--opaque !important;
    }

    .navbar-burger {
      color: #fff !important;
    }

    .navbar-menu.navbar-menu-wide {
      .navbar-item {
        background: transparent;

        .navbar-link {
          background: transparent;
        }
        &:hover,
        &.is-active {
          background-color: rgba($color--darker--opaque, 0.92) !important;
        }

        .navbar-dropdown {
          background-color: rgba($color--darker--opaque, 0.92) !important;
        }
      }
    }
  }

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
    position: absolute;
    right: 0;
    left: 0;

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
