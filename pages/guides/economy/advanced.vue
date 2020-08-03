<template>
  <div>
    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          1. Two-For-One Storehouses
        </p>
        <p class="content">
          Storehouses can be used as a resource dropoff for every resource Type.
          Take advantage of this and build Storehouses in places where you can
          gather from more than one resource Type at a time!
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 6/G3/Tip 1 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          2. Set up a Market Route
        </p>
        <p class="content">
          While Gold Deposits are the primary source of Gold for most of the
          game, they will eventually deplete and then your only source of Gold
          would be to use Caravans. Think ahead and plan a Market route for
          yourself.
        </p>
        <p class="content">
          Send one or two Villagers to build a Market as far away from your Town
          Center as possible. The longer the travel distance between your Market
          and your Town Center, the more Gold your Caravans will bring in.
        </p>
        <p class="content">
          Be careful, however, that the longer your Market route is, the more
          susceptible it is to being attacked from your opponent, so try to find
          a balance between distance and safety.
        </p>
        <p class="content">
          Once you are done building your Market, you can use the same Villagers
          to built Walls (and Guard Towers) next to your market to help defend
          it.
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 6/G3/Tip 2 Pic.webp" />
      </div>
    </div>

    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-12-touch">
        <p class="content title is-5 has-text-gold">
          3. Fishing (Water Maps)
        </p>
        <p class="content">
          Fishing is another source of Food that you can utilize. They are by
          far the best way of gathering Food, particularly in the early game
          where your Dock can act as an extra Economic Unit prodcution facility,
          while your Town Center trains Villagers to be sent to gather from
          other resources. But it is also the riskiest source of Food. If your
          opponent manages to kill your Fishing Boats or destroy your Dock, then
          you will be stranded for Food and your economy will suffer a major
          blow while you try to fix it.
        </p>
        <p class="content">
          Keep an eye on your opponent&apos;s activity if you opt to go with a
          Dock. If they move out against you, be prepared to defend your Fishing
          Boats. Remember that Fishing Boats have a Ranged Attack and can repair
          (both your Dock and each other!) so use them to buy yourself some time
          while you send some land Military Units to aid your Dock&apos;s
          defense.
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/Tab 6/G3/Tip 3 Pic.webp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade",
  head() {
    return {
      title: "Advanced Economy - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Advanced Economy - Age Of Empires Online Celeste"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: (process.env.BASE_URL || "http://localhost:3000") + this.$route.path
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "Advanced Economy - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>
