<template>
  <div class="card">
    <select v-model="selected" class="round" @change="setSelected($event, idx)">
      <option disabled value="0">{{ group }} {{ idx + 1 }}</option>
      <option v-for="item in items" :key="item.id" :value="item.name">
        {{ showItem(item.id) }}
      </option>
      <option v-if="selected">
        <h3 :style="{ color: selected }">{{ selected }}</h3>
      </option>
    </select>
  </div>
</template>

<script>
import { ref, watch } from "vue";

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
    const selected = ref(0);
    const setSelected = (e, i) => {
      const item = props.items.find((ind) => ind.name.includes(e.target.value));
      emit("select", { idx: i, id: item.id, val: e.target.value });
    };

    const showItem = (id) => {
      const idx = props.items.findIndex((i) => i.id === id);
      return props.items[0].number !== undefined
        ? `${props.items[idx].name}#${props.items[idx].number}`
        : props.items[idx].name;
    };

    watch(
      () => props.reseted,
      () => {
        selected.value = 0;
        emit("cleared");
      }
    );

    return { selected, setSelected, showItem };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0.2rem;
  width: 150px;
  height: 25px;

  /* background:linear-gradient(darkred,red); */
  font-size: 0.8rem;
  border: solid 2px black;
}
.card select {
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
