<template>
  <div class="results">
    <h1>results</h1>
    <div class="results-wrapper">
      <div class="results-group">
        <h3>event</h3>
        <SelectWrapper
          :count="1"
          :list="events"
          :group="'Event'"
          :reset-all="resetAll"
          :reset-btn="false"
          class="misc"
        />
      </div>
      <div class="results-group">
        <h3>pole time</h3>
        <inputComp
          placeholder="0'00''000'''"
          class="input"
          :reseted="reseted"
          @select="getSelected"
          @cleared="reseted = false"
        />
      </div>
      <div class="results-group">
        <h3>placement</h3>
        <SelectWrapper
          :count="10"
          :list="drivers"
          :group="'Position'"
          :reset-all="resetAll"
          :reset-btn="false"
          class="misc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputComp from "@/components/bet/InputComponent.vue";
import SelectWrapper from "@/components/bet/SelectWrapper.vue";
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "Results",
  components: {
    InputComp,
    SelectWrapper,
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

    return { drivers, events, reseted, getSelected, reset, resetAll };
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
        font-variant: small-caps;
        color: $grey;
      }
    }
  }
}
</style>
