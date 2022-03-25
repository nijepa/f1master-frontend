<template>
  <div class="card">
    <span class="driver-position">{{ position }}</span>
    <select
      v-model="selected"
      class="round"
      @change="setSelected($event, idx)"
      :class="{ event: group === 'Event' }"
    >
      <option v-if="group === 'Head'" disabled value="0">
        {{ items[0].team }}
      </option>
      <option v-else disabled value="0">{{ group }} {{ idx + 1 }}</option>
      <option v-for="item in items" :key="item.id" :value="item.name">
        {{ showItem(item.id) }}
      </option>
      <option v-if="selected">
        <h3 :style="{ color: 'yellow' }">{{ selected }}</h3>
      </option>
    </select>
    <span class="driver-nr">{{ nr }}</span>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
    reseted: {
      type: Boolean,
      default: false,
    },
    group: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    // eslint-disable-next-line vue/return-in-computed-property
    const position = computed(() => {
      const nr = props.idx + 1;
      if (props.group.includes("Position")) {
        return nr < 10 ? 0 + nr.toString() : nr;
      }
      return;
    });

    const selected = ref(0);
    const setSelected = (e, i) => {
      const item = props.items.find((ind) => ind.name.includes(e.target.value));
      item.number !== undefined
        ? (nr.value = "#" + item.number)
        : (nr.value = null);
      emit("select", { idx: i, id: item.id, val: e.target.value });
    };

    const nr = ref(null);

    const getNr = (idx) => {
      return props.items[0].number !== undefined
        ? `${props.items[idx].name}#${props.items[idx].number}`
        : props.items[idx].name;
    };
    const showItem = (id) => {
      const idx = props.items.findIndex((i) => i.id === id);
      return getNr(idx);
    };
    const showSelected = () => {
      const idx = props.items.findIndex((i) => i.val === selected.value);
      return getNr(idx);
    };

    watch(
      () => props.reseted,
      () => {
        selected.value = 0;
        nr.value = null;
        emit("cleared");
      }
    );

    return {
      position,
      selected,
      nr,
      setSelected,
      showItem,
      showSelected,
      getNr,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0.2rem;
  font-size: 0.8rem;

  select {
    font-family: "Play", cursive;
    font-size: 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    background: $ferrari;
    color: white;
    font-weight: bold;
    border: 2px solid transparent;
    padding: 0.5em;
    width: 70%;

    option {
      background: #070707;
      font-weight: bold;
      color: #ccc;
    }
  }
}

.driver-nr {
  margin-left: 0.5em;
  color: $yellow;
}

.driver-position {
  margin-right: 0.5em;
  color: $ferrari;
}

.event {
  width: 90% !important;
}
</style>
