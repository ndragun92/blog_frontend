<template>
  <button
    type="button"
    class="g-button"
    :class="[
      `g-button--${color}`,
      { 'g-button--compact': compact },
      { 'g-button--uppercase': uppercase },
      { 'g-button--full': full },
      { 'g-button--active': active },
      { 'g-button--border': border },
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      validator: (val) =>
        ['create', 'warning', 'delete', 'simple'].includes(val),
      default: 'initial',
    },
    compact: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
