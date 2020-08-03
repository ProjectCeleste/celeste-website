<template>
  <civilization
    name="Babylonians"
    subtitle="Economic Juggernaut"
    :strengths="strengths"
    :weaknesses="weaknesses"
    :key-units="keyUnits"
    :img="require('~/assets/img/civ/babylon/civ.webp')"
  >
    <p class="content">
      The Babylonians are unique in that they have access to the Ox Cart - a
      mobile storehouse that follows your Villagers around, eliminating the need
      to constantly replace storehouses, saving you lots of resources and
      greatly boosting your Economy.
    </p>
    <p class="content">
      Even though the Babylonians have access to a Military on par with other
      civilizations, you will find yourself securing an advantage and winning
      the game when utilizing their incredibly powerful Economic upgrades and
      their Gardens, which reduce the training and research time of all
      Buildings while also granting you a trickle of Food.
    </p>
  </civilization>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      strengths: [
        "Ox Carts",
        "Very powerful Economy",
        "Gardens",
        "Cheap Wooden Walls that can be upgraded later",
        "Versatile Stable Units",
        "Sustained fights and constantly trading Armies"
      ],
      weaknesses: [
        "Fairly weak Navy",
        "Ox Carts can be difficult to replace over long distances",
        "Expensive Gardens that are costly to replace"
      ],
      keyUnits: [
        {
          name: "Shield Bearer",
          img: require("~/assets/img/civ/babylon/shield_bearer.png")
        },
        {
          name: "Lancer",
          img: require("~/assets/img/civ/babylon/lancer.png")
        },
        {
          name: "Mounted Archer",
          img: require("~/assets/img/civ/babylon/mounted_archer.png")
        },
        {
          name: "Siege Tower",
          img: require("~/assets/img/civ/babylon/siege_tower.png")
        }
      ]
    }
  },
  head() {
    return {
      title: "The Babylonians - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "The Babylonians - Age Of Empires Online Celeste"
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
          content: "The Babylonians - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.key-unit {
  display: flex;
  flex-direction: row;
  text-align: right;
  white-space: nowrap;

  span {
    flex-grow: 1;
    align-self: center;
    margin: 0;
  }

  & > div > img {
    margin-left: 0.75rem;
  }
}

.civ-img {
  margin-bottom: 0.75rem;
  text-align: center;

  img {
    width: 100%;
    max-width: 251px;
  }
}
</style>
