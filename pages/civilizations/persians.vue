<template>
  <civilization
    name="Persians"
    subtitle="Perfect for beginners"
    :strengths="strengths"
    :weaknesses="weaknesses"
    :key-units="keyUnits"
    :img="require('~/assets/img/civ/persia/civ.webp')"
  >
    <p class="content">
      The Greeks are the generalist civilization of Age of Empires Online.
    </p>
    <p class="content">
      Their gameplay is very straightforward and rock-paper-scissor oriented,
      giving them a clear answer to anything thrown at them. They are a great
      first choice for any beginner.
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
      weaknesses: ["Mobility", "Lategame Economy Strength"],
      keyUnits: [
        { name: "Hoplite", img: require("~/assets/img/civ/greek/hoplite.png") },
        {
          name: "Gastraphetes",
          img: require("~/assets/img/civ/greek/gastra.png")
        },
        {
          name: "Hippikon",
          img: require("~/assets/img/civ/greek/hippikon.png")
        },
        {
          name: "Ballista",
          img: require("~/assets/img/civ/greek/ballista.png")
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
