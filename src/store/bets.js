import axios from "axios";
import router from "../router";
const URL = process.env.VUE_APP_BACKEND_URL_LOCAL;

const state = {
  bet: {},
  bets: [],
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getBets: (state) => state.bets,

  getBet: (state) => state.bet,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setBets: (state, bets) => (state.bets = bets),

  setBet: (state, bet) => (state.bet = bet),

  clearBet(state) {
    state.bet = {};
  },

  addBet(state, betData) {
    state.bets.data = [betData, ...state.bets.data];
  },

  updateBet(state, bet) {
    state.bets.data = [
      ...state.bets.data.map((item) =>
        item.id !== bet.id
          ? item
          : {
              ...item,
              ...bet,
            }
      ),
    ];
  },

  deleteBet(state, id) {
    state.bets = [...state.bets.filter((item) => item.id !== id)];
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  fetchBets({ commit }) {
    axios
      .get(URL + "bets/")
      .then((response) => {
        commit("setBets", response);
      })
      .catch((error) => {
        commit("setErrors", error);
      });
  },

  async fetchBet({ commit }, betData) {
    const response = await axios.get(URL + "bets/" + betData, betData);
    commit("setBet", response.data);
    // const res = bets.find(
    //   (b) => b.User.id === betData.User.id && b.Event.id === betData.Event.id
    // );
    // commit("setBet", res);
    //console.log(betData);
  },

  async betAdd({ commit }, betData) {
    await axios
      .post(URL + "bets/", betData)
      .then((response) => {
        commit("addBet", response.data);
        router.push("/fantasy");
      })
      .catch((error) => {
        commit("setErrors", error, { root: true });
      });
  },

  async betUpdate({ commit }, betData) {
    await axios
      .put(URL + "bets/" + betData.id, betData)
      .then((response) => {
        commit("updateBet", response.data);
        router.push("/fantasy");
      })
      .catch((error) => {
        commit("setErrors", error, { root: true });
      });
  },

  async betDelete({ commit }, betData) {
    await axios
      .delete(URL + "bets/" + betData.id, betData)
      .then((response) => {
        commit("deleteBet", response.data.id);
      })
      .catch((error) => {
        commit("setErrors", error, { root: true });
      });
  },

  async betClear({ commit }) {
    commit("clearBet");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
