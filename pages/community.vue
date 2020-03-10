<template>
  <section class="section is-vcentered">
    <div class="container">
      <div class="columns is-multiline">
        <div
          v-for="(link, index) in links"
          :key="index"
          class="column is-4-desktop is-6"
        >
          <div class="card is-fullheight">
            <div class="card-content has-text-centered is-fullheight">
              <a
                rel="nofollow"
                :href="link.url"
                target="_blank"
                class="community-site-title title has-text-gold is-flex is-flex-column is-centered is-fullheight"
              >
                <img :src="link.icon" class="community-icon" />
                <span>{{ link.title }}</span>
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
          icon: require("~/assets/img/community/Forums_Logo.webp")
        },
        {
          title: "Discord",
          url: "https://discordapp.com/invite/YbkZ9GZ",
          icon: require("~/assets/img/community/Discord_Logo.webp")
        },
        {
          title: "Reddit",
          url: "https://www.reddit.com/r/projectceleste",
          icon: require("~/assets/img/community/RedditLogo.webp")
        },
        {
          title: "Facebook",
          url: "https://www.facebook.com/ProjectCelesteAoEO",
          icon: require("~/assets/img/community/Facebook_Logo.webp")
        },
        {
          title: "Youtube",
          url: "https://www.youtube.com/channel/UC5gS69ffCAeqvJrqWvlnZgg",
          icon: require("~/assets/img/community/YoutubeLogo.webp")
        },
        {
          title: "Twitch",
          url: "https://www.twitch.tv/projectceleste",
          icon: require("~/assets/img/community/TwitchLogo.webp")
        },
        {
          title: "Champion",
          url: "https://champion.projectceleste.com/",
          icon: require("~/assets/img/community/ChampModeWebsiteIcon.webp")
        },
        {
          title: "Item Search",
          url: "https://search.projectceleste.com/",
          icon: require("~/assets/img/community/ItemSearch_Icon.webp")
        },
        {
          title: "Unit Builder",
          url: "https://unitstats.projectceleste.com/",
          icon: require("~/assets/img/community/Stats_Tool_Icon.webp")
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_9.jpg");
}

.community-site-title {
  font-size: $size-4;

  .community-icon {
    max-width: 220px;
    width: 100%;
    margin: auto;
  }

  & > span {
    margin-top: 1rem;
  }
}
</style>
