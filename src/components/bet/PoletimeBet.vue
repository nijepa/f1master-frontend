<template>
  <div id="demo">
    <div class="cont">
      <h1 v-if="title">{{ title }}</h1>
      <inputComp
        placeholder="0'00''000'''"
        class="input"
        :reseted="reseted"
        @select="getSelected"
        @cleared="reseted = false"
      />
    </div>
    <div class="btn-wrapper">
      <button class="btn reset" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import inputComp from "./InputComponent.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  components: { inputComp },
  props: {
    title: {
      type: String,
      default: "",
    },
    resetAll: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const store = useStore();

    const selected = ref("");
    const getSelected = (val) => {
      selected.value = val;
    };

    const reseted = ref(false);
    const reset = () => {
      selected.value = 0;
      reseted.value = true;
    };
    watch(
      () => props.resetAll,
      (first) => {
        first && reset();
      }
    );

    watch(
      () => selected.value,
      (currentValue) => {
        store.dispatch("liveBetUpdate", {
          type: "Pole",
          value: currentValue,
        });
      }
    );

    return { getSelected, reset, reseted };
  },
};
</script>

<style lang="scss" scoped></style>
