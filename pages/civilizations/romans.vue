<template>
  <civilization
    name="Romans"
    subtitle="Quality over Quantity"
    :strengths="strengths"
    :weaknesses="weaknesses"
    :key-units="keyUnits"
    :img="require('~/assets/img/civ/roman/civ.webp')"
  >
    <p class="content">
      The Romans bring a new aspect to Age of Empires Online - Officers.
    </p>
    <p class="content">
      Officers are powerful, semi-heroic Units that greatly impact battles and
      increase the effectiveness of your other Units. Having Officers in your
      army can quickly make the difference between a decisive victory and a
      crushing defeat.
    </p>
    <p class="content">
      The Romans are fairly well-rounded, like their Greek counterparts, but are
      also generally more expensive and even more bottle-necked by their
      Economy.
    </p>
    <p class="content">
      Utilize Roman Engineers to greatly speed up Building construction while
      your Villagers spend more time gathering resources rather than
      constructing Buildings.
    </p>
  </civilization>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      strengths: [
        "Officers",
        "Very strong Siege Units",
        "Well-rounded Military",
        "Lategame Military Strength",
        "Pop Efficient (Strong in the lategame)"
      ],
      weaknesses: [
        "Mobility",
        "Lategame Economy Strength",
        "Expensive Units",
        "No access to early healing"
      ],
      keyUnits: [
        {
          name: "Legionary",
          img: require("~/assets/img/civ/roman/legionary.png")
        },
        {
          name: "Centurion",
          img: require("~/assets/img/civ/roman/centurion.png")
        },
        {
          name: "Scorpio",
          img: require("~/assets/img/civ/roman/scorpio.png")
        },
        {
          name: "Onager",
          img: require("~/assets/img/civ/roman/onager.png")
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
