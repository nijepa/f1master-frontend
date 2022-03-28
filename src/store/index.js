import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import liveBet from "./liveBet";
import results from "./results";
import bets from "./bets";
import f1data from "./f1data";
import auth from "./auth";
import global from "./global";

export default createStore({
  modules: {
    liveBet,
    bets,
    f1data,
    results,
    auth,
    global,
  },
  plugins: [createPersistedState()],
});
