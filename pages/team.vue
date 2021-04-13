<template>
  <section class="section is-vcentered">
    <div class="container">
      <div class="card">
        <div class="card-header is-flex is-centered">
          <img src="~/assets/img/separator_2.webp" class="team-header" />
        </div>
        <div class="card-content">
          <div class="is-flex is-flex-column">
            <div
              v-for="(category, key) of categories"
              :key="key"
              class="has-text-centered credits-category"
            >
              <img
                v-if="category.thanksSeparator"
                src="~/assets/img/Text_Logo.webp"
                class="thanks-separator"
              />
              <img
                v-if="category.separator"
                src="~/assets/img/separator.webp"
                class="separator"
              />
              <h3 class="title is-4 has-text-gold">
                {{ category.name }}
              </h3>
              <p v-if="category.note" class="content is-5">
                {{ category.note }}
              </p>
              <div class="columns is-multiline is-5 content is-centered">
                <span
                  v-for="(name, keyName) of category.names"
                  :key="keyName"
                  class="column is-one-third"
                >
                  {{ name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: "fade",
  scrollToTop: true,
  data() {
    return {
      categories: [
        {
          name: "Executive Producer",
          names: ["Pooya Fatehi (PF2K)"]
        },
        {
          name: "Project Celeste Lead Developers",
          names: [
            "PF2K",
            "Luciano Pereira (Luciano)",
            "Kevin Waldock (Kevsoft)",
            "kisonik"
          ]
        },
        {
          name: "Conceptual Research and Design",
          names: ["PF2K", "Andy P XIII"]
        },
        {
          name: "Civilization Design",
          names: ["PF2K", "Andy P XIII", "RecoN"]
        },
        {
          name: "Gear Design",
          names: ["Jeinx", "PF2K"]
        },
        {
          name: "Regional City Designs",
          names: ["Max v.R.", "RecoN", "Andy P XIII"]
        },
        {
          name: "Shop Design",
          names: ["Jeinx", "PF2K", "lukipr0", "[BBA]Kog"]
        },
        {
          name: "Campaign Design",
          names: ["PF2K", "Andy P XIII"]
        },
        {
          name: "Campaign Assistance",
          names: ["Fristi61", "Eamon.G"]
        },
        {
          name: "Quest Design",
          names: ["PF2K", "RecoN", "Kire", "JilgueriN", "FinishedBlock21"]
        },
        {
          name: "Technical Design",
          names: [
            "PF2K",
            "kangcliff",
            "Kevsoft",
            "kisonik",
            "Luciano",
            "Ryddag"
          ],
          separator: true
        },
        {
          name: "Technical Support",
          names: ["kangcliff", "kisonik", "Kevsoft", "PF2K"]
        },
        {
          name: "Server Backend",
          names: ["Ryddag", "Martin Storø Nyfløtt (martinmine)", "Kevsoft"]
        },
        {
          name: "IT Operations",
          names: ["martinmine", "Kevsoft"]
        },
        {
          name: "Web Director",
          names: ["Jérémy Lambert (SystemGlitch)"]
        },
        {
          name: "3d Modeling Directors",
          names: ["Max v.R.", "Eamon.G"],
          separator: true
        },
        {
          name: "3d Modeling Assistance",
          names: ["PF2K"]
        },
        {
          name: "Rigging",
          names: ["Max v.R.", "Eamon.G"]
        },
        {
          name: "3d Texturing",
          names: ["Eamon.G", "Max v.R.", "PF2K"]
        },
        {
          name: "3D Animation Director",
          names: ["Phillus"]
        },
        {
          name: "Animations",
          names: ["Phillus", "Anubis", "Max v.R.", "Eamon.G", "PF2K"]
        },
        {
          name: "2d Art",
          note: "PF2K and countless original Artists",
          names: []
        },
        {
          name: "Sound Directors",
          names: ["Eamon.G", "PF2K", "Andy P XIII"],
          separator: true
        },
        {
          name: "Audio Engineering",
          names: ["Vladan Stančić (WeRFury)", "Eamon.G"]
        },
        {
          name: "Music Design",
          names: ["Vladan Stančić", "Eamon.G", "Paul Anthony Romero"]
        },
        {
          name: "Vocals",
          names: [
            "Andy P XIII",
            "Jeinx",
            "Max v.R.",
            "PF2K",
            "Phillus",
            "Taz",
            "Verhuver",
            "Jan Zapletal (YetAnotherYoutuber)",
            "Viviana Dragani",
            "Zawnius"
          ]
        },
        {
          name: "Written Content",
          names: ["Andy P XIII", "PF2K"],
          separator: true
        },
        {
          name: "Localization",
          names: [
            "MatrixSoft",
            "Mr.Star Sky",
            "Phillus",
            "Servimomia",
            "SystemGlitch",
            "Zenorhk (Zanetti)",
            "lukipr0",
            "Rekiemone"
          ]
        },
        {
          name: "Balance Lead",
          names: ["PF2K"],
          separator: true
        },
        {
          name: "PvP Balance Team",
          names: ["RecoN", "Carnage", "ZertoN", "StrikeR", "Eery", "Wout"]
        },
        {
          name: "Balance Assistance",
          names: [
            "Andy P XIII",
            "CrimsonCantab",
            "FinishedBlock21",
            "Madlib",
            "TheSpaniard",
            "UR_Coolblade",
            "Verhuver",
            "warlock_ant",
            "Jeinx",
            "Kire"
          ]
        },
        {
          name: "Playtesting",
          names: ["Everyone"]
        },
        {
          name: "Marketing",
          names: ["PF2K", "Andy P XIII", "Wout"],
          separator: true
        },
        {
          name: "Moderator Team",
          names: ["NCSGeek", "Smileyguyx", "Wartai", "Wout"]
        },
        {
          name: "Media Team",
          names: ["Eery", "Mandy", "Taz", "VC_Ardeshir"]
        },
        {
          name: "Roman Trailer",
          names: [
            "Mandy",
            "Andy P XIII",
            "Vladan Stančić",
            "Kire",
            "Phillus",
            "Max v.R."
          ]
        },
        {
          name: "Wikipedia Communications",
          names: ["KazMx"]
        },
        {
          name: "Special Thanks",
          names: ["Paul Flores", "Alex Madrigal"],
          separator: true,
          thanksSeparator: true
        },
        {
          name: "Moral Support",
          names: ["IamPrezSteve"]
        },
        {
          name: "Additional Thanks",
          note:
            "Members of the AoE3 Modding Council for their generous expertise",
          names: ["Mandos", "Eaglemut", "KEremey"]
        }
      ]
    }
  },
  head() {
    return {
      title: "The Team - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "The Team - Age Of Empires Online Celeste"
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
          content: "The Team - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_24.webp");
}

.credits-category {
  margin-bottom: 2.5rem;

  .title {
    margin-bottom: 1rem;
  }

  .separator {
    max-height: 30px;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .thanks-separator {
    max-height: 100px;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
}

.team-header {
  max-height: 100px;
  margin-top: 1.5rem;
}

@media screen and (min-width: $tablet) {
  .credits-category {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media screen and (min-width: $desktop) {
  .credits-category {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}
</style>
