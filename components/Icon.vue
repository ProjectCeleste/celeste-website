<template>
  <span :class="['icon', size, type]">
    <i :class="['mdi', 'mdi-' + icon, iconSize]" />
  </span>
</template>

<script>
export default {
  name: "BIcon",
  props: {
    type: { type: String, default: "" },
    size: { type: String, default: "" },
    iconSize: { type: String, default: "" },
    icon: { type: String, required: true }
  }
}
</script>
