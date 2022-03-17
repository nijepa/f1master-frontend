<template>
  <div class="card">
    <input
      v-model="selected"
      v-maska="mask"
      :disable="false"
      placeholder="0'00'000"
      @change="setSelected($event)"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    reseted: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const mask = "#'##'###";
    const selected = ref(null);
    const setSelected = (e) => {
      emit("select", e.target.value);
    };

    watch(
      () => props.reseted,
      () => {
        selected.value = "";
        emit("cleared");
      }
    );

    return { selected, setSelected, mask };
  },
};
</script>

<style scoped>
.card {
  margin: 0.2rem;
  width: 150px;
  height: 25px;

  /* background:linear-gradient(darkred,red); */
  font-size: 0.8rem;
  border: solid 2px black;
}
.card input {
  font-family: "Play", cursive;
  font-size: 0.8rem;
  width: 140px;
  height: 25px;
  border-radius: 4px;
  border: solid 2px black;
  cursor: pointer;
  background: darkred;
  color: white;
  font-weight: bold;
  text-align: center;
  /* border: 2px solid #a074c4; */
}
.optDisable {
  background: #101010;
  font-weight: bold;
  color: #ccc;
}
option {
  background: #070707;
  font-weight: bold;
  color: #ccc;
}
</style>
