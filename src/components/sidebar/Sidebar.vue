<template>
<nav class="sidebar">
  <SidebarTitle />
  </nav>
</template>

<script>
import SidebarTitle from "./SidebarTitle.vue";
export default {
  name: "Sidebar",
  components: { SidebarTitle },
}
</script>
<style lang="scss">
.sidebar {
    padding: 27px 15px;
    min-height: 100vh;
    width: 300px;
    background: $red;
    @media screen and (max-width: 768px) {
	position: relative;
	z-index: 1;
	max-height: 240px;
	grid-row: span -1;
	padding: 15px 0px;
    }
}
</style>
