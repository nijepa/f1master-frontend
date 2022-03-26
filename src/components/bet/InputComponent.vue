<template>
  <div class="input-wrapper">
    <input
      v-model="selected"
      v-maska="mask"
      :disable="false"
      placeholder="0'00'000'''"
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
    const mask = "#'##'###'''";
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
.input-wrapper {
  border: solid 2px black;
  width: 100%;

  input {
    font-family: "Play", cursive;
    border-radius: 4px;
    border: solid 2px transparent;
    cursor: pointer;
    background: $ferrari;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 0.6em;

    &::placeholder {
      color: white;
      opacity: 0.7;
    }
  }
}
</style>
