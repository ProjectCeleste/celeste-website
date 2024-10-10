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
            "Kevin Waldock (Kevsoft)",
            "PF2K",
            "Martin Storø Nyfløtt (martinmine)",
            "Elle Pereira"
          ]
        },
        {
          name: "Conceptual Research and Design",
          names: ["PF2K", "Andy P XIII"]
        },
        {
          name: "Civilization Design",
          names: ["PF2K"]
        },
        {
          name: "Gear Design",
          names: ["Jeinx", "PF2K"]
        },
        {
          name: "Regional City Designs",
          names: ["Max v.R.", "Kire Arizanovski (Kire)", "PF2K"]
        },
        {
          name: "Shop Design",
          names: ["PF2K"]
        },
        {
          name: "Quest Design",
          names: ["Kire", "PF2K"]
        },
        {
          name: "Technical Design",
          names: ["martinmine", "Kevsoft", "PF2K"],
          separator: true
        },
        {
          name: "Technical Support",
          names: ["Kevsoft", "kisonik"]
        },
        {
          name: "Server Backend",
          names: ["martinmine", "Kevsoft"]
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
          name: "Website Assistance",
          names: ["Taz Khallaf (Taz)"]
        },
        {
          name: "3D Modeling Directors",
          names: ["Max v.R.", "Eamon.G"],
          separator: true
        },
        {
          name: "3D Modeling Assistance",
          names: ["PF2K", "Kire"]
        },
        {
          name: "Rigging",
          names: ["Max v.R.", "Eamon.G"]
        },
        {
          name: "3D Texturing",
          names: ["Eamon.G", "Max v.R.", "Natsata", "PF2K"]
        },
        {
          name: "3D Animation Director",
          names: ["Eamon.G", "Max v.R."]
        },
        {
          name: "Animations",
          names: ["Max v.R.", "Eamon.G", "Enrique A. Enríquez V. (BikeAlex)", "PF2K"]
        },
        {
          name: "2D Art",
          names: ["Nayden Romanov (Natsata)", "PF2K", "Bryan Rafael Blanco Landaeta (Cain)"]
        },
        {
          name: "Sound Directors",
          names: ["PF2K", "Eamon.G"],
          separator: true
        },
        {
          name: "Audio Engineering",
          names: ["Vladan Stančić (WeRFury)", "Eamon.G"]
        },
        {
          name: "Music Design",
          names: ["Vladan Stančić", "Eamon.G"]
        },
        {
          name: "Vocals",
          names: [
            "PF2K",
            "Eamon. G",
            "Several Freelancer Voice Actors",
          ]
        },
        {
          name: "Written Content",
          names: ["PF2K"],
          separator: true
        },
        {
          name: "Localization",
          names: [
            "Servimomia (ES)",
            "SimonSo (CHS)",
            "Lorenzeo_Aha!Okay (DE)",
            "Zenorhk (Zanetti) (IT)",
            "Gerkiki (FR)",
          ]
        },
        {
          name: "Balance Lead",
          names: ["PF2K"],
          separator: true
        },
        {
          name: "Playtesting and Civilization Balance Assistance",
          names: [
            "NeoXist",
            "Atlas",
            "Smiga",
            "Hawkster",
            "DestroyerArcher",
            "Kire",
            "Flutters",
            "fairplay",
            "Mandos",
            "Tim619",
            "VC_Ardeshir",
            "Andres",
            "Servimomia",
            "_Puinisher_",
            "Verhuver",
            "EKA",
            "FFNEZ",
            "Starofknight",
            "StrikeR"
          ]
        },
        {
          name: "Marketing",
          names: ["PF2K"],
          separator: true
        },
        {
          name: "Moderator Team",
          names: ["Smileyguyx", "NCSGeek", "Wartai"]
        },
        {
          name: "Tech Support Team",
          names: ["CWO", "NCSGeek", "Wartai"]
        },
        {
          name: "Indians Trailer",
          names: [
            "Kire",
            "Mandy (Talos)",
            "Vladan Stančić",
            "PF2K",
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
          names: ["Kieffer Bryant (IamPREZSTEVE)"]
        },
        {
          name: "Additional Thanks",
          note:
            "Members of the AoE3 Modding Council for their generous expertise",
          names: ["Mandos", "Alistair", "ageekhere"]
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
