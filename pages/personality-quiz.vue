<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Personality Quiz
      <b-icon icon="account-question" size="is-large" icon-size="mdi-48px" />
    </h2>

    <b-steps ref="steps" :steps="10" />
    <button class="button is-primary" @click="$refs.steps.next()">
      Next
    </button>
    <button class="button is-primary" @click="$refs.steps.previous()">
      Previous
    </button>
  </section>
</template>

<script>
export default {
  transition: "fade"
}
</script>
