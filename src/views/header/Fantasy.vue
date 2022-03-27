<template>
  <div class="fantasy">
    <h1>Fantasy</h1>

    <div class="">
      <h3>User</h3>
      <h2>{{ bets.user.email }}</h2>
    </div>
    <div class="">
      <h3>Created</h3>
      <h4>{{ bets.createdAt.slice(0, 10) }}</h4>
    </div>
    <div class="">
      <h3>Event</h3>
      <h4>{{ bets.event.name }}</h4>
    </div>
    <div class="fantasy-single">
      <div class="">
        <h3>Pole Time</h3>
        <span>{{ bets.pole }}</span>
      </div>
      <div class="">
        <h3>Misc</h3>
        <span>{{ bets.misc[0].val }}</span>
      </div>
    </div>
    <div class="fantasy-list">
      <div class="">
        <h3>F1 Masters</h3>
        <li v-for="(bet, i) in bets.masters" :key="i">
          <span>{{ bet.idx + 1 }}</span> -
          <span>{{ bet.val }}</span>
        </li>
      </div>
      <div class="">
        <h3>Evo</h3>
        <li v-for="(bet, i) in bets.evo" :key="i">
          <span>{{ bet.idx + 1 }}</span> -
          <span>{{ bet.val }}</span>
        </li>
      </div>
      <div class="">
        <h3>Head 2 Head</h3>
        <ul>
          <li v-for="(bet, i) in bets.head" :key="i" class="fantasy-head">
            <span>{{ bet.team }} </span> - <span>{{ bet.val }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchBet", 1);
    const betsData = computed(() => store.getters.getBet);
    const drivers = computed(() => store.getters.getF1datas("drivers"));
    const bets = betsData.value;
    const teams = bets.head.map((b) => {
      let dr = drivers.value.find((d) => d.name === b.val);
      b.team = dr.team;
      return b;
    });
    bets.head = teams;

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

  .fantasy-list,
  .fantasy-single {
    display: flex;
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
</style>
