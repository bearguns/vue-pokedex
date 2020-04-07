<template>
  <nav class="sidebar">
    <SidebarTitle />
    <div class="sidebar__content">
      <SearchBar />
      <FilterCard filterType="type" />
      <FilterCard filterType="weakness" />
    </div>
  </nav>
</template>

<script>
import SidebarTitle from "./SidebarTitle.vue";
import SearchBar from "./SearchBar.vue";
import FilterCard from "./FilterCard.vue";
export default {
  name: "Sidebar",
  components: { SidebarTitle, SearchBar, FilterCard }
};
</script>

<style lang="scss">
.sidebar {
  min-height: 100vh;
  width: 380px;
  background: $white;
  -webkit-box-shadow: 2px 0px 12px -1px rgba(99, 99, 99, 0.75);
  -moz-box-shadow: 2px 0px 12px -1px rgba(99, 99, 99, 0.75);
  box-shadow: 2px 0px 12px -1px rgba(99, 99, 99, 0.75);
  transform: translateX(-100%);
  animation: 0.5s ease-in-out 1 0s slideInSidebar;
  animation-fill-mode: forwards;

  @keyframes slideInSidebar {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 768px) {
    position: relative;
    z-index: 1;
    max-height: 240px;
    grid-row: span -1;
    padding: 15px 0px;
  }

  &__content {
    padding: 27px 15px;
    display: flex;
    flex-direction: column;
    & > * {
      margin-top: 15px;
    }
  }
}
</style>
