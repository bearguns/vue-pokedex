<template>
  <PKCard>
    <template #banner>
      <h2>Filter by {{ filterType }}</h2>
    </template>
    <template #content>
      <FilterList :filterType="filterType" />
    </template>
    <template #actions>
      <PKButton :block="true" @clicked="handleButtonClick">
	<template #label>Clear Filters</template>
      </PKButton>
    </template>
  </PKCard>
</template>

<script>
import { mapMutations } from "vuex";
import PKButton from "../common/PKButton.vue";
import PKCard from "../common/PKCard.vue";
import FilterList from "./FilterList.vue";
export default {
  name: "FilterCard",
  components: { PKButton, PKCard, FilterList },
  props: {
    filterType: String
  },
  methods: {
    ...mapMutations(["clearTypeFilters", "clearWeaknessFilters"]),
    handleButtonClick() {
      console.log("handling click");
      return this.filterType === "type"
	? this.clearTypeFilters()
	: this.clearWeaknessFilters();
    }
  }
};
</script>
