<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Personality Quiz
      <b-icon icon="account-question" size="is-large" icon-size="mdi-48px" />
    </h2>

    <div class="columns is-centered">
      <b-question
        v-if="currentQuestion < questions.length"
        class="column is-narrow"
        :question="questions[currentQuestion]"
        @submit="onSubmit"
        @back="onBack"
      />
      <div v-if="currentQuestion === questions.length" class="column is-narrow">
        <h3 class="subtitle">
          Results
        </h3>
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
export default {
  transition: "fade",
  data() {
    return {
      currentQuestion: 0,
      questions: [
        {
          id: 0,
          title: "What would you do?",
          options: [
            { title: "option 1" },
            { title: "option 2" },
            { title: "option 3" }
          ]
        },
        {
          id: 1,
          title: "Another question?",
          options: [
            { title: "option 1" },
            { title: "option 2" },
            { title: "option 3" }
          ]
        },
        {
          id: 2,
          title: "And another one?",
          options: [
            { title: "option 1" },
            { title: "option 2" },
            { title: "option 3" }
          ]
        }
      ]
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
      }
    },
    onBack() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--
      }
    }
  }
}
</script>
