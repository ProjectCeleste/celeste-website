<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Personality Quiz
      <b-icon icon="account-question" size="is-large" icon-size="mdi-48px" />
    </h2>

    <b-progress ref="progress" :steps="10" />
    <button class="button is-primary" @click="$refs.progress.progress()">
      Progress
    </button>
    <button class="button is-primary" @click="$refs.progress.back()">
      Back
    </button>
  </section>
</template>

<script>
export default {
  transition: "fade"
}
</script>
