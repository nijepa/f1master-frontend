<template>
  <div class="results">
    <h1>results</h1>
    <div class="">
      <div class="results-group">
        <SelectWrapper
          :title="'Event'"
          :data-name="'event'"
          :count="1"
          :list="events"
          :group="'Event'"
          :reset-all="resetAll"
          class="misc"
        />
      </div>
    </div>
    <div class="results-wrapper">
      <div class="results-group">
        <Poletime title="Poletime" data-name="poletime" :reset-all="resetAll" />
      </div>
      <div class="results-group">
        <SelectWrapper
          :title="'Starting Grid'"
          :data-name="'qualifying'"
          :count="20"
          :list="drivers"
          :group="'Position'"
          :reset-all="resetAll"
          class="misc"
        />
      </div>
      <div class="results-group">
        <SelectWrapper
          :title="'Race Results'"
          :data-name="'race'"
          :count="20"
          :list="drivers"
          :group="'Position'"
          :reset-all="resetAll"
          class="misc"
        />
      </div>
      <div class="results-group">
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
    </div>
    <ConfirmGroup @reseted="reset" @confirmed="handleConfirmation" />
    <!-- <div class="btn-wrapper">
      <button class="btn reset" @click="reset">Reset All</button>
      <button class="btn confirm" @click="handleConfirmation">Confirm</button>
    </div> -->
  </div>
  <p>{{ results }}</p>
</template>

<script>
//import InputComp from "@/components/bet/InputComponent.vue";
import SelectWrapper from "@/components/bet/SelectWrapper.vue";
import Poletime from "@/components/bet/PoletimeBet.vue";
import ConfirmGroup from "@/components/admin/ConfirmGroup.vue";
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "Results",
  components: {
    //InputComp,
    SelectWrapper,
    Poletime,
    ConfirmGroup,
  },

  setup() {
    const store = useStore();
    store.dispatch("fetchF1datas", "drivers");
    store.dispatch("fetchF1datas", "events");
    const drivers = computed(() => store.getters.getF1datas("drivers"));
    const events = computed(() => store.getters.getF1datas("events"));

    const results = computed(() => store.getters.getResults);

    const misc = ref([
      { id: 0, name: "YES" },
      { id: 1, name: "NO" },
    ]);

    const selected = ref("");
    const getSelected = (val) => {
      selected.value = val;
    };

    const reseted = ref(false);
    const resetAll = ref(false);
    const reset = () => {
      resetAll.value = true;
      store.dispatch("resultsClear");
      setTimeout(() => (resetAll.value = false), 0);
    };

    const handleConfirmation = () => {
      if (
        results.value !== undefined &&
        results.value.pole &&
        results.value.qualifying.length &&
        results.value.race.length &&
        results.value.Misc.length
      ) {
        // NOTE find lest event before current date
        // store.dispatch("liveBetUpdate", {
        //   type: "Event",
        //   value: { id: currentRace.value.id, name: currentRace.value.name },
        // });
        // NOTE get/set logged in user
        store.dispatch("resultsUpdate", {
          type: "User",
          value: { id: 0, email: "rayannezinha@f1master.com" },
        });
        // TODO load existing bets for logged in user and add/update new one
        store.dispatch("resultsUpdate", {
          type: "createdAt",
          value: new Date(),
        });

        store.dispatch("fetchBets");
        store.dispatch("fetchBet", results.value);
        const bet = computed(() => store.getters.getBet);
        results.value._id = bet.value._id;
        store.dispatch("betUpdate", results.value);
        const bets = computed(() => store.getters.getBets);
        console.log("muuu", bets.value);
        alert("OK - " + JSON.stringify(results.value));
        return;
      }
      alert("NOT");
    };

    return {
      drivers,
      events,
      misc,
      reseted,
      getSelected,
      reset,
      resetAll,
      handleConfirmation,
      results,
    };
  },
};
</script>

<style lang="scss" scoped>
.results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0;

  h1 {
    text-transform: uppercase;
    color: $mercedes;
    margin: 1em;
  }

  .results-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 1em;

    .results-group {
      margin-bottom: 1em;

      h3 {
        //font-variant: small-caps;
        font-size: 16px;
        color: rgb(221, 221, 221);
      }
    }
  }
}
</style>
