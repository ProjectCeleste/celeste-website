<template>
  <guide-section title="Dock First (Water Maps)">
    <div class="columns is-multiline">
      <div class="column is-12-touch guide-container">
        <p class="content">
          This build is more advanced than the previous two, and should be used
          only on maps with Water available. Use it only once you&apos;re
          comfortable with the previous builds.
        </p>

        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <p class="content">
              In the Mountain Crossing map you can use your Dock as your first
              Wood Storehouse, placing it between to your Woodline and the lake
              behind you. You can build the dock with the fourth Villager, the
              initial three being on your closest Hunt.
            </p>
            <p class="content">
              Based on what resource you need the most, you can assign the who
              built the Dock to either gather from the Fish next to your Dock,
              or the Woodline next to it.
            </p>
          </div>
          <div
            class="column is-narrow guide-img guide-img-f2 is-visible-touch is-hidden-desktop"
          >
            <img src="~/assets/img/guides/Tab 3/G3/Tip 1 Pic.webp" />
            <p class="content">
              1. Build your Dock
            </p>
          </div>
        </div>

        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <p class="content">
              On other maps like Inland, Oasis or Treasure Island you can build
              a fast Dock after your Hunt and Wood storehouse. You send your
              initial 3 Villagers to your Hunt, the fourth one to build a
              Storehouse on the Woodline.
            </p>

            <p class="content">
              The next Villagers that train of your Town Center will go to your
              Woodline. Once you have 100 Wood you can start sending a Villager
              to the shoreline, so once it gets there you have around 150 wood
              to build your dock.
            </p>
          </div>
          <div
            class="column is-narrow guide-img guide-img-f2 is-visible-touch is-hidden-desktop"
          >
            <img src="~/assets/img/guides/Tab 3/G3/Tip 2 Pic.webp" />
            <p class="content">
              2. Use your Dock as a dropoff
            </p>
          </div>
        </div>

        <p class="content">
          Some civilizations (such as the Babylonians) have docks that cost 200
          wood, so send your Villager a bit later.
        </p>

        <p class="content">
          Alternatively, you can build your dock off of one Storehouse, sending
          your fourth Villager to build the dock and gather Wood around your
          Hunt Storehouse or around your Town Center.
        </p>

        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <p class="content">
              Since Fishing Boats will provide you with a very high Food income,
              you can leave only 3 Villagers on your Hunt and send the rest of
              your Villagers to your Woodline. If your Dock gets attacked by
              your opponent, don&apos;t hesitate to use your Fishing Boats to
              repair it! They also have a Ranged Attack that can be used to buy
              time for you until you can train some Military Units of your own
              to defend against the incoming pressure.
            </p>
          </div>
          <div
            class="column is-narrow guide-img guide-img-f2 is-visible-touch is-hidden-desktop"
          >
            <img src="~/assets/img/guides/Tab 3/G3/Tip 3 Pic.webp" />
            <p class="content">
              3. Start training Fishing Boats
            </p>
          </div>
        </div>

        <p class="content">
          When using this build, pay attention to what your opponent is doing by
          Scouting them. If they are also going for a greedy strategy, you can
          start gathering Stone and make a Town Center in addition to your Dock,
          giving you lots of extra resources. But if your opponent is opting for
          a more aggressive strategy, be careful not to get overrun by the
          opponent&apos;s Military aggression before you have anything to defend
          with.
        </p>
      </div>
      <div
        class="column is-narrow is-flex is-flex-column is-hidden-touch is-flex-space-evenly"
      >
        <div class="guide-img guide-img-f2">
          <img src="~/assets/img/guides/Tab 3/G3/Tip 1 Pic.webp" />
          <p class="content">
            1. Build your Dock
          </p>
        </div>
        <div class="guide-img guide-img-f2">
          <img src="~/assets/img/guides/Tab 3/G3/Tip 2 Pic.webp" />
          <p class="content">
            2. Use your Dock as a dropoff
          </p>
        </div>
        <div class="guide-img guide-img-f2">
          <img src="~/assets/img/guides/Tab 3/G3/Tip 3 Pic.webp" />
          <p class="content">
            3. Start training Fishing Boats
          </p>
        </div>
      </div>
    </div>
  </guide-section>
</template>

<script>
export default {
  transition: "fade",
  head() {
    return {
      title: "Dock First Build Order - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Dock First Build Order - Age Of Empires Online Celeste"
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
          content: "Dock First Build Order - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
