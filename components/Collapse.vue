<template>
  <div class="card is-paddingless">
    <div class="card-header collapse-header" @click="toggle">
      <p class="card-header-title has-text-white">
        <slot name="header" />
      </p>
      <a class="card-header-icon">
        <b-icon
          :icon="isOpen ? 'chevron-down' : 'chevron-up'"
          icon-size="mdi-24px"
        ></b-icon>
      </a>
    </div>
    <transition name="slide">
      <div v-if="isOpen" class="card-content content">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BCollapse",
  props: {
    open: {
      type: Boolean,
      default: true
    },
    ariaId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOpen: this.open
    }
  },
  watch: {
    open(value) {
      this.isOpen = value
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      this.$emit("update:open", this.isOpen)
      this.$emit(this.isOpen ? "open" : "close")
    }
  }
}
</script>

<style scoped lang="scss">
.collapse-header {
  font-family: "Ashley Crawford MT", "Times New Roman", "Arimo", sans-serif;
  text-shadow: 2px 0 2px #192b33;
  background: $color--light;
  border: none;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  .card-header-icon {
    text-shadow: none;
  }
}

.card-content {
  overflow: hidden;
  border: $color--light 2px solid;
}
</style>
