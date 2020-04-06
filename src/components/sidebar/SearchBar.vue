<template>
<div class="search">
  <form action="" name="search">
    <input name="query" type="text" v-model="query" @input="searchPokedex" class="search__input" placeholder="search pokemon by name"/>
  </form>
</div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    searchPokedex() {
      return this.$store.dispatch("searchPokedex", this.query);
    }
  }
}
</script>

<style lang="scss">
.search {
    width: 100%;
    padding: 0px;

    &__input {
	width: 100%;
	border-radius: 25px;
	border: 1px solid $light-gray;
	height: 2rem;
	padding-left: 12px;
	background: $light-gray;
    }
}
</style>
