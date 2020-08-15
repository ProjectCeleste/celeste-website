<template>
  <guide-section title="Town Center First">
    <div class="columns is-multiline">
      <div class="column is-12-touch guide-container">
        <p class="content">
          This build will allow you to get ahead of your opponent by securing an
          economic advantage early on, but is susceptible to early aggression.
        </p>
        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <ul class="content ul">
              <li>Start by sending your first 3 Villagers to your Hunt.</li>
              <li>
                Your fourth Villager (The first one you train) will build a
                Storehouse in your Woodline.
              </li>
              <li>
                Your fifth villager will go to your Hunt (4 total).
              </li>
              <li>
                Sixth and Seventh Villagers will go to your Woodline (3 total).
              </li>
            </ul>
          </div>
          <div
            class="column is-narrow guide-img guide-img-f2 is-visible-touch is-hidden-desktop"
          >
            <img src="~/assets/img/guides/Tab 3/G2/Tip 1 Pic.webp" />
            <p class="content">
              1. Start with your Hunt
            </p>
          </div>
        </div>
        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <ul class="content ul">
              <li>
                Eighth Villager will build a Storehouse at your starting Stone
                Mine.
              </li>
              <li>
                Ninth and Tenth Villagers will also go to your Stone Mine (3
                total). Eleventh villager will go to your Wood (4 on Wood total)
                and the Twelvth villager will go your Stone Mine (4 total).
              </li>
              <li>
                As soon as you have 200 Food and 200 Wood you can age up. Take 2
                Villagers from your Hunt and send one to your Woodline (5 total)
                and another to your Stone Mine (5 total).
              </li>
            </ul>
          </div>
          <div
            class="column is-narrow guide-img guide-img-f2 is-visible-touch is-hidden-desktop"
          >
            <img src="~/assets/img/guides/Tab 3/G2/Tip 2 Pic.webp" />
            <p class="content">
              2. Start mining Stone
            </p>
          </div>
        </div>
        <div class="columns is-multiline is-centered is-vcentered">
          <div class="column is-12-touch">
            <ul class="content ul">
              <li>
                As soon as you age up you should have around 300 Wood and 300
                Stone and you can build your 2nd Town Center.
              </li>
              <li>
                Take your 5 Villagers off of your Stone Mine and build your 2nd
                Town Center.
              </li>
              <li>
                While you are aging up, make sure to know where you are going to
                place it. It can be in a more defensive position, such as in
                range of your first Town Center, on your Woodline, Gold Mine or
                another resource. Alternatively if you know your opponent
                didn&apos;t make early Military Units you can build your 2nd
                Town Center a bit further away to secure some resources outside
                of your main base.
              </li>
            </ul>
          </div>
          <div
            class="column is-narrow guide-img guide-img-f2 is-visible-touch is-hidden-desktop"
          >
            <img src="~/assets/img/guides/Tab 3/G2/Tip 3 Pic.webp" />
            <p class="content">
              3. Build your Town Center
            </p>
          </div>
        </div>

        <p class="content">
          This build will need small variations if you play the Babylonians, due
          to the need to make extra Ox Carts but the timings are roughly the
          same and you can adjust your build with a little practice. Practice
          makes perfect!
        </p>
      </div>
      <div
        class="column is-narrow is-flex is-flex-column is-hidden-touch is-flex-space-evenly"
      >
        <div class="guide-img guide-img-f2">
          <img src="~/assets/img/guides/Tab 3/G2/Tip 1 Pic.webp" />
          <p class="content">
            1. Start with your Hunt
          </p>
        </div>
        <div class="guide-img guide-img-f2">
          <img src="~/assets/img/guides/Tab 3/G2/Tip 2 Pic.webp" />
          <p class="content">
            2. Start mining Stone
          </p>
        </div>
        <div class="guide-img guide-img-f2">
          <img src="~/assets/img/guides/Tab 3/G2/Tip 3 Pic.webp" />
          <p class="content">
            3. Build your Town Center
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
      title: "Town Center First Build Order - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Town Center First Build Order - Age Of Empires Online Celeste"
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
            "Town Center First Build Order - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
