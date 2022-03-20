import driversd from "@/data/drivers";
import teamsd from "@/data/teams";
import eventsd from "@/data/events";
import axios from "axios";

const datas = {
  drivers: driversd,
  teams: teamsd,
  events: eventsd,
};

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
        item._id !== f1data.value._id
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
      ...state.f1datas[id.type].filter((item) => item._id !== id.value),
    ];
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  fetchF1datas({ commit }, type) {
    // axios
    //   .get(URL)
    //   .then((response) => {
    //     commit("setF1datas", response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // if (error.response) {
    //     //   commit("setErrors", error.response.data.error);
    //     // } else {
    //     //   commit("setErrors", error);
    //     // }
    //   });

    commit("setF1datas", { type: type, value: datas[type] });
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
      .post(URL + "api/v1/langs", f1dataData)
      .then((response) => {
        commit("addF1data", response.data);
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
    // await axios
    //   .put(URL + "api/v1/langs/" + f1dataData._id, f1dataData)
    //   .then((response) => {
    //     commit("updateF1data", response.data);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       commit("setErrors", error.response.data.error);
    //     } else {
    //       commit("setErrors", error);
    //     }
    //   });
    commit("updateF1data", f1dataData);
  },

  async f1dataDelete({ commit }, f1dataData) {
    await axios
      .delete(URL + "api/v1/langs/" + f1dataData._id, f1dataData)
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
