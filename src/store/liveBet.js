const state = {
  liveBet: {
    createdAt: "",
    User: "",
    Event: "",
    Pole: "",
    F1Masters: [],
    Evo: [],
    Head: [],
    Misc: "",
  },
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getliveBet: (state) => state.liveBet,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setLiveBet: (state, bet) => (state.liveBet = bet),

  clearLiveBet(state) {
    state.liveBet = {
      createdAt: "",
      User: "",
      Event: "",
      Pole: "",
      F1Masters: [],
      Evo: [],
      Head: [],
      Misc: "",
    };
  },

  updateLiveBet(state, bet) {
    state.liveBet[bet.type] = bet.value;
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async liveBetUpdate({ commit }, bet) {
    commit("updateLiveBet", bet);
  },

  async liveBetClear({ commit }) {
    commit("clearLiveBet");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
