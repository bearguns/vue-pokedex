<template>
  <PKView>
    <Pokedex />
  </PKView>
</template>

<script>
import PKView from "../components/common/View.vue";
import Pokedex from "../components/pokedex/Pokedex.vue";
export default {
  name: "PokedexView",
  components: { Pokedex, PKView }
};
</script>
