<template>
  <guide-section title="Basic Questions">
    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          1. Do Levels and Gear matter?
        </p>
        <p class="content">
          They don&apos;t! While playing Champion Mode PvP (the default PvP mode
          in Sparta and Arena) gear is used only for visuals and everyone has
          access to the same Units, Technologies and Stats, regardless of their
          level and everyone plays on equal grounds.
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 1/Tip 1 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          2. Does only winning count?
        </p>
        <p class="content">
          Nope! You get rewards for playing PvP matches regardless of winning or
          losing, so it doesn&apos;t matter if you don&apos;t win every game.
          Every game you play also counts towards your seasonal badge progress.
          You don&apos;t lose anything by losing your match, so don&apos;t
          worry!
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 1/Tip 2 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          3. What are the rewards?
        </p>
        <p class="content">
          In addition to Coin, Sparta Points and Empire Points, you also become
          eligible for End-of-Season rewards, Legendary Gear, special seasonal
          badges and more! Check the Rewards page for more details.
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 1/Tip 3 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          4. How Do I Improve?
        </p>
        <p class="content">
          This guide will provide you with everything you need to get started.
          Once you are done reading, you can also visit our Forums, Discord and
          YouTube channels for additional learning resources. Don&apos;t be ask
          any questions you might have. We have an awesome community!
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 1/Tip 4 Pic.webp" />
      </div>
    </div>
  </guide-section>
</template>

<script>
export default {
  transition: "fade",
  head() {
    return {
      title: "Basic Questions - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Basic Questions - Age Of Empires Online Celeste"
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
          content: "Basic Questions - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
