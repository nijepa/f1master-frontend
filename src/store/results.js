const state = {
  results: {
    createdAt: null,
    user: null,
    season: null,
    event: [],
    poletime: null,
    qualifying: [],
    race: [],
    misc: [],
  },
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getResults: (state) => state.results,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setResults: (state, result) => (state.results = result),

  clearResults(state) {
    state.results = {
      createdAt: null,
      user: null,
      season: null,
      event: [],
      poletime: null,
      qualifying: [],
      race: [],
      misc: [],
    };
  },

  updateResults(state, result) {
    state.results[result.type] = result.value;
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async resultsUpdate({ commit }, result) {
    commit("updateResults", result);
  },

  async resultsClear({ commit }) {
    commit("clearResults");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
