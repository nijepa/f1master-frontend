const state = {
  errors: [],
};

const getters = {
  getErrors: (state) => state.errors,
};

const mutations = {
  setErrors(state, errors) {
    state.errors = errors;
  },
};

const actions = {
  clearErrors({ commit }) {
    commit("setErrors", []);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
