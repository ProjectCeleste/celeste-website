<template>
  <div class="columns is-variable is-1 b-progress is-vcentered is-mobile">
    <div v-if="img" class="column is-narrow is-vcentered">
      <img class="b-progress-img" :src="img" />
    </div>
    <div class="column is-vcentered">
      <div
        class="b-progress-bar"
        :style="{ 'background-position-x': progress }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BProgress",
  props: {
    img: { type: String, default: undefined },
    max: { type: Number, default: 100 },
    value: { type: Number, default: 0 }
  },
  computed: {
    progress() {
      const val = this.value !== undefined ? this.value : 0
      const max = this.max ? this.max : 100
      return (1 - val / max) * 100 + "%"
    }
  }
}
</script>

<style lang="scss" scoped>
$progress-bar-background-color: #c2b693 !default;
$progress-border-radius: $radius-rounded !default;
$progress-bar-duration: 2s !default;

.b-progress {
  .column {
    padding: var(--columnGap);
  }

  .b-progress-bar {
    border: none;
    border-radius: $progress-border-radius;
    display: block;
    height: $size-normal;
    overflow: hidden;
    padding: 0;
    width: 100%;
    background: linear-gradient(
      to right,
      $primary 50%,
      $progress-bar-background-color 50%
    );
    background-position-x: right;
    background-size: 200% 100%;
    transition: background-position-x $progress-bar-duration ease;

    @each $name, $pair in $colors {
      $color: nth($pair, 1);

      &.is-#{$name} {
        background: linear-gradient(
          to right,
          $color 50%,
          $progress-bar-background-color 50%
        );
        background-position-x: right;
        background-size: 200% 100%;
      }
    }
  }

  .b-progress-img {
    width: 32px;
    height: 32px;
  }
}
</style>
