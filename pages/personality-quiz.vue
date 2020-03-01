<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="card is-dark">
          <header class="card-header">
            <div class="card-header-title is-flex-column">
              <h2 class="title is-3 has-text-gold">
                Personality Quiz
              </h2>
              <h3 class="subtitle has-text-grey-lighter">
                Discover the civilization that suits you the most!
              </h3>
            </div>
          </header>
          <div class="card-content">
            <div
              class="columns is-centered is-vcentered is-mobile quiz-container"
            >
              <b-question
                v-if="currentQuestion < questions.length"
                ref="question"
                class="column z-front is-narrow"
                :question="questions[currentQuestion]"
                :back-disabled="currentQuestion == 0 || transitioning"
                :submit-disabled="transitioning"
                @submit="onSubmit"
                @back="onBack"
              />
              <div
                v-if="currentQuestion === questions.length"
                ref="results"
                class="column transparent z-front results-container"
              >
                <div class="columns is-centered is-vcentered">
                  <div class="column">
                    <h3 class="title is-flex is-vcentered has-text-white">
                      <img class="civ-shield" :src="matchedCiv.icon" />
                      <span>{{ matchedCiv.name }}</span>
                    </h3>
                    <p class="content">
                      {{ matchedCiv.description }}
                    </p>
                    <div>
                      <b-collapse :open="false">
                        <span slot="header">Your profile</span>
                        <div slot="content">
                          <b-progress
                            v-for="(s, civ) in score"
                            :key="civ"
                            :img="civs[civ].icon"
                            :value="s"
                            :max="total"
                            :title="civs[civ].name"
                            class="is-marginless"
                          />
                        </div>
                      </b-collapse>
                    </div>
                  </div>
                  <div class="column is-narrow is-hidden-touch">
                    <img
                      :src="matchedCiv.character"
                      class="quiz-result-character"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-narrow z-back steps-container">
                <b-steps
                  ref="steps"
                  :steps="questions.length"
                  :current-step="currentStep"
                  orientation="vertical"
                />
              </div>
            </div>
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
        b: 0, // Babylon
        n: 0, // Norse
        r: 0 // Roman
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
    matchedCiv() {
      const max = Object.keys(this.score).reduce((m, k) => {
        return this.score[k] > this.score[m] ? k : m
      }, "g")
      return this.civs[max]
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
      setTimeout(() => {
        this.$refs.results.classList.add("slide-in-right")
        this.$refs.results.classList.remove("transparent")
        for (let i = 0; i < this.questions.length; i++) {
          const question = this.questions[i]
          const option = question.options[question.selectedOption]
          for (const civ in option.score) {
            this.score[civ] += option.score[civ]
          }
        }
        setTimeout(() => {
          this.$refs.results.classList.remove("slide-in-right")
          this.transitioning = false
        }, 500)
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("~assets/img/background_1.jpg");
  background-position: center top;
}

.steps-container {
  margin-right: 0.25rem;
}

.results-container {
  padding: 1.25rem;
}

.civ-shield {
  max-height: 45px;
  margin-right: 0.5rem;

  + span {
    line-height: 45px;
  }
}
</style>
