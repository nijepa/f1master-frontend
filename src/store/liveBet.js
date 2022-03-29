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
    //const dataType = typeof state.liveBet[bet.type];
    // if (dataType === "string") {
    state.liveBet[bet.type] = bet.value;
    // } else {
    //   console.log(77, {...bet.value[0]})
    //   const res = state.liveBet[bet.type].findIndex(b => b.idx === bet.value[0].idx)
    //   let dd = {}

    //   if (res >= -1) {
    //     dd = {...bet.value[0]}
    //     state.liveBet[bet.type][res] = dd
    //   } else {
    //     state.liveBet[bet.type].push({...bet.value[0]})
    //   }
    //   console.log( dd)
    //       state.liveBet[bet.type] = [
    //         ...state.liveBet[bet.type].map((item) =>{
    //         console.log(55, {...bet.value[0]})
    //           if (item.idx !== bet.value[0].idx) {

    //             item
    //            } else {
    // console.log(8, {...bet.value[0]});
    //                  item = {...bet.value[0]}
    //            }
    //             }),
    //       ];
    //    }
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async liveBetSet({ commit }, bet) {
    commit("setLiveBet", bet);
  },

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
