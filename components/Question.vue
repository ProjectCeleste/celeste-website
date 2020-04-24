<template>
  <div ref="root" class="question is-flex is-flex-column">
    <div class="is-flex is-centered content">
      <img src="https://via.placeholder.com/450x200" class="question-img" />
    </div>
    <h4 class="subtitle has-text-white has-text-centered">
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
          class="is-checkradio is-info"
          type="radio"
          :name="'option-' + question.id"
          :value="i"
        />
        <label :for="'option-checkbox-' + question.id + '-' + i">
          {{ option.title }}
        </label>
      </div>
    </div>
    <div class="columns is-variable is-1 is-mobile is-centered">
      <div class="column is-narrow">
        <button
          class="button is-info"
          title="Previous question"
          :disabled="backDisabled"
          @click="$emit('back')"
        >
          <b-icon icon="chevron-left" size="is-medium" icon-size="mdi-24px" />
        </button>
      </div>
      <div class="column submit-container">
        <button
          class="button is-info is-fullwidth"
          :disabled="newSubmitDisabled"
          @click="$emit('submit', selectedOption)"
        >
          Submit
        </button>
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
    },
    backDisabled: {
      type: Boolean,
      default: false
    },
    submitDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedOption: undefined,
      newSubmitDisabled: false
    }
  },
  watch: {
    selectedOption(newVal, oldVal) {
      this.newSubmitDisabled = newVal < 0
    },
    submitDisabled(newVal, oldVal) {
      this.newSubmitDisabled = newVal || this.selectedOption < 0
    },
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
  margin: auto;
  max-width: 100%;
}

.question-option {
  margin: 0.75rem 0;
}

.question-img {
  max-width: 100%;
}

.field {
  align-self: center;
}

@media screen and (min-width: $tablet) {
  .submit-container {
    max-width: 230px;
  }
}
</style>
