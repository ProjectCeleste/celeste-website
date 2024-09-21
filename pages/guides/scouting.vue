<template>
  <guide-section title="Scouting Tips">
    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          1. Find your Huntables
        </p>
        <p class="content">
          Huntables are one of the fastest sources of Food available. When the
          match starts, try and find your nearby Huntables and kill them with
          your scout (they don&apos;t decay!). You can then bring your Villagers
          and build a Storehouse next to them and start gathering Food.
        </p>
        <p class="content">
          For the most efficient gathering possible, try and spread your
          Villagers so that you have one on each Huntable animal.
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f1">
        <img src="~/assets/img/guides/Tab 7/Tip 1 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          2. Scout your opponent&apos;s Base
        </p>
        <p class="content">
          Once you are done killing your Huntables, send your Scout towards your
          opponent&apos;s base. See where their resources are located, if they
          are gathering from Huntables or Berries, if they are making early
          Military Units, etc.
        </p>
        <p class="content">
          Knowing what your opponent is doing is extremely important in making
          your next decisions. Keep on Scouting!
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f1">
        <img src="~/assets/img/guides/Tab 7/Tip 2 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          3. Check the opponent&apos;s Stone
        </p>
        <p class="content">
          Keep an eye on your opponent&apos;s Stone deposit. If they are mining
          Stone, it is likely that they are going for an early 2nd Town Center.
          Knowing this can help you make a decision whether you want to respond
          with a Town Center of your own, or to try a more aggressive strategy.
        </p>
        <p class="content">
          Be careful, though! If your opponent only has 1-2 Villagers on Stone,
          it may mean that they are going for an aggressive Tower Rush strategy!
          In that case, make sure to opt for a more defensive strategy and be
          prepared for a Tower Rush.
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f1">
        <img src="~/assets/img/guides/Tab 7/Tip 3 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          4. Build Watch Posts
        </p>
        <p class="content">
          Watch Posts are very useful for getting vision on key parts of the
          map. Use your Scout to build them in strategic places (such as where
          your opponent might send a group of units to attack you, or a Gold
          Deposit that your opponent might start gathering from soon) so
          you&apos;re always one step ahead.
        </p>
        <p class="content">
          In case your Scout dies, you can still use your Villagers to build
          Watch Posts. Preparation is key!
        </p>
      </div>
      <div class="column is-narrow guide-img guide-img-f1">
        <img src="~/assets/img/guides/Tab 7/Tip 4 Pic.webp" />
      </div>
    </div>
  </guide-section>
</template>

<script>
export default {
  transition: "fade",
  head() {
    return {
      title: "Scouting - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Scouting - Age Of Empires Online Celeste"
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
          content: "Scouting - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
