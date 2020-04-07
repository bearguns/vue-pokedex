<template>
  <div class="filter">
    <PokemonType
      v-for="(type, key) in pokemonTypes"
      :key="key"
      @clickedType="handleClick(type)"
      :pokemonType="type"
      :toggle="true"
      :active="filterList.includes(type)"
    />
  </div>
</template>

<script>
import { POKEMON_TYPES } from "../../POKEMON_TYPES.js";
import PokemonType from "../common/PokemonType.vue";
export default {
  name: "FilterList",
  components: { PokemonType },
  props: {
    filterType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pokemonTypes: { ...POKEMON_TYPES }
    };
  },
  computed: {
    filterList() {
      return this.filterType === "type"
	? this.$store.state.typeFilters
	: this.$store.state.weaknessFilters;
    }
  },
  methods: {
    handleClick(type) {
      return this.$store.dispatch("filterPokedex", {
	filterType: this.filterType,
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
  border-radius: 18px;
  height: 280px;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
