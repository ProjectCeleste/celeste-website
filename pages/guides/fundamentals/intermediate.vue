<template>
  <div>
    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          1. Keep Making Units
        </p>
        <p class="content">
          Constantly train Military Units. The only time when you should
          consider stopping Military Unit production is when you are saving up
          resource to research an expensive Upgrade, or to build an expensive
          Building, such as a Town Center, or a Fortress.
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 2/G2/Tip 1 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          2. Keep Making Buildings
        </p>
        <p class="content">
          Many new players don&apos;t make enough Buildings. Having additional
          Military production Buildings allows you to reinforce much faster so
          that you can overwhelm your opponent and go for a victory. Have extra
          Wood stockpiled? Make some more Military Buildings!
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 2/G2/Tip 2 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          3. Research Upgrades
        </p>
        <p class="content">
          Upgrades improve your Villagers&apos; efficiency, your Military
          Units&apos; combat effectiveness and benefit your civilization in
          various ways. Armory Upgrades are particularly important, as they make
          your Units much more cost-effective and pop-effective, resulting in a
          much higher quality army. Research them as soon as possible!
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 2/G2/Tip 3 Pic.webp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade",
  head() {
    return {
      title: "Intermediate Fundamentals - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Intermediate Fundamentals - Age Of Empires Online Celeste"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: (process.env.BASE_URL || "http://localhost:3000") + this.$route.path
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "Intermediate Fundamentals - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
