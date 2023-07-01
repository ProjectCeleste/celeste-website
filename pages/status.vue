<template>
  <section class="section is-vcentered">
    <div class="container is-flex is-centered">
      <div class="card is-narrow">
        <div class="card-header">
          <div class="columns card-header-title section-title">
            <div class="column">
              <h2
                class="title is-3 has-text-gold card-header-title is-centered"
              >
                Status
                <b-icon
                  icon="signal-variant"
                  size="is-large"
                  icon-size="mdi-48px"
                />
              </h2>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="columns is-centered">
            <div class="column">
              <status-item
                title="Game Server"
                health="https://api.projectceleste.com/status/health"
                method="GET"
              />
              <status-item
                title="Forums"
                url="https://forums.projectceleste.com"
                health="https://forums.projectceleste.com/favicon.ico"
              />
              <status-item
                title="Downloads"
                url="https://github.com/ProjectCeleste/Celeste.Launcher/releases/latest/download/CelesteLauncher.zip"
                description="https://github.com/ProjectCeleste/Celeste.Launcher"
                health="https://downloads.projectceleste.com/favicon.ico"
              />
              <status-item
                title="REST API"
                url="https://api.projectceleste.com/gamedb/"
                description="https://api.projectceleste.com"
                health="https://api.projectceleste.com/gamedb/serverprotodata/Gr_Cap_Warehouse01"
                :ignore-body="true"
                method="GET"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StatusItem from "~/components/StatusItem.vue"

export default {
  transition: "fade",
  scrollToTop: true,
  components: {
    "status-item": StatusItem
  },
  head() {
    return {
      title: "Status - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Status - Age Of Empires Online Celeste"
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
          content: "Status - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_5.webp");
}
</style>
