<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="columns">
            <aside class="menu column is-narrow">
              <div
                class="columns card-header-title section-title is-variable is-0 is-paddingless"
              >
                <div class="column">
                  <h2 class="title is-3 has-text-gold">
                    Guides
                    <b-icon icon="book" size="is-large" icon-size="mdi-48px" />
                  </h2>
                </div>
              </div>
              <ul class="menu-list">
                <li>
                  <nuxt-link to="/guides" exact-active-class="is-active">
                    Home
                  </nuxt-link>
                </li>
              </ul>
              <p class="menu-label">
                PvE
              </p>
              <ul class="menu-list">
                <li><a>Capital City</a></li>
                <li><a>Gear</a></li>
                <li><a>Crafting</a></li>
                <li><a>Workshops</a></li>
                <li><a>Warehouses</a></li>
              </ul>
              <p class="menu-label">
                PvP
              </p>
              <ul class="menu-list">
                <li>
                  <a>
                    <img
                      src="~/assets/img/guides/nav/1 - Active.png"
                      class="guide-link-icon"
                    />
                    <span>Basic Questions</span>
                  </a>
                </li>
                <li>
                  <nuxt-link
                    to="/guides/fundamentals"
                    exact-active-class="is-active"
                  >
                    <img
                      src="~/assets/img/guides/nav/2 - Active.png"
                      class="guide-link-icon"
                    />
                    <span>Fundamentals</span>
                  </nuxt-link>
                </li>
                <li>
                  <a>
                    <img
                      src="~/assets/img/guides/nav/3 - Active.png"
                      class="guide-link-icon"
                    />
                    <span>Build orders</span>
                  </a>
                </li>
                <li>
                  <ul>
                    <li><a>Barracks into Town Center</a></li>
                    <li><a>Town Center First</a></li>
                    <li><a>Dock First</a></li>
                  </ul>
                </li>
                <li>
                  <a>
                    <img
                      src="~/assets/img/guides/nav/4 - Active.png"
                      class="guide-link-icon"
                    />
                    <span>Early Game Tips</span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="~/assets/img/guides/nav/5 - Active.png"
                      class="guide-link-icon"
                    />
                    <span>Unit Control</span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="~/assets/img/guides/nav/6 - Active.png"
                      class="guide-link-icon"
                    />
                    <span>Economy Management</span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="~/assets/img/guides/nav/7 - Active.png"
                      class="guide-link-icon"
                    />
                    <span>Scouting Tips</span>
                  </a>
                </li>
              </ul>
            </aside>
            <nuxt-child />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: "fade"
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_16.png");
}
</style>
<style lang="scss">
.guide-title {
  padding-top: 0.75rem;
}

.guide-img {
  flex-shrink: 0;
  display: flex;

  img {
    margin: auto;
  }
}

.menu-list li {
  a {
    display: flex;

    .guide-link-icon {
      max-height: 36px;
      max-width: 36px;
      margin-right: 0.75rem;
    }

    & > span {
      align-self: center;
    }
  }
}
</style>
