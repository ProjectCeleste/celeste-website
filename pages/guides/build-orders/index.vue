<template>
  <guide-section title="Build Orders">
    <div class="columns is-vcentered">
      <div class="column">
        <div class="guide-banner content build-orders-banner" />

        <p class="content">
          This section of the guide will teach you a few effective build orders.
          Build orders are important to take the most out of your early game by
          focusing on a specific strategy.
        </p>

        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <h5 class="content title is-5 has-text-gold">
              Barracks into Town Center
            </h5>
            <p class="content">
              The goal of this build is to have some Age I Military Units early
              on to either put some pressure or defend against the
              opponent&apos;s pressure.
            </p>
            <p class="content">
              <nuxt-link
                to="/guides/build-orders/barracks-into-town-center"
                exact-active-class="is-active"
              >
                Read more
              </nuxt-link>
            </p>
          </div>
          <div class="column is-narrow guide-img">
            <img src="~/assets/img/guides/Tab 3/G1/Tip 2 Pic.webp" />
          </div>
        </div>

        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <h5 class="content title is-5 has-text-gold">
              Town Center First
            </h5>
            <p class="content">
              This build will allow you to get ahead of your opponent by
              securing an economic advantage early on, but is susceptible to
              early aggression.
            </p>
            <p class="content">
              <nuxt-link
                to="/guides/build-orders/town-center-first"
                exact-active-class="is-active"
              >
                Read more
              </nuxt-link>
            </p>
          </div>
          <div class="column is-narrow guide-img">
            <img src="~/assets/img/guides/Tab 3/G2/Tip 3 Pic.webp" />
          </div>
        </div>

        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <h5 class="content title is-5 has-text-gold">
              Dock First (Water Maps)
            </h5>
            <p class="content">
              This build is more advanced than the previous two, and should be
              only on maps with Water available. Use it only once you&apos;re
              comfortable with the previous builds.
            </p>
            <p class="content">
              <nuxt-link
                to="/guides/build-orders/dock-first"
                exact-active-class="is-active"
              >
                Read more
              </nuxt-link>
            </p>
          </div>
          <div class="column is-narrow guide-img">
            <img src="~/assets/img/guides/Tab 3/G3/Tip 3 Pic.webp" />
          </div>
        </div>
      </div>
    </div>
  </guide-section>
</template>

<script>
export default {
  transition: "fade"
}
</script>

<style lang="scss" scoped>
.build-orders-banner {
  background-image: url(~assets/img/background_14.webp);
  background-position-y: center;
}
</style>
