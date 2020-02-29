<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Personality Quiz
      <b-icon icon="account-question" size="is-large" icon-size="mdi-48px" />
    </h2>

    <div class="columns is-centered is-vcentered">
      <b-question
        v-if="currentQuestion < questions.length"
        class="column is-narrow"
        :question="questions[currentQuestion]"
        @submit="onSubmit"
        @back="onBack"
      />
      <div
        v-if="currentQuestion === questions.length"
        class="column is-narrow is-8"
      >
        <div class="columns is-centered is-vcentered">
          <div class="column is-half">
            <h3 class="subtitle">
              {{ matchedCiv.name }}
            </h3>
            <p>
              {{ matchedCiv.description }}
            </p>
            <div class="quiz-progress-container">
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
          <div class="column is-narrow">
            <img :src="matchedCiv.character" class="quiz-result-character" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <b-steps
          ref="steps"
          :steps="questions.length"
          :current-step="currentQuestion"
        />
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
      if (this.currentQuestion < this.questions.length) {
        this.currentQuestion++

        if (this.currentQuestion === this.questions.length) {
          this.onCompleted()
        }
      }
    },
    onBack() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--
      }
    },
    onCompleted() {
      setTimeout(() => {
        for (let i = 0; i < this.questions.length; i++) {
          const question = this.questions[i]
          const option = question.options[question.selectedOption]
          for (const civ in option.score) {
            this.score[civ] += option.score[civ]
          }
        }
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.quiz-progress-container {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.quiz-result-character {
  height: 350px;
  width: auto;
}
</style>
