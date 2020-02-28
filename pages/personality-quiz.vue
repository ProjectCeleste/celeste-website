<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Personality Quiz
      <b-icon icon="account-question" size="is-large" icon-size="mdi-48px" />
    </h2>

    <div class="columns is-centered" style="align-items: center;">
      <b-question
        v-if="currentQuestion < questions.length"
        class="column is-narrow"
        :question="questions[currentQuestion]"
        @submit="onSubmit"
        @back="onBack"
      />
      <div
        v-if="currentQuestion === questions.length"
        class="column is-narrow columns is-centered"
        style="align-items: center;"
      >
        <!-- TODO vertical center with bulma -->
        <div class="column is-one-third">
          <h3 class="subtitle">
            CivName
          </h3>
          <p>
            TODO idea: histogram for each civ. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Voluptatum, incidunt deleniti!
            Consectetur fugiat aut voluptatem! Commodi blanditiis quaerat, ipsum
            earum exercitationem quidem sed provident veniam quas officia
            tenetur voluptates facilis?
          </p>
          <div>
            <div v-for="(s, civ) in score" :key="civ">
              {{ civ + ":" + s }}
            </div>
          </div>
        </div>
        <div class="column is-narrow">
          <img src="https://via.placeholder.com/200x300" />
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <b-steps
          ref="steps"
          :steps="questions.length"
          :current-step="currentQuestion"
          @completed="onCompleted"
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
      questions: require("assets/data/personality_quiz_questions.json"),
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
    },
    onCompleted() {
      for (let i = 0; i < this.questions.length; i++) {
        const question = this.questions[i]
        const option = question.options[question.selectedOption]
        for (const civ in option.score) {
          this.score[civ] += option.score[civ]
        }
      }
    }
  }
}
</script>
