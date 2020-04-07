<template>
  <button
    class="pk-button"
    :class="{
      'pk-button--primary': primary,
      'pk-button--large': large,
      'pk-button--block': block
    }"
    @click="() => this.$emit('clicked')"
  >
    <slot name="label"></slot>
  </button>
</template>

<script>
export default {
  name: "PKButton",
  props: {
    primary: Boolean,
    large: Boolean,
    block: Boolean
  }
};
</script>

<style lang="scss">
.pk-button {
  height: 48px;
  width: 127px;
  border-radius: 4px;
  background: transparent;
  border: 2px solid $red;
  color: $red;
  transition: all 0.15s ease;

  &:hover {
    background: $red;
    color: $white;
  }

  &--primary {
    background: $red;
    color: $light-gray;
  }

  &--large {
    width: 227px;
  }

  &--block {
    display: block;
    width: 100%;
  }

  &--primary:hover {
    border: 1px solid $red;
    background: transparent;
    color: $red;
  }
}
</style>
