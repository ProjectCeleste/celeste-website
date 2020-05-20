<template>
  <civilization
    name="Greeks"
    subtitle="Perfect for beginners"
    :strengths="strengths"
    :weaknesses="weaknesses"
    :key-units="keyUnits"
    :img="require('~/assets/img/civ/greek/civ.webp')"
  >
    <p class="content">
      The Greeks are the generalist civilization of Age of Empires Online.
    </p>
    <p class="content">
      Their gameplay is very straightforward and rock-paper-scissor oriented,
      giving them a clear answer to anything thrown at them. They are a great
      first choice for any beginner.
    </p>
    <p class="content">
      Use the Greeks' mighty Hoplites to tank in the frontlines while your
      Gastraphetes, Ballistas and other Ranged units rain death on your
      opponent.
    </p>
    <p class="content">
      Use Hippikons to flank enemy backlines and take out their key units in
      battle.
    </p>
  </civilization>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      strengths: [
        "Well-rounded Military",
        "Hard Counter Units",
        "Pop Efficient (Strong in the lategame)",
        "Quick to advance in Technology"
      ],
      weaknesses: [
        "Mobility",
        "Lategame Economy Strength",
        "No access to early healing"
      ],
      keyUnits: [
        {
          name: "Hoplite",
          img: require("~/assets/img/civ/greek/hoplite.webp")
        },
        {
          name: "Gastraphetes",
          img: require("~/assets/img/civ/greek/gastra.webp")
        },
        {
          name: "Hippikon",
          img: require("~/assets/img/civ/greek/hippikon.webp")
        },
        {
          name: "Ballista",
          img: require("~/assets/img/civ/greek/ballista.webp")
        }
      ]
    }
  },
  head() {
    return {
      title: "The Greeks - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: "The Greeks - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "The Greeks - Age Of Empires Online Celeste"
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
