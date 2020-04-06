<template>
  <div class="filter">
    <slot></slot>
    <PokemonType
      v-for="(type, key) in pokemonTypes"
      :key="key"
      @clickedType="handleClick(type)"
      :pokemonType="type"
      :toggle="true"
    />
  </div>
</template>

<script>
import { POKEMON_TYPES } from "../../POKEMON_TYPES.js";
import PokemonType from "../common/PokemonType.vue";
export default {
  name: "FilterList",
  components: { PokemonType },
  data() {
    return {
      pokemonTypes: { ...POKEMON_TYPES }
    };
  },
  methods: {
    handleClick(type) {
      return this.$store.dispatch("filterPokedex", {
	filterType: "type",
	pokemonType: type
      });
    }
  }
};
</script>

<style lang="scss">
.filter {
  margin: 0 auto;
  margin-top: 27px;
  background: $light-gray;
  border-radius: 18px;
  height: 280px;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
