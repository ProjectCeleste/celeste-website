<template>
  <civilization
    name="Celts"
    subtitle="High Octane Gameplay"
    :strengths="strengths"
    :weaknesses="weaknesses"
    :key-units="keyUnits"
    :img="require('~/assets/img/civ/celt/civ.webp')"
  >
    <p class="content">
      The Celts offer a unique gameplay experience unlike any other civilization
      by their incredibly strong Infantry Units and powerful Druids - who heal
      friendly units in battle and giving them a damage boost while doing so -
      and their ability to get temporary boosts through ritual animal
      sacrifices.
    </p>
    <p class="content">
      Even though their Unit roster may have more holes in it than any other
      civilization, their brute force and frightening mobility makes for a
      potentially risky but very rewarding experience.
    </p>
  </civilization>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      strengths: [
        "Fast age up",
        "Raiding and early game strength",
        "Strong Infantry",
        "High Mobility",
        "High Damage",
        "Sustained fights"
      ],
      weaknesses: ["Low Health", "Lack of powerful lategame Siege Units"],
      keyUnits: [
        {
          name: "Long Swordsman",
          img: require("~/assets/img/civ/celt/swordsman.png")
        },
        {
          name: "Druid",
          img: require("~/assets/img/civ/celt/druid.png")
        },
        {
          name: "Woad Raider",
          img: require("~/assets/img/civ/celt/woadraider.png")
        },
        {
          name: "Champion",
          img: require("~/assets/img/civ/celt/champion.png")
        }
      ]
    }
  },
  head() {
    return {
      title: "The Celts - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          propery: "og:title",
          content: "The Celts - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          propery: "twitter:title",
          content: "The Celts - Age Of Empires Online Celeste"
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
