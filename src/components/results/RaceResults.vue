/* eslint-disable */
<template>
  <div id="wrap">
    <div class="cont">
      <h2>Race</h2>
      <h5>Top 20 Results</h5>
      <div v-for="(item, i) in items.length" :key="i">
        <sel-comp
          :items="getItems"
          :idx="i"
          :reseted="reseted"
          @select="getSelected"
          @cleared="reseted = false"
        >
        </sel-comp>
      </div>
    </div>
    <!-- <p>{{ selected }}</p> -->
    <div class="btn">
      <button class="reset" @click="reset">Reset</button><br />
      <button class="confirm" @click="confirm">Confirm</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import selComp from "./RaceSelectComponent.vue";
import drivers from "../../data/drivers.js";
export default {
  components: { selComp },
  setup() {
    const raceResults = drivers.map(
      (driver) => `${driver.name}#${driver.number}`
    );
    const items = ref(raceResults);
    const getItems = computed(() => {
      return items.value.filter((i) => {
        return !selected.value.some((sel) => sel.val === i);
      });
    });
    const totalPredictSupported = ref[10];

    const selected = ref([]);
    const disable = ref(true);
    const getSelected = (val) => {
      const sels = selected.value.filter((s) => s.id === val.id);
      if (!sels.length && sels[0]?.id !== val.id && sels[0]?.val !== val.val) {
        selected.value.push(val);
      } else {
        if (sels[0].id === val.id && sels[0].val !== val.val) {
          selected.value[val.id].val = val.val;
          disable.value.true;
        }
      }
    };
    const reseted = ref(false);
    const reset = () => {
      selected.value = [];
      reseted.value = true;
    };
    return {
      items,
      disable,
      selected,
      totalPredictSupported,
      getSelected,
      getItems,
      reset,
      reseted,
    };
  },
};
</script>
<style scoped>
.cont {
  display: grid;
  justify-content: left;
  align-content: center;
}
h2 {
  display: grid-inline;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  background: rgb(0, 0, 0);
  text-shadow: 2px 0px 0px white;
}
h5 {
  display: inline;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
  border-radius: 2px;
  text-shadow: 2px 1px 1px black;
  background: #fdd800;
  padding: 4px;
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
  box-shadow: 5px 5px 12px rgb(0 0 0 / 15%);
  border: 1px solid transparent;
  transition: all 0.4s ease;
  text-transform: uppercase;
}
.reset {
  background: #070707;
  color: #ddd;
  border: solid 1px #050505;
}
.confirm {
  background: #fdd800;
  color: black;
}
button:hover {
  background-color: linear-gradient(#ffef93, #e8c500);
  letter-spacing: 1px;
}
</style>
