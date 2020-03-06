<template>
  <section class="section columns">
    <div class="container column is-12">
      <h2 class="title is-3 has-text-gold">
        Community
        <b-icon icon="account-group" size="is-large" icon-size="mdi-48px" />
      </h2>

      <div class="columns">
        <div
          v-for="(link, index) in links"
          :key="index"
          class="column is-3-desktop is-6 is-12-mobile"
        >
          <div class="card is-fullheight">
            <div class="card-content has-text-centered is-fullheight">
              <div>
                <img :src="link.icon" class="community-icon" />
              </div>
              <a
                rel="nofollow"
                :href="link.url"
                target="_blank"
                class="title is-4 has-text-gold"
              >
                {{ link.title }}
              </a>
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
  data() {
    return {
      links: [
        {
          title: "Forums",
          url: "https://forums.projectceleste.com/",
          icon: require("~/assets/img/community/CaesarPortrait.png")
        },
        {
          title: "Discord",
          url: "https://discordapp.com/invite/YbkZ9GZ",
          icon: require("~/assets/img/community/Discord_Logo.png")
        },
        {
          title: "Reddit",
          url: "https://www.reddit.com/r/projectceleste",
          icon: require("~/assets/img/community/RedditLogo.png")
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_13.jpg");
}

.community-icon {
  max-width: 220px;
  width: 100%;
}
</style>
