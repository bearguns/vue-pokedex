import { mutations, defaultState } from "../../../src/store/index.js";

describe("Store mutations", () => {
  const state = { ...defaultState };

  it("sets the master pokedex to a new array of pokemon", () => {
    const pokedex = [
      {
        id: 1,
        num: "001",
        name: "Bulbasaur",
        img: "http://www.serebii.net/pokemongo/pokemon/001.png",
        type: ["Grass", "Poison"],
        height: "0.71 m",
        weight: "6.9 kg",
        candy: "Bulbasaur Candy",
        candy_count: 25,
        egg: "2 km",
        spawn_chance: 0.69,
        avg_spawns: 69,
        spawn_time: "20:00",
        multipliers: [1.58],
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        next_evolution: [
          {
            num: "002",
            name: "Ivysaur"
          },
          {
            num: "003",
            name: "Venusaur"
          }
        ]
      }
    ];

    mutations.setMasterPokedex(state, pokedex);
    expect(state.masterPokedex.length).toBe(1);
  });

  it("sets the active pokedex to a new array of pokemon", () => {
    const pokedex = [
      {
        id: 1,
        num: "001",
        name: "Bulbasaur",
        img: "http://www.serebii.net/pokemongo/pokemon/001.png",
        type: ["Grass", "Poison"],
        height: "0.71 m",
        weight: "6.9 kg",
        candy: "Bulbasaur Candy",
        candy_count: 25,
        egg: "2 km",
        spawn_chance: 0.69,
        avg_spawns: 69,
        spawn_time: "20:00",
        multipliers: [1.58],
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        next_evolution: [
          {
            num: "002",
            name: "Ivysaur"
          },
          {
            num: "003",
            name: "Venusaur"
          }
        ]
      }
    ];

    mutations.setActivePokedex(state, pokedex);
    expect(state.activePokedex.length).toBe(1);
  });
});
