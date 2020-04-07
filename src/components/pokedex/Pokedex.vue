<template>
  <div class="pokedex">
    <PKCard v-for="pokemon in filteredPokedex" :key="pokemon.id">
      <template #banner
	><PKHeading :level="4"
	  >#{{ pokemon.num }} - {{ pokemon.name }}</PKHeading
	></template
      >
      <template #content>
	<img alt="" :src="pokemon.img" />
      </template>
    </PKCard>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PKCard from "../common/PKCard.vue";
import PKHeading from "../common/PKHeading.vue";
export default {
  name: "Pokedex",
  components: { PKCard, PKHeading },
  computed: {
    ...mapGetters(["filteredPokedex"])
  }
};
</script>

<style lang="scss">
.pokedex {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 15px;
  margin-bottom: 27px;
  opacity: 0;
  animation: 0.75s linear 1 0.5s fadeInPokedex;
  animation-fill-mode: forwards;

  @keyframes fadeInPokedex {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 814px) {
    grid-template-columns: 1fr;
  }
}
</style>
