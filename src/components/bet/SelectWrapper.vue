<template>
  <div class="cont">
    <h1 v-if="title">{{ title }}</h1>
    <template v-if="isHead">
      <div v-for="i in items.length" :key="i" class="select-wrapper">
        <sel-comp
          :items="items[i - 1]"
          :idx="i - 1"
          :reseted="reseted"
          :group="group"
          @select="getSelected"
          @cleared="reseted = false"
        />
      </div>
    </template>
    <template v-else>
      <div v-for="(item, i) in maxArray.length" :key="i" class="select-wrapper">
        <sel-comp
          :items="getItems"
          :idx="i"
          :reseted="reseted"
          :group="group"
          @select="getSelected"
          @cleared="reseted = false"
        />
      </div>
    </template>
    <div v-if="resetBtn" class="reset-btn btn-wrapper">
      <button class="btn reset" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import selComp from "./SelectComponent.vue";
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  components: { selComp },

  props: {
    count: {
      type: Number,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    group: {
      type: String,
      required: true,
    },
    isHead: {
      type: Boolean,
      default: false,
    },
    resetAll: {
      type: Boolean,
      default: false,
    },
    resetBtn: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const store = useStore();

    const maxArray = ref(Array(props.count).fill(""));

    const items = ref(props.list);
    const getItems = computed(() => {
      return items.value.filter((i) => {
        return !selected.value.some((sel) => sel.id === i.id);
      });
    });

    const selected = ref([]);
    const getSelected = (val) => {
      const sels = selected.value.filter((s) => s.idx === val.idx);
      if (!sels.length && sels[0]?.id !== val.id && sels[0]?.val !== val.val) {
        selected.value.push(val);
      } else {
        if (sels[0].idx === val.idx && sels[0].val !== val.val) {
          let idx = selected.value.findIndex((i) => i.idx === val.idx);
          selected.value[idx].val = val.val;
          selected.value[idx].id = val.id;
        }
      }
    };

    const reseted = ref(false);
    const reset = () => {
      selected.value = [];
      reseted.value = true;
    };

    watch(
      () => props.resetAll,
      (first) => {
        first && reset();
      }
    );

    watch(
      () => [...selected.value],
      (currentValue) => {
        store.dispatch("liveBetUpdate", {
          type: props.title,
          value: currentValue,
        });
      }
    );

    return {
      items,
      getItems,
      maxArray,
      selected,
      getSelected,
      reseted,
      reset,
      confirm,
    };
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  width: 100%;
}

.reset-btn {
  width: 100%;
  .reset {
    width: 100%;
  }
}
</style>
