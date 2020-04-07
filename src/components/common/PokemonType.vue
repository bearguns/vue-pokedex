<template>
  <font-awesome-icon
    :icon="icon"
    :class="['pokemon-type', color, active ? 'pokemon-type--active' : '']"
    @click="handleClick"
    :style="{ cursor: toggle ? 'pointer' : 'none' }"
  ></font-awesome-icon>
</template>

<script>
import { POKEMON_TYPES } from "../../POKEMON_TYPES.js";
export default {
  name: "PokemonType",
  props: {
    pokemonType: {
      type: String,
      required: true
    },
    toggle: {
      type: Boolean,
      required: false,
      default: false
    },
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    handleClick() {
      return this.$emit("clickedType");
    }
  },
  computed: {
    color() {
      return `text-is-color--${this.pokemonType.toLowerCase()}`;
    },
    icon() {
      switch (this.pokemonType) {
	case POKEMON_TYPES.bug:
	  return ["fad", "bug"];
	case POKEMON_TYPES.dragon:
	  return ["fad", "dragon"];
	case POKEMON_TYPES.electric:
	  return ["fad", "bolt"];
	case POKEMON_TYPES.fighting:
	  return ["fad", "fist-raised"];
	case POKEMON_TYPES.fire:
	  return ["fad", "fire-alt"];
	case POKEMON_TYPES.flying:
	  return ["fad", "feather-alt"];
	case POKEMON_TYPES.grass:
	  return ["fad", "leaf"];
	case POKEMON_TYPES.ghost:
	  return ["fad", "ghost"];
	case POKEMON_TYPES.ground:
	  return ["fad", "shovel"];
	case POKEMON_TYPES.ice:
	  return ["fad", "icicles"];
	case POKEMON_TYPES.normal:
	  return ["fad", "sun"];
	case POKEMON_TYPES.poison:
	  return ["fad", "flask-poison"];
	case POKEMON_TYPES.psychic:
	  return ["fad", "head-side-brain"];
	case POKEMON_TYPES.rock:
	  return ["fad", "mountain"];
	case POKEMON_TYPES.water:
	  return ["fad", "water"];
	default:
	  return ["fad", "circle"];
      }
    }
  }
};
</script>

<style lang="scss">
.pokemon-type {
  font-size: 2.5rem;
  margin: 8px;
  opacity: 0.5;
  transition: opacity 0.15s linear;

  &--active {
    opacity: 1;
  }
}
</style>
