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
    <Toast class="msg" />
    <ConfirmGroup @reseted="reset" @confirmed="handleConfirmation" />
  </div>
  <p>{{ results }}</p>
</template>

<script>
import SelectWrapper from "@/components/bet/SelectWrapper.vue";
import Poletime from "@/components/bet/PoletimeBet.vue";
import ConfirmGroup from "@/components/admin/ConfirmGroup.vue";
import Toast from "../Toast.vue";
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";
import useCurrentUser from "@/composables/useCurrentUser";

export default {
  name: "Results",
  components: {
    SelectWrapper,
    Poletime,
    ConfirmGroup,
    Toast,
  },

  setup() {
    const store = useStore();
    store.dispatch("fetchF1datas", "drivers");
    store.dispatch("fetchF1datas", "events");
    const drivers = computed(() => store.getters.getF1datas("drivers"));
    const events = computed(() => store.getters.getF1datas("events"));

    const currentUser = useCurrentUser();

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
        results.value.poletime &&
        results.value.qualifying.length &&
        results.value.race.length &&
        results.value.misc.length
      ) {
        // NOTE get/set logged in user
        store.dispatch("resultsUpdate", {
          type: "user",
          value: { id: currentUser.value.id, email: currentUser.value.email },
        });
        // NOTE set current date
        store.dispatch("resultsUpdate", {
          type: "createdAt",
          value: new Date(),
        });

        store.dispatch("resultsUpdate", {
          type: "season",
          value: new Date().getFullYear(),
        });

        store.dispatch("fetchf1results");
        const checkResults = computed(() =>
          store.getters.getf1resultEvent({
            event: results.value?.event?.id,
          })
        );
        // NOTE check if there is results for selected event
        if (checkResults.value?.event?.id) {
          store.dispatch("f1resultUpdate", results.value);
        } else {
          store.dispatch("f1resultAdd", results.value);
        }

        alert("OK - " + JSON.stringify(results.value));
        store.dispatch("resultsClear");
        store.dispatch("updateToast", {
          title: "Success !",
          message: "Results are saved",
          colorVariant: "info",
          position: "center",
          duration: 0,
          buttonText: "ihaaa",
        });
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
