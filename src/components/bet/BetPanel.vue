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
  <Toast class="msg" />
  <ConfirmGroup @reseted="reset" @confirmed="handleConfirmation" />
  <p>{{ liveBet }}</p>
</template>

<script>
import Poletime from "./PoletimeBet.vue";
import SelectWrapper from "./SelectWrapper.vue";
import ConfirmGroup from "@/components/admin/ConfirmGroup.vue";
import Toast from "../Toast.vue";
import drivers from "@/data/drivers";
import teams from "@/data/teams";
import useCurrentRace from "@/composables/useCurrentRace";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import useCurrentUser from "@/composables/useCurrentUser";

export default {
  components: { Poletime, SelectWrapper, ConfirmGroup, Toast },

  setup() {
    const store = useStore();

    const currentRace = useCurrentRace();
    const currentUser = useCurrentUser();

    store.dispatch("liveBetClear");

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

    // NOTE check if bet exists for same event and current user
    store.dispatch("fetchBets");
    const checkBets = computed(() =>
      store.getters.getBetsEventUser({
        user: currentUser.value.id,
        event: currentRace.value.id,
      })
    );
    if (checkBets.value.id !== null)
      store.dispatch("liveBetSet", checkBets.value);
    const liveBet = computed(() => store.getters.getliveBet);

    const handleConfirmation = () => {
      if (
        liveBet.value !== undefined &&
        liveBet.value.pole &&
        liveBet.value.masters.length &&
        liveBet.value.evo.length &&
        liveBet.value.head.length &&
        liveBet.value.misc.length
      ) {
        // NOTE set last event before current date to live bet
        store.dispatch("liveBetUpdate", {
          type: "event",
          value: { id: currentRace.value.id, name: currentRace.value.name },
        });
        // NOTE get/set logged in user
        store.dispatch("liveBetUpdate", {
          type: "user",
          value: { id: currentUser.value.id, email: currentUser.value.email },
        });
        // NOTE set date/time to live bet
        store.dispatch("liveBetUpdate", {
          type: "createdAt",
          value: new Date(),
        });
        // NOTE check if exists bet for same event
        // store.dispatch("fetchBets");
        // const bet = computed(() => store.getters.getBets);
        // const found = bet.value?.data.find(
        //   (b) =>
        //     b.event.id === liveBet.value.event.id &&
        //     b.user.id === liveBet.value.user.id
        // );
        // NOTE update existing or add new bet
        // if (found?.event.id) {
        //   liveBet.value.id = found.id;
        //   store.dispatch("betUpdate", liveBet.value);
        // } else {
        //   store.dispatch("betAdd", liveBet.value);
        // }

        if (checkBets.value?.event.id) {
          //liveBet.value.id = checkBets.value.id;
          store.dispatch("betUpdate", liveBet.value);
        } else {
          store.dispatch("betAdd", liveBet.value);
        }
        //const bets = computed(() => store.getters.getBets);
        // console.log("muuu", bets.value);
        alert("OK - " + JSON.stringify(liveBet.value));
        // TODO check if time is up for event befor saving
        store.dispatch("liveBetClear");
        store.dispatch("updateToast", {
          title: "Success !",
          message: "Your Bet is placed",
          colorVariant: "info",
          position: "center",
          duration: 0,
          buttonText: "ihaaa",
        });
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
