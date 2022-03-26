import axios from "axios";
const URL = process.env.VUE_APP_BACKEND_URL_LOCAL;

const state = {
  f1data: { driver: {}, team: {}, event: {} },
  f1datas: { drivers: [], teams: [], events: [] },
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getF1datas: (state) => (type) => state.f1datas[type],

  getF1data: (state) => (type) => state.f1data[type],
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setF1datas: (state, f1datas) => (state.f1datas[f1datas.type] = f1datas.value),

  setF1data: (state, f1data) => (state.f1data[f1data.type] = f1data.value),

  clearF1data(state) {
    state.f1data = {};
  },

  addF1data(state, text) {
    state.f1datas[text.type] = [text.value, ...state.f1datas[text.type]];
  },

  updateF1data(state, f1data) {
    state.f1datas[f1data.type] = [
      ...state.f1datas[f1data.type].map((item) =>
        item.id !== f1data.value.id
          ? item
          : {
              ...item,
              ...f1data.value,
            }
      ),
    ];
  },

  deleteF1data(state, id) {
    state.f1datas[id.type] = [
      ...state.f1datas[id.type].filter((item) => item.id !== id.value),
    ];
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  fetchF1datas({ commit }, type) {
    axios
      .get(URL + type + "/")
      .then((response) => {
        commit("setF1datas", { type: type, value: response.data });
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async fetchF1data({ commit }, f1dataData) {
    // const response = await axios.get(
    //   URL + "api/v1/langs/" + f1dataData._id,
    //   f1dataData
    // );
    // commit("setF1data", response.data);
    const res = f1datas.find(
      (b) =>
        b.User.id === f1dataData.User.id && b.Event.id === f1dataData.Event.id
    );
    commit("setF1data", res);
    //console.log(f1dataData);
  },

  async f1dataAdd({ commit }, f1dataData) {
    await axios
      .post(URL + f1dataData.type, f1dataData.value)
      .then((response) => {
        const res = { type: f1dataData.type, value: response.data };
        commit("addF1data", res);
        //router.push("/dashboard")
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async f1dataUpdate({ commit }, f1dataData) {
    await axios
      .put(URL + f1dataData.type + "/" + f1dataData.value.id, f1dataData.value)
      .then((response) => {
        const res = { type: f1dataData.type, value: response.data };
        commit("updateF1data", res);
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async f1dataDelete({ commit }, f1dataData) {
    await axios
      .delete(URL + f1dataData.type + "/" + f1dataData.value, f1dataData.value)
      .then((response) => {
        commit("deleteF1data", response.data._id);
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async f1dataClear({ commit }) {
    commit("clearF1data");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
