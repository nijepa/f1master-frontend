import axios from "axios";
import router from "../router";
const URL = process.env.VUE_APP_BACKEND_URL_LOCAL;

const state = {
  f1result: {},
  f1results: [],
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getf1results: (state) => state.f1results,

  getf1resultEvent: (state) => (eventId) => {
    return state.f1results.data?.filter((b) => b.event.id === eventId);
  },

  getBetsEventUser: (state) => (eventUser) => {
    return state.bets.data.find(
      (b) => b.user.id === eventUser.user && b.event.id === eventUser.event
    );
  },

  getf1result: (state) => state.f1result,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setf1results: (state, f1results) => (state.f1results = f1results),

  setf1result: (state, f1result) => (state.f1result = f1result),

  clearf1result(state) {
    state.f1result = {};
  },

  addf1result(state, resultsData) {
    state.f1results.data = [resultsData, ...state.f1results.data];
  },

  updatef1result(state, result) {
    state.f1results.data = [
      ...state.f1results.data.map((item) =>
        item.id !== result.id
          ? item
          : {
              ...item,
              ...result,
            }
      ),
    ];
  },

  deletef1result(state, id) {
    state.f1results = [...state.f1results.filter((item) => item.id !== id)];
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  fetchf1results({ commit }) {
    axios
      .get(URL + "results/")
      .then((response) => {
        commit("setf1results", response);
      })
      .catch((error) => {
        commit("setErrors", error);
      });
  },

  async fetchf1result({ commit }, resultData) {
    const response = await axios.get(URL + "results/" + resultData, resultData);
    commit("setf1result", response.data);
    // const res = bets.find(
    //   (b) => b.User.id === betData.User.id && b.Event.id === betData.Event.id
    // );
    // commit("setBet", res);
    //console.log(betData);
  },

  async f1resultAdd({ commit }, resultData) {
    await axios
      .post(URL + "results/", resultData)
      .then((response) => {
        commit("addf1result", response.data);
        //router.push("/fantasy");
      })
      .catch((error) => {
        commit("setErrors", error, { root: true });
      });
  },

  async f1resultUpdate({ commit }, resultData) {
    await axios
      .put(URL + "results/" + resultData.id, resultData)
      .then((response) => {
        commit("updatef1result", response.data);
        //router.push("/fantasy");
      })
      .catch((error) => {
        commit("setErrors", error, { root: true });
      });
  },

  async f1resultDelete({ commit }, resultData) {
    await axios
      .delete(URL + "results/" + resultData.id, resultData)
      .then((response) => {
        commit("deletef1result", response.data.id);
      })
      .catch((error) => {
        commit("setErrors", error, { root: true });
      });
  },

  async f1resultClear({ commit }) {
    commit("clearf1result");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
