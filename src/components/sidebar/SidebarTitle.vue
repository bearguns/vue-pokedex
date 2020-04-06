<template>
  <h1 class="sidebar__title">
    <font-awesome-icon :icon="['fab', 'vuejs']"></font-awesome-icon>
    The Vue Pokedex
  </h1>
</template>

<script>
export default {
  name: "SidebarTitle"
};
</script>
<style lang="scss">
.sidebar__title {
  font-family: gothic-open-shaded, sans-serif;
  font-size: 3rem;
  color: $black;
  text-align: center;
}
</style>
