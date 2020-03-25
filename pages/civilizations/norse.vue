<template>
  <civilization
    name="Norse"
    subtitle="Constant Aggression"
    :strengths="strengths"
    :weaknesses="weaknesses"
    :key-units="keyUnits"
    :img="require('~/assets/img/civ/norse/civ.webp')"
  >
    <p class="content">
      The Norse make an epic return from Age of Mythology. Many of the mechanics
      players remember from the Norse in Age of Mythology are back - such as
      being able to construct Military Buildings with your Infantry Units and
      always being on the offensive.
    </p>
    <p class="content">
      The Norse also have access to War Dogs, fast, mobile Units that cost no
      population (but have a Build Limit) that can greatly slow down enemy
      Units, allowing your Army to catch up and send them to their demise.
    </p>
    <p class="content">
      When playing the Norse, you will find that you will always be in control
      of the map. Use your map control wisely to secure yourself an advantage!
    </p>
  </civilization>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      strengths: [
        "Extremely Aggressive",
        "Map Control in the early game",
        "War Dogs",
        "Ability to construct Military Buildings with Infantry",
        "Access to two Scouts",
        "Lots of Barracks Units"
      ],
      weaknesses: [
        "Low Health",
        "Lack of powerful lategame Siege Units",
        "Sustained fights",
        "No access to early healing"
      ],
      keyUnits: [
        {
          name: "Throwing Axeman",
          img: require("~/assets/img/civ/norse/throwing_axeman.png")
        },
        {
          name: "Raider",
          img: require("~/assets/img/civ/norse/raider.png")
        },
        {
          name: "Berserker",
          img: require("~/assets/img/civ/norse/berserker.png")
        },
        {
          name: "Chief",
          img: require("~/assets/img/civ/norse/chief.png")
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
