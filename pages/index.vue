<template>
  <div>
    <parallax />
    <section
      id="after-parallax"
      class="section hero has-text-centered is-relative"
    >
      <div class="hero-body is-middle">
        <div class="container">
          <h1 class="title has-text-gold is-1">
            Age of Empires Online
          </h1>
          <h2 class="subtitle has-text-grey-lighter is-3">
            Project Celeste
          </h2>
          <div class="content">
            <nuxt-link
              to="install"
              class="button is-large title is-primary has-text-gold"
            >
              Play for free!
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <div class="separator">
      <img src="~/assets/img/separator.webp" />
    </div>
    <section class="section">
      <div class="container">
        <div class="columns has-text-centered">
          <div class="column is-4">
            <p class="title is-4 has-text-gold">
              <strong>Build your empire</strong>
            </p>
            <p class="content">
              Choose from 7 civilizations and complete quests to level up your
              civilization – unlocking new units, tech and challenges!
            </p>
          </div>
          <div class="column is-4">
            <p class="title is-4 has-text-gold">
              <strong>Play with Friends</strong>
            </p>
            <p class="content">
              Complete co-op quests with your friends or challenge their skills
              in the PvP arena. Join the community and participate in
              tournaments or gain high level gear in co-op quests!
            </p>
          </div>
          <div class="column is-4">
            <p class="title is-4 has-text-gold">
              <strong>Gear up</strong>
            </p>
            <p class="content">
              Customize your civilization and gear up your units by completing
              quests solo or with friends. Complete challenging quests to earn
              prestigious legendary gear!
            </p>
          </div>
        </div>
      </div>
    </section>

    <div id="battle-separator" class="background-separator"></div>

    <section class="section">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-full">
            <p class="title is-4 has-text-gold">
              <strong>Completely Free!</strong>
            </p>
            <p class="content">
              A fan-made community server that brings the excellent Age of
              Empires Online back to life! Play every civilization for free!
              free! There is no paid content – no need to buy anything!
            </p>
          </div>
        </div>

        <div class="columns has-text-centered">
          <div class="column is-half">
            <p class="title is-4 has-text-gold">
              <strong>Classic experience</strong>
            </p>
            <p class="content">
              Skip all of the PvE content and go right into gearless champion
              mode PvP! The gameplay you know and love from Age of Empires is
              all here. Our PvP balance team works tirelessly to provide the
              game with a balanced, gearless, competitive mode.
            </p>
          </div>
          <div class="column is-half">
            <p class="title is-4 has-text-gold">
              <strong>Quest, Loot, Craft!</strong>
            </p>
            <p class="content">
              For those who loved the RTS MMO. It's all there. Gear up your
              empire to take on more and more challenges. Play with friends in
              horde (crete) mode. Take on the most difficult quests and gain
              legendary gear. Build it from the ground up and show it off!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div
          class="columns is-variable is-1 is-multiline is-centered is-mobile"
        >
          <div class="column is-narrow civ-icon">
            <img src="~/assets/img/civ/greek.webp" />
          </div>
          <div class="column is-narrow civ-icon">
            <img src="~/assets/img/civ/egypt.webp" />
          </div>
          <div class="column is-narrow civ-icon">
            <img src="~/assets/img/civ/celt.webp" />
          </div>
          <div class="column is-narrow civ-icon">
            <img src="~/assets/img/civ/persia.webp" />
          </div>
          <div class="column is-narrow civ-icon">
            <img src="~/assets/img/civ/roman.webp" />
          </div>
          <div class="column is-narrow civ-icon">
            <img src="~/assets/img/civ/babylon.webp" />
          </div>
          <div class="column is-narrow civ-icon">
            <img src="~/assets/img/civ/norse.webp" />
          </div>
        </div>
        <div class="has-text-centered">
          <p class="title is-4 has-text-gold">
            <strong>Civilizations</strong>
          </p>
          <p class="content">
            Play as the Greeks, Egyptians, Celts, Persians, Romans, Babylonians
            and Norse. Each civilization is unique in its own way and has its
            own play style. Find out which one suits you the most by answering a
            few questions in our personality test!
          </p>
          <nuxt-link
            to="personality-test"
            class="button is-primary is-medium title"
          >
            <span>Personality Test</span>
          </nuxt-link>
        </div>
      </div>
    </section>

    <div id="town-separator" class="background-separator"></div>

    <section class="section">
      <div class="container">
        <div class="columns is-vcentered is-centered">
          <div
            class="column is-offset-2-desktop is-half-desktop has-text-centered"
          >
            <p class="title is-4 has-text-gold">
              <strong>Guides</strong>
            </p>
            <p class="subtitle is-5 has-text-grey-lighter">
              Don't know where to start?
            </p>
            <p class="content">
              Don't worry, we've got you covered! Find out everything you need
              to know to get started in Age of Empires Online thanks to the
              guides: answers to basic questions, the game's fundamentals, build
              orders, tips about early game, unit control, economy management,
              scouting and more.
            </p>
            <nuxt-link to="guides" class="button is-primary is-medium title">
              <span>Read the guides</span>
            </nuxt-link>
          </div>
          <div class="column is-2 has-text-centered">
            <img src="~assets/img/LoadingQuestGiver.webp" />
          </div>
        </div>
      </div>
    </section>

    <section
      id="play-hero"
      class="hero is-success is-fullheight has-text-centered"
    >
      <div class="hero-body">
        <div class="container is-flex">
          <div class="card is-absolute-centered">
            <div class="card-content">
              <p class="title is-4">
                Start your conquest
              </p>
              <nuxt-link
                to="install"
                class="button is-large title is-primary has-text-gold"
              >
                Play for free!
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  transition: "fade"
}
</script>

<style lang="scss" scoped>
#after-parallax {
  background: linear-gradient(180deg, #1d1101 0%, $color--darker--opaque 100%);
}

.section {
  background-color: $color--darker--opaque;
}

.separator {
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  background-color: $color--darker--opaque;
}

.columns:not(:last-child) {
  margin-bottom: 2.25rem;
}

.background-separator {
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero,
.half-background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.half-background {
  min-height: 50vh;
}

#battle-separator {
  background-image: url("~assets/img/background_4.webp");
}

#town-separator {
  background-image: url("~assets/img/background_19.webp");
}

#play-hero {
  background-image: url("~assets/img/background_14.webp");
}

.civ-icon img {
  max-width: 128px;

  @media screen and (max-width: $tablet - 1px) {
    & {
      max-width: 64px;
    }
  }
}
</style>
