<template>
  <civilization
    name="Egyptians"
    subtitle="Powerful Elephants and Strength in Numbers"
    :strengths="strengths"
    :weaknesses="weaknesses"
    :key-units="keyUnits"
    :img="require('~/assets/img/civ/egypt/civ.webp')"
  >
    <p class="content">
      The most notable difference between Egyptians and other civilizations is
      their age-up and empowerment mechanics. They are able to age up by
      building Temples instead of researching a technology in their Town Center.
      Each of those temples provide them with unique and powerful priests that
      can be used for economic, military and utility purposes.
    </p>
    <p class="content">
      They have access to powerful War Elephants and Elephant Archers in their
      Fortress and their barracks units are cheap and very quick to produce.
      Just when you thought you've won against the Egyptians, another stampede
      of powerful Elephants, Slingers, Axemen and Spearmen come swarming your
      way.
    </p>
  </civilization>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      strengths: [
        "Cheap, easy to replace Barracks Units",
        "Cost efficient Units",
        "Map Control in the early game",
        "Able to keep training Villagers while aging up",
        "Powerful and flexible Priest Units"
      ],
      weaknesses: [
        "Pop inefficient Barracks Units",
        "Somewhat vulnerable in the very early game",
        "Expensive Elephants that are costly to replace"
      ],
      keyUnits: [
        { name: "Axeman", img: require("~/assets/img/civ/egypt/axeman.png") },
        {
          name: "Priestess of Ra",
          img: require("~/assets/img/civ/egypt/priestess_of_ra.png")
        },
        {
          name: "War Elephant",
          img: require("~/assets/img/civ/egypt/war_elephant.png")
        },
        {
          name: "Chariot Archer",
          img: require("~/assets/img/civ/egypt/chariot_archer.png")
        }
      ]
    }
  },
  head() {
    return {
      title: "The Egyptians - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: "The Egyptians - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "The Egyptians - Age Of Empires Online Celeste"
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
