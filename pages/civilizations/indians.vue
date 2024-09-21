<template>
  <civilization
    name="Indians"
    subtitle="Technology and Adaptability"
    :strengths="strengths"
    :weaknesses="weaknesses"
    :key-units="keyUnits"
    :img="require('~/assets/img/civ/indians/civ.webp')"
  >
    <p class="content">
      The Indians bring Choose-One Techs onto the battlefield, which is a unique
      mechanic that allows them to choose one of multiple powerful upgrades that
      can greatly improve their army and economy.
    </p>
    <p class="content">
      They also have access to Gatherer Elephants - a specialist worker unit
      that gathers resources much faster than Villagers, but cannot repair any
      buildings and can only construct Plantations, which is a unique Indian
      Farm that can be utilized by more than one gatherer.
    </p>
    <p class="content">
      In the lategame, you have access to Juggernauts which are extremely
      powerful but also extremely expensive armored Elephant units that can
      dominate any fight, but are very costly to replace if lost, and also
      vulnerable to enemy Priest units.
    </p>
  </civilization>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      strengths: [
        "Choose-One Techs",
        "Powerful Elephant Units",
        "Diverse set of Military Units",
        "Gatherer Elephants and Plantations",
        "Powerful Military and Technology in the midgame"
      ],
      weaknesses: [
        "Lots of different Production Buildings",
        "No access to early healing",
        "Expensive Plantations that are costly to replace",
        "Susceptible to raids"
      ],
      keyUnits: [
        {
          name: "Gada Warrior",
          img: require("~/assets/img/civ/indians/GadaWarrior_Normal.png")
        },
        {
          name: "Juggernaut",
          img: require("~/assets/img/civ/indians/Juggernaut_Normal.png")
        },
        {
          name: "Blade Chariot",
          img: require("~/assets/img/civ/indians/BladeChariot_Normal.png")
        },
        {
          name: "Gatherer Elephant",
          img: require("~/assets/img/civ/indians/GathererElephant_Normal.png")
        }
      ]
    }
  },
  head() {
    return {
      title: "The Indians - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "The Indians - Age Of Empires Online Celeste"
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
          content: "The Indians - Age Of Empires Online Celeste"
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
