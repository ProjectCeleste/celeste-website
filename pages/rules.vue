<template>
  <section class="section is-vcentered">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <div class="columns card-header-title section-title">
            <div class="column">
              <h2 class="title is-3 has-text-gold">
                Rules
                <b-icon icon="gavel" size="is-large" icon-size="mdi-48px" />
              </h2>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="columns is-multiline">
            <div v-for="(rule, key) of rules" :key="key" class="column is-12">
              <p
                class="content"
                v-html="'<b>' + (key + 1) + '.&nbsp;</b>' + rule"
              />
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
      rules: [
        `Multi-accounting is forbidden. We understand that households have multiple players, but there is no reason that all of the labor from all of the accounts seem to go to one. If it is determined  by our moderation staff that you are using multiple accounts to give yourself an advantage, the mandatory minimum punishment of removal of all game items related to whatever multi-accounting helped you achieve, including gear, materials and more removal of all coin, and any and all event points. The maximum punishment if determined appropriate by our moderator team, is a permanent ban from the game.`,
        `Using any 3rd party program to give yourself an advantage in the game is strictly forbidden. The minimum punishment for doing so is a permanent ban on your account. The maximum punishment if determined appropriate by our moderation team is a permanent ban from the game.`,
        `Selling in game currency, your play time, items, or anything associated with the game for real life currencies is strictly prohibited. Doing this threatens our project and goes against Microsoft's game usage policy. The minimum and maximum punishment for doing so is a permanent ban from the game.`,
        `Purchasing in game currency, play time, items, or anything associated with the game for real life currencies is strictly prohibited. Doing this threatens our project and goes against Microsoft's game usage policy. The minimum punishment for doing so is a complete reset of all of your game progress to date. If determined appropriate by our moderator team the maximum penalty is a permanent ban from the game.`,
        `Be nice to other players. Our community is small, and there is no room for toxicity or bad behavior. You are encouraged to report players who misbehave either in-game or on Discord to one of the moderators. If determined appropriate by our moderator team the minimum punishment for such behavior is a warning and temporarily losing the ability to chat in the game. With repeated offenses, the maximum penalty is a permanent ban from the game.`,
        `The Global Marketplace is a place where people can trade items with one another. Behavior such as undercutting other sellers, misleading others to purchase items at an unfair price or anything that originates from malintent is greatly discouraged, and repeat offenders risk losing their coins or with enough repetitions of the same behavior, their entire account. If you see someone doing any of the aforementioned activities, please report them either in-game or to our moderators on Discord.`,
        `If you have been banned and know what you did to get that ban, do not lie to our moderators and pretend that it is just a mistake. We have records of everything so it is better to be honest. Lying to our moderator team is more likely to get you the maximum penalty. The minimum penalty is the lowest possible punishment, do not ask for less, or you are more likely to get the maximum.`,
        `If you feel like you received a ban by mistake, you may submit a <a href="https://forums.projectceleste.com/forums/ban-appeal.98/" target="_blank" rel="nofollow">Ban Appeal ticket</a> in our forums and your account will be placed under review. Do NOT pm the lead developers about this. If a moderator has not responded to you within 24 hours, you may then message them on Discord.`
      ]
    }
  },
  head() {
    return {
      title: "Rules - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Rules - Age Of Empires Online Celeste"
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
          content: "Rules - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_6.webp");
}
</style>
