<template>
  <div class="fantasy">
    <h1>Fantasy</h1>

    <div class="">
      <h3>User</h3>
      <h2>{{ bets[0].user.email }}</h2>
    </div>

    <div v-for="bet in bets" :key="bet.id" class="fantasy-wrapper">
      <div class="">
        <h3>Created</h3>
        <h4>{{ bet.createdAt.slice(0, 10) }}</h4>
      </div>
      <div class="">
        <h3>Event</h3>
        <h4>{{ bet.event.name }}</h4>
      </div>
      <div class="fantasy-single">
        <div class="">
          <h3>Pole Time</h3>
          <span>{{ bet.pole }}</span>
        </div>
        <div class="">
          <h3>Misc</h3>
          <span>{{ bet.misc[0].val }}</span>
        </div>
      </div>
      <div class="fantasy-list">
        <div class="">
          <h3>F1 Masters</h3>
          <li v-for="(be, i) in bet.masters" :key="i">
            <span>{{ be.idx + 1 }}</span> -
            <span>{{ be.val }}</span>
          </li>
        </div>
        <div class="">
          <h3>Evo</h3>
          <li v-for="(be, i) in bet.evo" :key="i">
            <span>{{ be.idx + 1 }}</span> -
            <span>{{ be.val }}</span>
          </li>
        </div>
        <div class="">
          <h3>Head 2 Head</h3>
          <ul>
            <li v-for="(be, i) in bet.head" :key="i" class="fantasy-head">
              <span>{{ be.team }} </span> - <span>{{ be.val }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import useCurrentUser from "@/composables/useCurrentUser";

export default {
  setup() {
    const currentUser = useCurrentUser();
    const store = useStore();
    store.dispatch("fetchBets");
    const betsData = computed(() =>
      store.getters.getBetsUser(currentUser.value.id)
    );

    const drivers = computed(() => store.getters.getF1datas("drivers"));
    const bets = betsData.value;
    bets.forEach((bet) => {
      const teams = bet.head.map((b) => {
        let dr = drivers.value.find((d) => d.name === b.val);
        if (dr?.id) b.team = dr.team;
        else b.team = "";
        return b;
      });
      bet.head = teams;
    });

    console.log(bets);
    return { bets };
  },
};
</script>

<style lang="scss" scoped>
.fantasy {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;
  font-family: $font-main;
  color: $haas;
  h1 {
    text-transform: uppercase;
    color: $mercedes;
    margin: 1em;
  }
  h2 {
    color: $mercedes;
  }
  h3 {
    color: $haas;
  }
  h4 {
    color: $alpine;
  }
  span {
    color: white;
  }

  .fantasy-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    .fantasy-list,
    .fantasy-single {
      display: flex;
      flex-wrap: wrap;
      column-gap: 3em;
      text-align: left;
      list-style: none;

      h3 {
        text-align: center;
      }

      .fantasy-head {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        list-style: none;
        column-gap: 1em;
      }
    }
  }
}
</style>
