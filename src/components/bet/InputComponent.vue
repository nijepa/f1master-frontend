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

<style lang="scss" scoped>
.card {
  margin: 0.2rem;
  /* background:linear-gradient(darkred,red); */
  font-size: 0.8rem;
  border: solid 2px black;

  input {
    font-family: "Play", cursive;
    font-size: 0.8rem;
    border-radius: 4px;
    border: solid 2px transparent;
    cursor: pointer;
    background: $ferrari;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 0.5em;
  }
}
</style>
