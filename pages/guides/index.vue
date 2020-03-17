<template>
  <div class="column">
    <h4 class="title is-4 has-text-centered has-text-white guide-title">
      Welcome to the guides!
    </h4>

    <div class="guide-banner content home-banner" />

    <p class="content">
      Greetings, Warrior! Welcome to the Age of Empires Online guides.
    </p>
    <p class="content">
      Here you can find everything you need to get started in Age of Empires
      Online: answers to basic questions, the game's fundamentals, build orders,
      tips about early game, unit control, economy management and scouting.
    </p>

    <p class="content">
      Click on the icon below to view information about the PvP Champion Mode,
      including Tech Trees, Unit Stats and active Ranked maps, alongside a link
      to join the PvP Discord where you can find additional learning resources
      and interact with other players to discuss strategies, find practice
      partners, and play games together!
    </p>

    <p class="content has-text-centered">
      <a
        rel="nofollow"
        target="_blank"
        href="https://champion.projectceleste.com/"
      >
        <img src="~assets/img/community/ChampModeWebsiteIcon.webp" />
      </a>
    </p>

    <p class="content">
      Glory to the brave, we will see you on the battlefield.
    </p>
  </div>
</template>

<script>
export default {
  transition: "fade"
}
</script>

<style lang="scss" scoped>
.home-banner {
  background-image: url(~assets/img/guides/home.webp);
}
</style>
