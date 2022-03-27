const state = {
  liveBet: {
    createdAt: "",
    user: "",
    event: [],
    pole: "",
    masters: [],
    evo: [],
    head: [],
    misc: [],
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
      user: "",
      event: [],
      pole: "",
      masters: [],
      evo: [],
      head: [],
      misc: [],
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
