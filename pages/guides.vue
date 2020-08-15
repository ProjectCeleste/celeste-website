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
              <!-- <p class="menu-label">
                PvE
              </p>
              <ul class="menu-list">
                <li><a>Capital City</a></li>
                <li><a>Gear</a></li>
                <li><a>Crafting</a></li>
                <li><a>Workshops</a></li>
                <li><a>Warehouses</a></li>
              </ul> -->
              <p class="menu-label">
                PvP
              </p>
              <ul class="menu-list">
                <li>
                  <nuxt-link
                    to="/guides/basic-questions"
                    exact-active-class="is-active"
                  >
                    <img
                      src="~/assets/img/guides/nav/1 - Active.webp"
                      class="menu-link-icon"
                    />
                    <span>Basic Questions</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/guides/fundamentals" active-class="is-active">
                    <img
                      src="~/assets/img/guides/nav/2 - Active.webp"
                      class="menu-link-icon"
                    />
                    <span>Fundamentals</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/guides/build-orders"
                    exact-active-class="is-active"
                  >
                    <img
                      src="~/assets/img/guides/nav/3 - Active.webp"
                      class="menu-link-icon"
                    />
                    <span>Build orders</span>
                  </nuxt-link>
                  <ul>
                    <li>
                      <nuxt-link
                        to="/guides/build-orders/barracks-into-town-center"
                        exact-active-class="is-active"
                      >
                        <img
                          src="~/assets/img/guides/nav/Tab 3 Subgroup 1 - Active.webp"
                          class="menu-link-icon menu-link-sub-icon"
                        />
                        <span>Barracks into Town Center</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        to="/guides/build-orders/town-center-first"
                        exact-active-class="is-active"
                      >
                        <img
                          src="~/assets/img/guides/nav/Tab 3 Subgroup 2 - Active.webp"
                          class="menu-link-icon menu-link-sub-icon"
                        />
                        <span>Town Center First</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        to="/guides/build-orders/dock-first"
                        exact-active-class="is-active"
                      >
                        <img
                          src="~/assets/img/guides/nav/Tab 3 Subgroup 3 - Active.webp"
                          class="menu-link-icon menu-link-sub-icon"
                        />
                        <span>Dock First</span>
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <nuxt-link
                    to="/guides/early-game-tips"
                    exact-active-class="is-active"
                  >
                    <img
                      src="~/assets/img/guides/nav/4 - Active.webp"
                      class="menu-link-icon"
                    />
                    <span>Early Game Tips</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/guides/unit-control" active-class="is-active">
                    <img
                      src="~/assets/img/guides/nav/5 - Active.webp"
                      class="menu-link-icon"
                    />
                    <span>Unit Control</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/guides/economy" active-class="is-active">
                    <img
                      src="~/assets/img/guides/nav/6 - Active.webp"
                      class="menu-link-icon"
                    />
                    <span>Economy Management</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/guides/scouting"
                    exact-active-class="is-active"
                  >
                    <img
                      src="~/assets/img/guides/nav/7 - Active.webp"
                      class="menu-link-icon"
                    />
                    <span>Scouting Tips</span>
                  </nuxt-link>
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
  background-image: url("~assets/img/background_18.webp");
}
</style>
<style lang="scss">
.guide-title {
  padding-top: 0.75rem;
}

.guide-img {
  text-align: center;
  img {
    border: 2px solid #afa588;
    border-radius: 15px;

    width: 215px;
  }

  &.guide-img-f1 img {
    height: 115px; // basic questions, early game tips, scouting
  }

  &.guide-img-f2 img {
    height: 113px; // build orders
  }

  &.guide-img-f3 img {
    height: 138px; // fundamentals, unit control, economy
  }
}

.guide-banner {
  height: 200px;
  border: 2px solid #afa588;
  border-radius: 15px;
  background-size: cover;
  background-position: center top;
}

@media screen and (min-width: $desktop) {
  .guide-container .columns .column {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
