import axios from "axios";

// var options = {
//   method: "GET",
//   url: "https://api-formula-1.p.rapidapi.com/teams",
//   params: { id: "1" },
//   headers: {
//     "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
//     "x-rapidapi-key": "e6683389cfmsh65875fe6424842ep1ffa84jsna2b85f5a9a4f",
//   },
// };

const state = {
  teams: [],
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getTeams: (state) => state.teams,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setTeams: (state, teams) => (state.teams = teams),
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async fetchTeams({ commit }) {
    await axios({
      method: "GET",
      url: "https://api-formula-1.p.rapidapi.com/teams",
      params: { id: "1" },
      headers: {
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        "x-rapidapi-key": "e6683389cfmsh65875fe6424842ep1ffa84jsna2b85f5a9a4f",
      },
    })
      .then((response) => {
        commit("setTeams", response);
      })
      .catch((error) => {
        console.log(error);
        // if (error.response) {
        //   commit("setErrors", error.response.data.error);
        // } else {
        //   commit("setErrors", error);
        // }
      });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
