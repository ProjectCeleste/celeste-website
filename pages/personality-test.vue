<template>
  <section class="section is-vcentered">
    <div class="container">
      <div class="card">
        <header class="card-header">
          <div class="card-header-title is-flex-column has-text-centered">
            <h2 class="title is-3 has-text-gold">
              Personality Test
            </h2>
            <h3 class="subtitle has-text-grey-lighter">
              Discover the civilization that suits you the most!
            </h3>
          </div>
        </header>
        <div class="card-content quiz-container is-flex is-flex-column">
          <b-question
            v-if="currentQuestion < questions.length"
            ref="question"
            class="z-front"
            :question="questions[currentQuestion]"
            :back-disabled="currentQuestion == 0 || transitioning"
            :submit-disabled="transitioning"
            @submit="onSubmit"
            @back="onBack"
          />
          <div
            v-if="currentQuestion === questions.length"
            ref="results"
            class="columns is-gapless transparent z-front results-container is-centered is-vcentered is-marginless"
          >
            <div class="column">
              <h3 class="title is-3 is-flex is-vcentered has-text-white">
                <img class="civ-shield" :src="matchedCiv.icon" />
                <span>{{ matchedCiv.name }}</span>
              </h3>
              <p class="content">
                {{ matchedCiv.description }}
              </p>

              <p class="content has-text-centered">
                <nuxt-link
                  :to="'/civilizations/' + matchedCiv.name.toLowerCase()"
                  class="button is-primary has-text-ashley"
                >
                  Read more
                </nuxt-link>

                <button class="button is-primary has-text-ashley" @click="init">
                  Try again
                </button>
              </p>
              <div>
                <b-collapse :open="false">
                  <span slot="header">
                    See how you scored for every civilization
                  </span>
                  <div slot="content">
                    <b-progress
                      v-for="(s, civ) in sortedScores"
                      :key="civ"
                      :img="civs[civ].icon"
                      :value="s"
                      :max="maxScore"
                      :title="civs[civ].name"
                      class="is-marginless"
                    />
                  </div>
                </b-collapse>
              </div>
            </div>
            <div class="column is-narrow is-hidden-touch">
              <img :src="matchedCiv.character" class="quiz-result-character" />
            </div>
          </div>
          <div class="z-back steps-container is-hidden-mobile">
            <b-steps
              ref="steps"
              :steps="questions.length"
              :current-step="currentStep"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Civs from "assets/data/civs"

export default {
  transition: "fade",
  scrollToTop: true,
  data() {
    return {
      currentQuestion: 0,
      currentStep: 0,
      transitioning: false,
      questions: require("assets/data/personality_quiz_questions.json"),
      civs: Civs,
      score: {
        g: 0, // Greek
        e: 0, // Egypt
        c: 0, // Celts
        p: 0, // Persia
        r: 0, // Roman
        b: 0, // Babylon
        n: 0 // Norse
      }
    }
  },
  computed: {
    total() {
      let total = 0
      for (const civ in this.score) {
        total += this.score[civ]
      }
      return total
    },
    sortedScores() {
      const ordered = {}
      Object.keys(this.score)
        .sort((a, b) =>
          this.score[a] > this.score[b]
            ? -1
            : this.score[b] > this.score[a]
            ? 1
            : 0
        )
        .forEach(key => {
          ordered[key] = this.score[key]
        })
      return ordered
    },
    maxCiv() {
      return Object.keys(this.score).reduce((m, k) => {
        return this.score[k] > this.score[m] ? k : m
      }, "g")
    },
    maxScore() {
      return this.score[this.maxCiv]
    },
    matchedCiv() {
      return this.civs[this.maxCiv]
    }
  },
  beforeMount() {
    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].selectedOption = -1
    }
  },
  methods: {
    onSubmit(selectedOption) {
      this.questions[this.currentQuestion].selectedOption = selectedOption
      this.nextQuestion()
    },
    onBack() {
      if (this.currentStep > 0) {
        this.$refs.question.$el.classList.add("slide-out-right")
        this.currentStep--
        this.transitioning = true
        setTimeout(() => {
          this.currentQuestion--
          this.$refs.question.$el.classList.remove("slide-out-right")
          this.$refs.question.$el.classList.add("slide-in-left")
          setTimeout(() => {
            this.$refs.question.$el.classList.remove("slide-in-left")
            this.transitioning = false
          }, 500)
        }, 500)
      }
    },
    nextQuestion() {
      if (this.currentStep < this.questions.length) {
        this.$refs.question.$el.classList.add("slide-out-left")
        this.currentStep++
        this.transitioning = true
        setTimeout(() => {
          this.currentQuestion++
          this.$refs.question.$el.classList.remove("slide-out-left")
          this.$refs.question.$el.classList.add("slide-in-right")

          if (this.currentStep === this.questions.length) {
            this.onCompleted()
          } else {
            setTimeout(() => {
              this.$refs.question.$el.classList.remove("slide-in-right")
              this.transitioning = false
            }, 500)
          }
        }, 500)
      }
    },
    onCompleted() {
      for (let i = 0; i < this.questions.length; i++) {
        const question = this.questions[i]
        const option = question.options[question.selectedOption]
        for (const civ in option.score) {
          this.score[civ] += option.score[civ]
        }
      }
      this.$nextTick(() => {
        this.$refs.results.classList.add("slide-in-right")
        this.$refs.results.classList.remove("transparent")
        setTimeout(() => {
          this.$refs.results.classList.remove("slide-in-right")
          this.transitioning = false
        }, 500)
      })
    },
    init() {
      this.currentQuestion = 0
      this.currentStep = 0
      this.transitioning = false
      this.score = {
        g: 0, // Greek
        e: 0, // Egypt
        c: 0, // Celts
        p: 0, // Persia
        r: 0, // Roman
        b: 0, // Babylon
        n: 0 // Norse
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_1.webp");
}

.results-container {
  margin: 0;
}

.civ-shield {
  height: 45px;
  width: 45px;
  margin-right: 0.5rem;

  + span {
    line-height: 45px;
  }
}

.quiz-result-character {
  width: 321px;
  height: 308px;
}

.steps-container {
  margin-top: 1.25rem;
}
</style>
