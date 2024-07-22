<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <div class="columns card-header-title section-title">
            <div class="column">
              <h2 class="title is-3 has-text-gold has-text-centered">
                Civilizations
              </h2>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="tabs is-centered">
            <ul>
              <li>
                <nuxt-link
                  to="/civilizations/greeks"
                  exact-active-class="is-active"
                  class="is-flex is-flex-column is-centered"
                >
                  <img src="~/assets/img/civ/greek.webp" class="civ-icon" />
                  <span>Greeks</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/civilizations/egyptians"
                  exact-active-class="is-active"
                  class="is-flex is-flex-column is-centered"
                >
                  <img src="~/assets/img/civ/egypt.webp" class="civ-icon" />
                  <span>Egyptians</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/civilizations/celts"
                  exact-active-class="is-active"
                  class="is-flex is-flex-column is-centered"
                >
                  <img src="~/assets/img/civ/celt.webp" class="civ-icon" />
                  <span>Celts</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/civilizations/persians"
                  exact-active-class="is-active"
                  class="is-flex is-flex-column is-centered"
                >
                  <img src="~/assets/img/civ/persia.webp" class="civ-icon" />
                  <span>Persians</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/civilizations/romans"
                  exact-active-class="is-active"
                  class="is-flex is-flex-column is-centered"
                >
                  <img src="~/assets/img/civ/roman.webp" class="civ-icon" />
                  <span>Romans</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/civilizations/babylonians"
                  exact-active-class="is-active"
                  class="is-flex is-flex-column is-centered"
                >
                  <img src="~/assets/img/civ/babylon.webp" class="civ-icon" />
                  <span>Babylonians</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/civilizations/norse"
                  exact-active-class="is-active"
                  class="is-flex is-flex-column is-centered"
                >
                  <img src="~/assets/img/civ/norse.webp" class="civ-icon" />
                  <span>Norse</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/civilizations/indians"
                  exact-active-class="is-active"
                  class="is-flex is-flex-column is-centered"
                >
                  <img src="~/assets/img/civ/indian.webp" class="civ-icon" />
                  <span>Indians</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <nuxt-child />
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
  background-image: url("~assets/img/background_20.webp");
}

.civ-icon {
  width: 75px;
  height: 75px;
  margin-bottom: 0.25rem;
  border-radius: 50%;
  padding: 5px;

  border: #000000 2px solid;

  transition: background-color 0.25s ease-in-out;
  background: rgb(112, 110, 110);
  background: linear-gradient(
    45deg,
    rgba(112, 110, 110, 1) 0%,
    rgba(243, 242, 242, 1) 100%
  );
}

@media screen and (max-width: 416px) {
  .tabs ul li {
    width: 50%;
    padding-left: 0;
    padding-right: 0;
  }
}

.tabs ul li a {
  border-bottom-color: transparent !important;

  &.is-active .civ-icon {
    background: rgb(183, 121, 0);
    background: linear-gradient(
      45deg,
      rgba(183, 121, 0, 1) 0%,
      rgba(255, 237, 0, 1) 100%
    );
  }
}
</style>
