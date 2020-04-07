<template>
  <div class="card">
    <div class="card__banner">
      <slot name="banner"></slot>
    </div>
    <div class="card__content">
      <slot name="content"></slot>
    </div>
    <div class="card__description">
      <slot name="description"></slot>
    </div>
    <div class="card__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "PKCard"
};
</script>
<style lang="scss">
.card {
  margin: 0 auto;
  width: 325px;
  height: 475px;
  border-radius: 8px;
  background: $white;
  -webkit-box-shadow: 2px 0px 12px -1px rgba(99, 99, 99, 0.75);
  -moz-box-shadow: 2px 0px 12px -1px rgba(99, 99, 99, 0.75);
  box-shadow: 2px 0px 12px -1px rgba(99, 99, 99, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__banner {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-radius: 8px 8px 0px 0px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    background: $red;
    color: $light-gray;
  }

  &__content {
    padding: 12px;
  }
  &__actions {
    padding: 12px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
}
</style>
