<template>
  <div>
    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          1. Always Make Villagers
        </p>
        <p class="content">
          Constantly train Villagers until you have 70-90 of them. The only time
          your Town Center should not be training Villagers is when you are
          aging up or researching something in it. If you follow this simple yet
          critically important rule, you will quickly see improved results in
          your matches.
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f3">
        <img src="~/assets/img/guides/Tab 2/G1/Tip 1 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          2. Avoid Idle Villagers
        </p>
        <p class="content">
          Idle Villagers are nothing but a detriment to your economy. Constantly
          pay attention to the Idle Villager notification and make sure to
          Hotkey for it (Default Hotkey: V) so you’re always ready to task your
          idle Villagers to get to work and not stand idle. Idle Villagers are
          useless Villagers!
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f3">
        <img src="~/assets/img/guides/Tab 2/G1/Tip 2 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          3. Spend your resources!
        </p>
        <p class="content">
          Try and keep all of your resources spent at all times. The only time
          you should stop spending resources is for when you are saving up to
          advance to the next Age or to research an expensive upgrade. If you
          are starting to stockpile on a certain resrouce, don&apos;t hesitate
          to move your Villagers from one resource type to another!
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f3">
        <img src="~/assets/img/guides/Tab 2/G1/Tip 3 Pic.webp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade",
  head() {
    return {
      title: "Basic Fundamentals - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Basic Fundamentals - Age Of Empires Online Celeste"
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
          content: "Basic Fundamentals - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
