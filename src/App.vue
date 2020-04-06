<template>
  <div id="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
export default {
  name: "App",
  components: { Sidebar },
  created() {
    this.$store.dispatch("fetchPokedex");
  }
};
</script>

<style lang="scss">
html {
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    padding: 0px;
    margin: 0 auto;
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;

  @media screen and (max-width: 812px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
