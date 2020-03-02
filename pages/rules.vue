<template>
  <section class="section columns">
    <div class="container column is-12">
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
  data() {
    return {
      rules: [
        `Multi accounting is forbidden. We understand that households have multiple players, but there is no reason that all of the labor from all of the accounts seem to go to one. If it is determined  by our moderation staff that you are using multiple accounts to give yourself an advantage, the mandatory minimum punishment of removal of all game items related to whatever multi accounting helped you achieve, including gear, materials and more removal of all coin, and any and all event points. The maximum punishment if determined appropriate by our Mod team, is a permanent ban from the game.`,
        `Using any 3rd party program to give yourself an advantage in the game is strictly forbidden. The minimum punishment for doing so is a forever ban on your account. The maximum punishment if determined appropriate by our mod team team is a forever ban from the game.`,
        `Selling in game currency, your play time, items, or anything associated with the game for real life currencies is strictly prohibited. Doing this threatens our project and goes against Microsoft's game usage policy. The minimum and maximum punishment for doing so is a permanent ban from the game.`,
        `Purchasing in game currency, play time, items, or anything associated with the game for real life currencies is strictly prohibited. Doing this threatens our project and goes against Microsoft's game usage policy. The minimum punishment for doing so is a complete reset of all of your game progress to date. If determined appropriate by our moderator team the maximum penalty is a permanent ban from the game.`,
        `If you have been banned and know what you did to get that ban, do not lie to our moderators and pretend that it is just a mistake. We have records of everything so it is better to be honest. Lying to our moderator team is more likely to get you the maximum penalty. The minimum penalties is the lowest possible punishment, do not ask for less, or you are more likely to get the maximum.`,
        `If you feel like you recieved a ban by mistake, you may pm one Moderator in our discord and your account can be placed under review. Do NOT pm the lead devs about this, or multiple moderators. If the moderator has not responded to you within 24 hours, you may then message a different mod.`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_2.png");
}
</style>
