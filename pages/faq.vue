<template>
  <section class="section columns">
    <div class="container column is-12">
      <div class="card">
        <div class="card-header">
          <div class="columns card-header-title section-title">
            <div class="column">
              <h2 class="title is-3">
                FAQ
                <b-icon
                  icon="comment-question"
                  size="is-large"
                  icon-size="mdi-48px"
                />
              </h2>

              <h3 class="subtitle">
                Any question?
              </h3>
              <p class="content">
                Learn everything you need to know and find answers to your
                questions in the FAQ.
              </p>
            </div>
            <div class="column is-narrow">
              <img src="~assets/img/faq.png" class="section-icon" />
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="columns is-multiline">
            <div
              v-for="(question, key) of questions"
              :key="key"
              class="column is-full"
            >
              <b-collapse :open="false" :aria-id="'questionContentId' + key">
                <span slot="header">{{ question.title }}</span>
                <div slot="content" v-html="question.content" />
              </b-collapse>
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
      questions: [
        {
          title: "What is Age of Empires Online?",
          content: `<p>Age of Empires Online is the next evolution in the best-selling real-time strategy (RTS) franchise Age of Empires. Developed by Microsoft Game Studios for the Games for Windows – LIVE platform, Age of Empires Online invites players to create a living, growing online world, shared with friends and friendly rivals around the world. Marrying fresh features with classic RTS gameplay, Age of Empires Online pays tribute to the original game while incorporating a new look, feel, and approach that appeals to long-time fans, newcomers, and everyone in between.</p>`
        },
        {
          title: "Is it really free to play?",
          content: `<p>Yes, Age of Empires Online is entirely free to play!</p>`
        },
        {
          title: "Is there a subscription fee?",
          content: `<p>No, there are no subscription fees to play Age of Empires Online.</p>`
        },
        {
          title: "What are the system requirements for Age of Empires Online?",
          content: `<ul>
                        <li><b>Processor:</b> Dual Core, 2Ghz or higher</li>
                        <li><b>Video card:</b> 128 MB Shader 2 supported card or higher</li>
                        <li><b>Memory:</b> Win XP SP3/Vista Home Basic – 1GB; Vista Premium, Ultimate/Windows 7 (32 bit) – 1.5GB; Windows 7 (64 bit) – 2.5GB</li>
                        <li><b>Hard drive space:</b> 5 GB required for downloads</li>
                        <li><b>Internet:</b> Broadband internet required</li>
                    </ul>`
        },
        {
          title: "What platforms is the game available on?",
          content: `<p>Age of Empires Online is available via Steam in English, German, French, and Spanish.</p>`
        },
        {
          title: "Is an internet connection required?",
          content: `<p>Yes. In Age of Empires Online your empire is part of a persistent world with an active global community requiring you to be logged in and online to participate.</p>`
        },
        {
          title: "How is downloadable content released?",
          content: `<p>All new downloadable content will be available to all players automatically with new Patches.</p>`
        },
        {
          title: "What civilizations are available to play?",
          content: `<p>The campaigns in Age of Empires Online are based on historical periods that provide rich settings for storytelling. Choose from a number of historic civilizations including the Babylonians, Celts, Egyptians, Greeks, Persians and the Norse. We are proud to announce that the Roman civilization will be available to play soon as well! History provides the setting; from there, you make your own story.</p>`
        },
        {
          title: "What is the Capital City? How does it work?",
          content: `<p>The Capital City is your civilization’s home base and where you’ll start building your new empire! By utilizing blueprints you find throughout your campaign, as well as vanity items that can be earned, you can customize your Capital City as you see fit. Blueprints will allow you to build new stores, training halls, historic monuments, gardens, and so much more wherever you see fit. And since your Capital City lives online it will continue to gather resources even when you aren’t logged in! Other players are also able to visit your city while you’re offline and purchase items from your stores.</p>`
        },
        {
          title: "Will there be consequences for not playing?",
          content: `<p>No, there is no penalty for not playing. Your city can not be attacked and you will not lose levels if you don’t play for a period of time.</p>`
        },
        {
          title: "Where can I find additional help?",
          content: `<p>Please <a href="https://discord.gg/pkM2RAm" rel="nofollow" target="_blank">join us on discord</a>.</p>`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_3.jpg");
  background-position: center top;
}

.section-title {
  margin: 0;
}
</style>
