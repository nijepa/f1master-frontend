<template>
  <div id="demo">
    <div class="cont">
      <h1>{{ title }}</h1>
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
        <div
          v-for="(item, i) in maxArray.length"
          :key="i"
          class="select-wrapper"
        >
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
      <div class="btn">
        <button class="reset" @click="reset">Reset</button>
      </div>
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
      required: true,
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
h1 {
  display: grid;
  color: #ddd;
  text-shadow: 2px 0px 0px black;
  font-size: 1rem;
  font-weight: bold;
  /* background:rgba(0, 0, 0, 0.7); */
  justify-items: center;
  align-content: center;
  width: 100%;
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
  //box-shadow: 5px 5px 12px rgb(0 0 0 / 15%);
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

// .cont {
//   padding: 0 0.5em 0.5em 0.5em;
//   width: 100%;
//   .select-wrapper {
//     width: 100%;
//   }
// }
// .btn {
//   height: 70px;
//   justify-items: center;
//   align-items: end;
//   display: grid;
// }

// button {
//   display: grid;
//   align-items: center;
//   justify-items: center;
//   font-size: 0.8em;
//   font-weight: 700;
//   width: 140px;
//   height: 25px;
//   cursor: pointer;
//   margin: 0 5px;
//   border-radius: 4px;
//   box-shadow: 5px 5px 12px rgba(0, 0, 0, 15%);
//   border: 1px solid transparent;
//   transition: all 0.4s ease;
//   text-transform: uppercase;
// }
// .reset {
//   background: #070707;
//   color: #ddd;
//   border: solid 1px #050505;
// }
// .confirm {
//   background: #fdd800;
//   color: black;
// }
// button:hover {
//   background-color: linear-gradient(#ffef93, #e8c500);
//   letter-spacing: 1px;
// }
</style>
