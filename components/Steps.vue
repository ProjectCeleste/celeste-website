<template>
  <div :class="containerClass">
    <div
      v-for="i in steps"
      :key="i"
      :class="{
        column: true,
        step: true,
        'has-text-centered': true,
        completed: i <= currentStep
      }"
    >
      <div class="step-content">
        <b-icon icon="check" size="is-medium" icon-size="mdi-24px" />
      </div>
      <div v-if="i != 1" class="step-segment" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BSteps",
  props: {
    steps: { type: Number, required: true },
    currentStep: { type: Number, default: 0 },
    orientation: { type: String, default: "horizontal" }
  },
  computed: {
    containerClass() {
      return {
        columns: true,
        "is-mobile": true,
        "b-steps": true,
        "b-steps-vertical": this.orientation === "vertical"
      }
    }
  },
  watch: {
    currentStep(newVal, oldVal) {
      if (this.currentStep === this.steps) {
        this.$emit("completed")
      }
    }
  },
  methods: {
    next() {
      if (this.currentStep < this.steps) {
        this.currentStep++
        this.$emit("next", this.currentStep)

        if (this.currentStep === this.steps) {
          this.$emit("completed")
        }
      }
    },
    previous() {
      if (this.currentStep > 0) {
        this.currentStep--
        this.$emit("previous", this.currentStep)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$transition-duration: 0.75s;

.b-steps {
  justify-content: space-evenly;

  .step {
    display: flex;
    justify-content: center;
    position: relative;

    .step-content {
      z-index: 1;
      height: 2rem;
      width: 2rem;
      overflow: hidden;
      border-radius: 50%;
      text-align: center;
      vertical-align: middle;
      color: transparent;
      transition: background-position 0.25s ease-in, color 0.25s ease-in-out;
    }

    .step-content,
    .step-segment {
      background: linear-gradient(to right, $info 50%, $color--light 50%);
      background-size: 200% 100%;
      background-position: right bottom;
    }

    &:not(:first-child).completed {
      .step-content {
        transition-delay: $transition-duration;
      }
    }

    .step-segment {
      display: block;
      position: absolute;
      transform: translate(calc(-50% - 1rem + 2px), -50%);
      height: 0.5rem;
      width: calc(100% - 2rem + 4px);
      top: 50%;
      transition: background-position $transition-duration ease-out;
      transition-delay: 0.25s;
    }

    &.completed {
      .step-content {
        color: $color--gold;
        transition-timing-function: ease-out;
      }
      .step-segment {
        transition-delay: 0s;
        transition-timing-function: ease-in;
      }
      .step-content,
      .step-segment {
        background-position: left bottom;
      }
    }
  }

  &.b-steps-vertical {
    flex-direction: column;

    .step {
      .step-content,
      .step-segment {
        background: linear-gradient(to bottom, $info 50%, $color--light 50%);
        background-size: 100% 200%;
        background-position: bottom right;
      }

      .step-segment {
        width: 0.5rem;
        height: calc(100% - 2rem + 4px);
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
      }

      &.completed {
        .step-content,
        .step-segment {
          background-position: top right;
        }
      }
    }
  }
}
</style>
