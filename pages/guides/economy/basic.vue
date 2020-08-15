<template>
  <div>
    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          1. Research Economy Upgrades
        </p>
        <p class="content">
          Storehouse Upgrades are one of the most important aspects of economy
          management. Make sure you get your Upgrades as soon as you can. If you
          are gathering from Berries, make sure to research Picker&apos;s
          Gloves.
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f3">
        <img src="~/assets/img/guides/Tab 6/G1/Tip 1 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          2. Replace Wood Storehouses
        </p>
        <p class="content">
          Your Villagers move further into the treeline over time. This will
          result in lots of gathering time lost when walking from Trees to
          Storehouses. Constantly replace your Wood Storehouses to ensure
          efficient Wood gathering.
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f3">
        <img src="~/assets/img/guides/Tab 6/G1/Tip 2 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          3. Hunts or Berries?
        </p>
        <p class="content">
          Huntable animals and Berry Bushes are both great Food sources.
          However, Huntables gather much faster than Berries, therefore you
          should try and gather from them before moving over to Berries.
        </p>
        <p class="content">
          Be careful, however, that while Huntables are a faster source of Food,
          they also deplete faster than Berries and are usually more exposed
          than them.
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f3">
        <img src="~/assets/img/guides/Tab 6/G1/Tip 3 Pic.webp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade",
  head() {
    return {
      title: "Basic Economy - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Basic Economy - Age Of Empires Online Celeste"
        },
        {
          hid: "og:url",
          property: "og:url",
          content:
            (process.env.BASE_URL || "http://localhost:3000") + this.$route.path
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "Basic Economy - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
