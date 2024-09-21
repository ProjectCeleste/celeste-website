<template>
  <guide-section title="Barracks into Town Center">
    <div class="columns is-multiline">
      <div class="column is-12-touch guide-container">
        <p class="content">
          The goal of this build is to have some Age I Military Units early on
          to either put some pressure or defend against the opponent&apos;s
          pressure.
        </p>

        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <ul class="content ul">
              <li>
                Start by sending your first 3 Villagers to the nearby Trees.
              </li>
              <li>
                The next Villagers that are trained from your Town Center will
                go to the nearest Huntables and build a Storehouse there.
              </li>
            </ul>
          </div>
          <div
            class="column is-narrow guide-img guide-img-f2 is-visible-touch is-hidden-desktop"
          >
            <img src="~/assets/img/guides/Tab 3/G1/Tip 1 Pic.webp" />
            <p class="content">
              1. Gather Wood from Trees
            </p>
          </div>
        </div>
        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <ul class="content ul">
              <li>
                Once you have 200 Wood (after spending 50 Wood to build your
                Hunt Storehouse) you can start building your Barracks.
              </li>
              <li>
                Gather 50 more Wood so you can afford a Storehouse next to your
                Woodline.
              </li>
              <li>
                The next Villagers from your Town Center will go to the Hunt to
                increase your Food income so you can afford making Villagers and
                Military Units.
              </li>
            </ul>
          </div>
          <div
            class="column is-narrow guide-img guide-img-f2 is-visible-touch is-hidden-desktop"
          >
            <img src="~/assets/img/guides/Tab 3/G1/Tip 2 Pic.webp" />
            <p class="content">
              2. Build your Barracks
            </p>
          </div>
        </div>
        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <ul class="content ul">
              <li>
                If you use this opening to be aggressive you can use your units
                to harass your opponent’s Hunt or Woodline. When harassing their
                Woodline keep constant attention to your Units so they don’t get
                hit by too many shots from your opponent&apos;s Town Center.
              </li>
              <li>
                Once you can sustain Villager and Military production, build a
                Storehouse next to your Stone Mine and start gathering Stone so
                you can build your second Town Center when you reach Age II.
              </li>
            </ul>
          </div>
          <div
            class="column is-narrow guide-img guide-img-f2 is-visible-touch is-hidden-desktop"
          >
            <img src="~/assets/img/guides/Tab 3/G1/Tip 3 Pic.webp" />
            <p class="content">
              3. Start training Military
            </p>
          </div>
        </div>
      </div>
      <div
        class="column is-narrow is-flex is-flex-column is-hidden-touch is-flex-space-evenly"
      >
        <div class="guide-img guide-img-f2">
          <img src="~/assets/img/guides/Tab 3/G1/Tip 1 Pic.webp" />
          <p class="content">
            1. Gather Wood from Trees
          </p>
        </div>
        <div class="guide-img guide-img-f2">
          <img src="~/assets/img/guides/Tab 3/G1/Tip 2 Pic.webp" />
          <p class="content">
            2. Build your Barracks
          </p>
        </div>
        <div class="guide-img guide-img-f2">
          <img src="~/assets/img/guides/Tab 3/G1/Tip 3 Pic.webp" />
          <p class="content">
            3. Start training Military
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
      title:
        "Barracks Into Town Center Build Order - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Barracks Into Town Center Build Order - Age Of Empires Online Celeste"
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
          content:
            "Barracks Into Town Center Build Order - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
