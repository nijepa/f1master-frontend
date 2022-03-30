const state = {
  errors: [],
  toastConfig: null,
};

const getters = {
  getErrors: (state) => state.errors,

  getToast: (state) => state.toastConfig,
};

const mutations = {
  setErrors(state, errors) {
    state.errors = errors;
  },

  setToast(state, config) {
    state.toastConfig = config;
  },
};

const actions = {
  clearErrors({ commit }) {
    commit("setErrors", []);
  },

  updateToast({ commit }, payload) {
    commit("setToast", payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
