<template>
  <section class="section colmuns">
    <div class="container column is-12">
      <h2 class="title is-3">
        Personality Quiz
        <b-icon icon="account-question" size="is-large" icon-size="mdi-48px" />
      </h2>

      <div class="columns is-centered is-vcentered is-mobile">
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
              <h3 class="subtitle">
                {{ matchedCiv.name }}
              </h3>
              <p class="content">
                {{ matchedCiv.description }}
              </p>
              <div>
                <h4 class="subtitle">
                  Your profile
                </h4>
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
            </div>
            <div class="column is-narrow is-hidden-touch">
              <img :src="matchedCiv.character" class="quiz-result-character" />
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
.quiz-result-character {
  height: 350px;
  width: auto;
}

.steps-container {
  padding-right: 1.5rem;
}

.results-container {
  padding: 1.25rem;
}
</style>
