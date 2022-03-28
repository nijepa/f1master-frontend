<template>
  <h1>{{ currentRace.name }}</h1>
  <div class="container">
    <div class="poletime">
      <Poletime title="Pole time" :reset-all="resetAll" />
    </div>
    <SelectWrapper
      :title="'F1Masters'"
      :data-name="'masters'"
      :count="10"
      :list="masters"
      :group="'Position'"
      :reset-all="resetAll"
      class="f1master"
      @confirmed="handleConfirmation"
    />
    <SelectWrapper
      :title="'Evo'"
      :data-name="'evo'"
      :count="5"
      :list="masters"
      :group="'Evo'"
      :reset-all="resetAll"
      class="evo"
    />
    <SelectWrapper
      :title="'Head'"
      :data-name="'head'"
      :count="duels.length"
      :list="duels"
      :group="'Head'"
      :is-head="true"
      :reset-all="resetAll"
      class="head"
    />
    <SelectWrapper
      :title="'Misc'"
      :data-name="'misc'"
      :count="1"
      :list="misc"
      :group="'Misc'"
      :reset-all="resetAll"
      class="misc"
    />
  </div>
  <ConfirmGroup @reseted="reset" @confirmed="handleConfirmation" />
  <!-- <div class="btn-wrapper">
    <button class="btn reset" @click="reset">Reset All</button>
    <button class="btn confirm" @click="handleConfirmation">Confirm</button>
  </div> -->
  <p>{{ liveBet }}</p>
</template>

<script>
import Poletime from "./PoletimeBet.vue";
import SelectWrapper from "./SelectWrapper.vue";
import ConfirmGroup from "@/components/admin/ConfirmGroup.vue";
import drivers from "@/data/drivers";
import teams from "@/data/teams";
import useCurrentRace from "@/composables/useCurrentRace";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import useCurrentUser from "@/composables/useCurrentUser";

export default {
  components: { Poletime, SelectWrapper, ConfirmGroup },

  setup() {
    const store = useStore();
    const liveBet = computed(() => store.getters.getliveBet);
    const currentRace = useCurrentRace();
    const currentUser = useCurrentUser();

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

    const handleConfirmation = () => {
      if (
        liveBet.value !== undefined &&
        liveBet.value.pole &&
        liveBet.value.masters.length &&
        liveBet.value.evo.length &&
        liveBet.value.head.length &&
        liveBet.value.misc.length
      ) {
        // NOTE add last event before current date
        store.dispatch("liveBetUpdate", {
          type: "event",
          value: { id: currentRace.value.id, name: currentRace.value.name },
        });
        // NOTE get/set logged in user
        store.dispatch("liveBetUpdate", {
          type: "user",
          value: { id: currentUser.value.id, email: currentUser.value.email },
        });
        // NOTE add date/time to live bet
        store.dispatch("liveBetUpdate", {
          type: "createdAt",
          value: new Date(),
        });
        // NOTE check if exists bet for same event
        store.dispatch("fetchBets");
        const bet = computed(() => store.getters.getBets);
        const found = bet.value?.data.find(
          (b) =>
            b.event.id === liveBet.value.event.id &&
            b.user.id === liveBet.value.user.id
        );
        // NOTE update existing or add new bet
        if (found?.event.id) {
          liveBet.value.id = found.id;
          store.dispatch("betUpdate", liveBet.value);
        } else {
          store.dispatch("betAdd", liveBet.value);
        }
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

    return {
      currentRace,
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
h1 {
  color: $yellow;
}
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
