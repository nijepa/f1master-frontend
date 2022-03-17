import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import liveBet from "./liveBet";
import bets from "./bets";
//import auth from './auth';

export default createStore({
  modules: {
    liveBet,
    bets,
    //auth
  },
  plugins: [createPersistedState()],
});
