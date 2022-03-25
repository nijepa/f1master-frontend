<template>
  <div class="results">
    <h1>results</h1>
    <div class="results-wrapper">
      <div class="results-group">
        <SelectWrapper
          :title="'Event'"
          :count="1"
          :list="events"
          :group="'Event'"
          :reset-all="resetAll"
          class="misc"
        />
      </div>
      <div class="results-group">
        <Poletime title="Poletime" :reset-all="resetAll" />
      </div>
      <div class="results-group">
        <SelectWrapper
          :title="'Starting Grid'"
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
          :count="1"
          :list="misc"
          :group="'Misc'"
          :reset-all="resetAll"
          class="misc"
        />
      </div>
    </div>
    <div class="btn-wrapper">
      <button class="btn reset" @click="reset">Reset All</button>
      <button class="btn confirm" @click="handleConfirmation">Confirm</button>
    </div>
  </div>
</template>

<script>
//import InputComp from "@/components/bet/InputComponent.vue";
import SelectWrapper from "@/components/bet/SelectWrapper.vue";
import Poletime from "@/components/bet/PoletimeBet.vue";
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "Results",
  components: {
    //InputComp,
    SelectWrapper,
    Poletime,
  },

  setup() {
    const store = useStore();
    store.dispatch("fetchF1datas", "drivers");
    store.dispatch("fetchF1datas", "events");
    const drivers = computed(() => store.getters.getF1datas("drivers"));
    const events = computed(() => store.getters.getF1datas("events"));

    const selected = ref("");
    const getSelected = (val) => {
      selected.value = val;
    };

    const reseted = ref(false);
    const resetAll = ref(false);
    const reset = () => {
      resetAll.value = true;
      //store.dispatch("liveBetClear");
      setTimeout(() => (resetAll.value = false), 0);
    };

    const misc = ref([
      { id: 0, name: "YES" },
      { id: 1, name: "NO" },
    ]);

    return { drivers, events, misc, reseted, getSelected, reset, resetAll };
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
