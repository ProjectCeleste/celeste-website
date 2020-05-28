<template>
  <civilization
    name="Persians"
    subtitle="Versatility and Lategame Power"
    :strengths="strengths"
    :weaknesses="weaknesses"
    :key-units="keyUnits"
    :img="require('~/assets/img/civ/persia/civ.webp')"
  >
    <p class="content">
      The Persians use Toggle Techs, which are a unique mechanic that offer
      powerful bonuses while having a cost in return. Able to be toggled on and
      off at any moment's notice, they allow the Persians to adjust their
      stategy on the fly and adapt to any situation.
    </p>
    <p class="content">
      Command the powerful Persian Immortals, who possess both a Melee and a
      Ranged attack and can decimate any Infantry unit in their wake, or the
      mighty Asabaras, extremely versatile and well-rounded Cavalry units who
      join the fight as early as Age 2.
    </p>
    <p class="content">
      In the lategame, you have access to War Wagons that can tear enemy Ranged
      Units to shreds with ease, all while the tanky Sparabara withstand large
      amounts of punishment at the front lines.
    </p>
  </civilization>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      strengths: [
        "Adaptability",
        "Strong Ranged Units",
        "Powerful and mobile Stable Units",
        "Toggle Techs"
      ],
      weaknesses: [
        "Gold constrained",
        "Lots of different Production Buildings"
      ],
      keyUnits: [
        {
          name: "Sparabara",
          img: require("~/assets/img/civ/persia/sparabara.png")
        },
        {
          name: "Bowman",
          img: require("~/assets/img/civ/persia/bowman.png")
        },
        {
          name: "Asabara",
          img: require("~/assets/img/civ/persia/asabara.png")
        },
        {
          name: "Immortal",
          img: require("~/assets/img/civ/persia/immortal.png")
        }
      ]
    }
  },
  head() {
    return {
      title: "The Persians - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: "The Persians - Age Of Empires Online Celeste"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "The Persians - Age Of Empires Online Celeste"
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
