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
    <div class="btn-wrapper">
      <p>{{ liveBet }}</p>
      <button class="reset" @click="reset">Reset All</button>
      <button class="confirm" @click="handleConfirmation">Confirm</button>
    </div>
  </div>
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
          value: { id: currentRace.value.id, event: currentRace.value.event },
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
            return { id: m.id, name: m.name, number: m.number };
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
      handleConfirmation,
      reset,
      liveBet,
      misc,
      resetAll,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  justify-content: center;
  grid-template-areas: "poletime f1master evo h2h misc";
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(5, 150px);
  background: url("../../assets/images/steeringwheel3.png") top / contain no-repeat;
  width: 100vw;
  margin-top: 50px;
}
.container select {
  display: grid;
  border: 3px solid black;
  justify-content: center;
  background: darkred;
  color: #ddd;
  width: 100%;
  font-size: 0.85rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
}

h1 {
  display: grid;
  color: #ddd;
  text-shadow: 2px 0px 0px black;
  font-size: 1rem;
  font-weight: bold;
  /* background:rgba(0, 0, 0, 0.7); */
  justify-items: center;
  align-content: center;
  width: 100%;
}
.poletime {
  grid-area: poletime;
  background: rgba(0, 0, 0, 0.8);
  height: auto;
}
.f1master {
  grid-area: f1master;
  background: rgba(0, 0, 0, 0.8);
  height: auto;
}
.evo {
  grid-area: evo;
  background: rgba(0, 0, 0, 0.8);
  height: auto;
}
.h2h {
  grid-area: h2h;
  background: rgba(0, 0, 0, 0.8);
  height: auto;
}
.misc {
  grid-area: misc;
  background: rgba(0, 0, 0, 0.8);
  height: auto;
}
.btn {
  grid-area: confirm;
  background: rgba(0, 0, 0, 0.8);
  height: auto;
}
.confirm h2 {
  font-size: 10px;
}
.cont {
  display: grid;
  align-items: center;
  width: 150px;
  justify-items: center;
  background: rgba(0, 0, 0, 0.8);
}
.paragh {
  color: white;
  font-size: 1rem;
}
.btn-wrapper {
  grid-column: 1/6;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #ddd;
    margin-bottom: 1em;
  }
}
.btn {
  height: 70px;
  justify-items: center;
  align-items: end;
  display: grid;
}
button {
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 0.8em;
  font-weight: 700;
  width: 140px;
  height: 25px;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 4px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 15%);
  border: 1px solid transparent;
  transition: all 0.4s ease;
  text-transform: uppercase;
}
.confirm {
  background: #fdd800;
  color: black;
}
button:hover {
  background-color: linear-gradient(#ffef93, #e8c500);
  letter-spacing: 1px;
}
.btn {
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  align-items: baseline;
}
.reset {
  background: transparent;
  color: #ddd;
  margin-bottom: 1em;
}
</style>
