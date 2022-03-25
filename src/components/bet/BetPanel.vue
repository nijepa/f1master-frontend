<template>
  <div class="container">
    <div class="poletime">
      <h1>Poletime</h1>
      <Poletime :reset-all="resetAll" />
    </div>
    <SelectWrapper
      :title="'F1Masters'"
      :count="10"
      :list="masters"
      :group="'Position'"
      :reset-all="resetAll"
      class="f1master"
      @confirmed="handleConfirmation"
    />
    <SelectWrapper
      :title="'Evo'"
      :count="5"
      :list="masters"
      :group="'Evo'"
      :reset-all="resetAll"
      class="evo"
    />
    <SelectWrapper
      :title="'Head'"
      :count="duels.length"
      :list="duels"
      :group="'Head'"
      :is-head="true"
      :reset-all="resetAll"
      class="head"
    />
    <SelectWrapper
      :title="'Misc'"
      :count="1"
      :list="misc"
      :group="'Misc'"
      :reset-all="resetAll"
      class="misc"
    />
  </div>
  <div class="btn-wrapper">
    <button class="btn reset" @click="reset">Reset All</button>
    <button class="btn confirm" @click="handleConfirmation">Confirm</button>
  </div>
  <p>{{ liveBet }}</p>
</template>

<script>
import Poletime from "./PoletimeBet.vue";
import SelectWrapper from "./SelectWrapper.vue";
import drivers from "@/data/drivers";
import teams from "@/data/teams";
import events from "@/data/events";
import { ref, computed, getCurrentInstance } from "vue";
import { useStore } from "vuex";

export default {
  components: { Poletime, SelectWrapper },

  setup() {
    const app = getCurrentInstance();
    const dayjs = app.appContext.config.globalProperties.$dayjs;

    const store = useStore();
    const liveBet = computed(() => store.getters.getliveBet);

    const currentRace = ref([]);
    const currEv = () => {
      const posibleEvents = events.filter((ev) => {
        return (
          dayjs(ev.start).format("YYYY-MM-DD") >
          dayjs(new Date()).format("YYYY-MM-DD")
        );
      });
      currentRace.value = posibleEvents.reduce((a, b) => {
        return new Date(a.start) > new Date(b.start) ? b : a;
      });
    };
    currEv();

    const handleConfirmation = () => {
      if (
        liveBet.value !== undefined &&
        liveBet.value.Pole &&
        liveBet.value.F1Masters.length &&
        liveBet.value.Evo.length &&
        liveBet.value.Head.length &&
        liveBet.value.Misc.length
      ) {
        // NOTE find lest event before current date
        store.dispatch("liveBetUpdate", {
          type: "Event",
          value: { id: currentRace.value.id, name: currentRace.value.name },
        });
        // NOTE get/set logged in user
        store.dispatch("liveBetUpdate", {
          type: "User",
          value: { id: 0, email: "rayannezinha@f1master.com" },
        });
        // TODO load existing bets for logged in user and add/update new one
        store.dispatch("liveBetUpdate", {
          type: "createdAt",
          value: new Date(),
        });

        store.dispatch("fetchBets");
        store.dispatch("fetchBet", liveBet.value);
        const bet = computed(() => store.getters.getBet);
        liveBet.value._id = bet.value._id;
        store.dispatch("betUpdate", liveBet.value);
        const bets = computed(() => store.getters.getBets);
        console.log("muuu", bets.value);
        alert("OK - " + JSON.stringify(liveBet.value));
        return;
      }
      alert("NOT");
    };

    const resetAll = ref(false);
    const reset = () => {
      resetAll.value = true;
      store.dispatch("liveBetClear");
      setTimeout(() => (resetAll.value = false), 0);
    };

    const masters = ref(
      drivers.map((driver) => {
        return { id: driver.id, name: driver.name, number: driver.number };
      })
    );

    const duels = ref([]);
    duels.value = teams
      .map((d) => {
        return drivers
          .filter((t) =>
            d.teamName.toLocaleLowerCase().includes(t.team.toLocaleLowerCase())
          )
          .map((m) => {
            return {
              id: m.id,
              name: m.name,
              number: m.number,
              team: d.teamName,
            };
          });
      })
      .filter((d) => d.length);

    const misc = ref([
      { id: 0, name: "YES" },
      { id: 1, name: "NO" },
    ]);

    return {
      masters,
      duels,
      misc,
      reset,
      resetAll,
      liveBet,
      handleConfirmation,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1em;
  background: url("../../assets/images/steeringwheel3.png") top / contain
    no-repeat;
  width: 100vw;
  margin-top: 50px;

  .poletime {
    background: rgba(0, 0, 0, 0.8);
    height: auto;

    h1 {
      color: #ddd;
      text-shadow: 2px 0px 0px black;
      font-size: 1rem;
      font-weight: bold;
      /* background:rgba(0, 0, 0, 0.7); */
      width: 100%;
    }
  }
}
</style>
