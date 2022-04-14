<template>
  <div id="demo">
    <div class="list-wrapper">
      <h1 v-if="title">{{ $t(title) }}</h1>
      <inputComp
        placeholder="0'00''000'''"
        class="input"
        :reseted="reseted"
        @select="getSelected"
        @cleared="reseted = false"
      />
    </div>
    <div class="btn-wrapper">
      <button class="btn reset" @click="reset">{{ $t("Reset") }}</button>
    </div>
  </div>
</template>

<script>
import inputComp from "./InputComponent.vue";
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  components: { inputComp },
  props: {
    title: {
      type: String,
      default: "",
    },
    dataName: {
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

    const route = useRoute();
    const routeName = computed(() => route.meta.panel);

    const selected = ref("");
    const getSelected = (val) => {
      selected.value = val;
    };

    const reseted = ref(false);
    const reset = () => {
      selected.value = null;
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
        if (routeName.value == "bet") {
          store.dispatch("liveBetUpdate", {
            type: "pole",
            value: currentValue,
          });
        } else {
          store.dispatch("resultsUpdate", {
            type: props.dataName,
            value: currentValue,
          });
        }
      }
    );

    return { getSelected, reset, reseted };
  },
};
</script>

<style lang="scss" scoped></style>
