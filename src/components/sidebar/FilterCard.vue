<template>
  <PKCard>
    <template #banner>
      <PKHeading :level="4"> Filter by {{ filterType }} </PKHeading>
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
import PKHeading from "../common/PKHeading.vue";
import FilterList from "./FilterList.vue";
export default {
  name: "FilterCard",
  components: { PKButton, PKCard, PKHeading, FilterList },
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
