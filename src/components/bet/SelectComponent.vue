<template>
  <div class="card">
    <span class="driver-position">{{ position }}</span>
    <select v-model="selected" class="round" @change="setSelected($event, idx)">
      <option disabled value="0">{{ group }} {{ idx + 1 }}</option>
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
    console.log(props.group);
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
  /* background:linear-gradient(darkred,red); */
  font-size: 0.8rem;
  border: solid 2px black;

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

// .card {
//   //margin: 0.2rem;
//   width: 100%;
//   padding: 0.5em 0;
//   color: #ccc;
//   background: linear-gradient(darkred, red);
//   font-size: 0.8rem;
//   border: solid 2px black;
//   position: relative;
//   h3,
//   p {
//     color: #fdd800;
//     margin: 0;
//   }
//   h3 {
//     top: 2em;
//     position: absolute;
//     width: 100%;
//   }
// }
// .card select {
//   font-family: "Play", cursive;
//   font-size: 1rem;
//   //border-radius: 0.5em;
//   cursor: pointer;
//   //background: #070707;
//   background: transparent;
//   border: none;
//   color: white;
//   z-index: 1;
//   position: relative;
//   display: inline-block;
//   line-height: 1.5em;
//   padding: 0.5em 3.5em 0.5em 1em;

//   /* reset */

//   margin: 0;
//   -webkit-box-sizing: border-box;
//   -moz-box-sizing: border-box;
//   box-sizing: border-box;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   /* border: 2px solid #a074c4; */
// }
// select.round {
//   background-image: linear-gradient(45deg, transparent 50%, #fdd800 50%),
//     linear-gradient(135deg, #fdd800 50%, transparent 50%),
//     radial-gradient(transparent 70%, transparent 72%);
//   background-position: calc(100% - 20px) calc(1em + 2px),
//     calc(100% - 15px) calc(1em + 2px), calc(100% - 5em) 20em;
//   background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
//   background-repeat: no-repeat;
// }
// .optDisable {
//   background: #101010;
//   font-weight: bold;
//   color: #ccc;
// }
// option {
//   background: #070707;
//   font-weight: bold;
//   color: #ccc;
// }
</style>
