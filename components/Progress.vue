<template>
  <div class="columns is-mobile b-progress">
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
  name: "BProgress",
  props: {
    steps: { type: Number, required: true }
  },
  data() {
    return {
      currentStep: 0
    }
  },
  methods: {
    progress() {
      if (this.currentStep < this.steps) {
        this.currentStep++
        this.$emit("progress", this.isOpen)

        if (this.currentStep === this.steps) {
          this.$emit("completed")
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
$transition-duration: 1.25s;

.b-progress {
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
      background-color: var(--color--light);
      text-align: center;
      vertical-align: middle;
      color: transparent;
      transition: background-position 0.25s ease-out, color 0.25s ease-in-out;
    }

    .step-content,
    .step-segment {
      background: linear-gradient(
        to right,
        var(--color--green) 50%,
        var(--color--light) 50%
      );
      background-size: 200% 100%;
      background-position: right bottom;
    }

    &:not(:first-child) {
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
      transition: background-position $transition-duration ease-in;
    }

    &.completed {
      .step-content {
        color: #fff;
      }
      .step-content,
      .step-segment {
        background-position: left bottom;
      }
    }
  }
}
</style>
