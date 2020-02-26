<template>
  <div class="columns question">
    <div class="column">
      <div class="column">
        <h4 class="subtitle">
          {{ question.title }}
        </h4>
        <div class="field">
          <div
            v-for="(option, i) in question.options"
            :key="i"
            class="question-option"
          >
            <input
              :id="'option-checkbox-' + question.id + '-' + i"
              v-model="selectedOption"
              class="is-checkradio is-primary"
              type="radio"
              :name="'option-' + question.id"
              :value="i"
            />
            <label :for="'option-checkbox-' + question.id + '-' + i">
              {{ option.title }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <img src="https://via.placeholder.com/200x200" />
      <div class="columns is-variable is-1">
        <div class="column is-narrow">
          <button
            class="button is-primary"
            title="Previous question"
            @click="$emit('back')"
          >
            <b-icon icon="chevron-left" size="is-medium" icon-size="mdi-24px" />
          </button>
        </div>
        <div class="column">
          <button
            class="button is-primary is-fullwidth"
            @click="$emit('submit', selectedOption)"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BQuestion",
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedOption: undefined
    }
  },
  watch: {
    question: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        this.$nextTick(function() {
          this.selectedOption = newVal.selectedOption
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.question {
  .question-option {
    padding: 0.75rem;
  }
}
</style>
