<template>
<nav class="sidebar">
  <SidebarTitle />
  <SearchBar />
</nav>
</template>

<script>
import SidebarTitle from "./SidebarTitle.vue";
import SearchBar from "./SearchBar.vue";
export default {
  name: "Sidebar",
  components: { SidebarTitle, SearchBar },
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
