<template>
  <div class="sidebar-title">
    <h1 class="sidebar-title__heading">
      <font-awesome-icon :icon="['fab', 'vuejs']"></font-awesome-icon>
      The Vue Pokedex
    </h1>
  </div>
</template>

<script>
export default {
  name: "SidebarTitle"
};
</script>
<style lang="scss">
.sidebar-title {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background: $red;
  width: 100%;
  height: 200px;
  padding: 50px 15px;

  &__heading {
    margin: 0px;
    font-family: gothic-open-shaded, sans-serif;
    font-size: 3rem;
    color: $black;
    text-align: center;
  }
}
</style>
