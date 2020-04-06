import Vue from "vue";
import Vuex from "vuex";
import Fuse from "fuse.js";

Vue.use(Vuex);

export const defaultState = {
  masterPokedex: [],
  activePokedex: [],
  typeFilters: [],
  weaknessFilters: [],
  nameFilter: ""
};

export const mutations = {
  setMasterPokedex(state, payload = []) {
    return (state.masterPokedex = [...payload]);
  },
  setActivePokedex(state, payload = []) {
    return (state.activePokedex = [...payload]);
  },
  setTypeFilters(state, payload = []) {
    return (state.typeFilters = [...payload]);
  },
  setWeaknessFilters(state, payload = []) {
    return (state.weaknessFilters = [...payload]);
  },
  setNameFilter(state, payload = "") {
    return (state.nameFilter = payload);
  },
  clearTypeFilters(state) {
    state.typeFilters = [];
  },
  clearWeaknessFilters(state) {
    state.weaknessFilters = [];
  },
  clearNameFilter(state) {
    state.nameFilter = "";
  }
};

export const actions = {
  searchPokedex({ commit, state }, query = "") {
    if (!query) {
      return commit("setActivePokedex", state.masterPokedex);
    }

    const fuse = new Fuse(masterPokedex, {
      shouldSort: true,
      threshold: 0,
      location: 0,
      distance: 0,
      minMatchCharLength: 3,
      keys: ["name"]
    });

    if (query.length > 2) {
      const results = fuse.search(query);
      return commit(
        "setActivePokedex",
        results.map(result => result.item)
      );
    }

    return undefined;
  },
  filterPokedex({ commit, state }, { filterType = "", pokemonType = "" }) {
    const activeFilterList = {
      type: state.typeFilters,
      weakness: state.weaknessFilters
    }[filterType];

    const mutationToCommit = {
      type: "setTypeFilters",
      weakness: "setWeaknessFilters"
    }[filterType];

    if (!activeFilterList.length) {
      return commit(mutationToCommit, [pokemonType]);
    }

    if (activeFilterList.length === 1 && activeFilterList[0] === pokemonType) {
      return filterType === "type"
        ? commit("clearTypeFilters")
        : commit("clearWeaknessFilters");
    }

    if (activeFilterList.includes(pokemonType)) {
      return commit(mutationToCommit, [
        ...activeFilterList.filter(type => type !== pokemonType)
      ]);
    }

    return commit(mutationToCommit, [...activeFilterList, pokemonType]);
  }
};

export const getters = {
  filteredPokedex: state => {
    return state.activePokedex.filter(pokemon => {
      return (
        (!state.typeFilters.length ||
          state.typeFilters.every(type => pokemon.type.includes(type))) &&
        (!state.weaknessFilters.length ||
          state.weaknessFilters.every(weakness =>
            pokemon.weaknesses.includes(weakness)
          ))
      );
    });
  }
};

export default new Vuex.Store({
  state: { ...defaultState },
  mutations,
  actions
});
