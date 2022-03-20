<template>
  <h2 class="list-title">{{ title }}</h2>
  <button class="btn-new" @click="addItem">new</button>
  <ul class="list-ul">
    <li
      v-for="(item, i) in listData"
      :key="item.id"
      class="list-li"
      :class="fieldsClass"
    >
      <!-- <div v-for="key in Object.keys(item)" :key="key">
          <Defaultinput @changed="handleUpdated" v-model="item[key]" />
        </div> -->
      <template v-for="key in model" :key="key.name">
        <div class="list-item">
          <h4
            v-if="i === 0"
            class="list-heading"
            @click="handleSort(key.name, key.type)"
          >
            {{ key.heading }}
          </h4>
          <DefaultInput
            @changed="handleUpdated"
            v-model="item[key.name]"
            :input-type="key.type"
            :placeholder="key.placeholder"
            :disabled="key.readonly"
            :class="key.readonly ? 'readonly' : ''"
          />
        </div>
      </template>
    </li>
  </ul>
  <!-- <p>{{ list }}</p> -->
</template>

<script>
//import models from "@/config/models";
import drivers from "@/data/drivers";
import DefaultInput from "@/components/admin/DefaultInput.vue";
import { ref, computed } from "@vue/reactivity";
//import { watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "List",
  components: {
    DefaultInput,
  },
  props: {
    dataModel: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    listClass: {
      type: Number,
      default: 4,
    },
  },

  setup(props) {
    const route = useRoute();
    // const model = ref(models[route.name].fields);
    // watch(
    //   () => route.name,
    //   (currentValue) => {
    //     console.log("ggggg", currentValue);
    //     store.dispatch("fetchF1datas", currentValue);
    //     model.value = ref(models[route.name].fields);
    //   }
    // );
    const store = useStore();
    console.log(111, route.name);
    store.dispatch("fetchF1datas", route.name);
    const listData = computed(() => store.getters.getF1datas(route.name));
    console.log(333, listData.value);
    const model = ref(props.dataModel);
    //const model = ref(models[route.name].fields);
    console.log(222, model.value);
    // TODO implement vuex store for drivers
    const list = ref(drivers);

    const handleUpdated = (field) => {
      console.log(field);
    };

    const sortOrder = ref(false);
    const handleSort = (field, type) => {
      sortOrder.value = !sortOrder.value;
      listData.value.sort((a, b) => {
        let x, y;
        if (type === "number") {
          x = a[field];
          y = b[field];
        } else {
          x = a[field].toLowerCase();
          y = b[field].toLowerCase();
        }
        if (sortOrder.value) {
          return x > y ? -1 : 1;
        } else {
          return x > y ? 1 : -1;
        }
      });
    };

    const fieldsClass = computed(() => {
      return props.listClass === 4 ? "list-four" : "list-five";
    });

    return { model, list, handleUpdated, handleSort, listData, fieldsClass };
  },
};
</script>

<style lang="scss" scoped>
.list-title {
  margin: 0.5em 0;
  color: #ff2800;
  //text-shadow: 0 1px 0 #fdd700c4;
  text-transform: uppercase;
  text-shadow: none;
}
.list-ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
  .list-li {
    display: grid;
    //grid-template-columns: auto 1fr auto 1fr;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    column-gap: 0.5em;
    .list-item {
      height: 100%;
      .list-heading {
        font-variant: small-caps;
        margin-bottom: 0.5em;
        color: #555555;
        cursor: pointer;
        transition: all 0.4s ease;
      }
      .list-heading:hover {
        color: #fdd800;
      }
    }
  }
}
.btn-new {
  padding: 1em;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: #ff2800;
  color: #ddd;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  text-transform: uppercase;
  transition: all 0.4s ease;
}
.btn-new:hover {
  border: 1px solid #fdd800;
  color: #fdd800;
  outline-color: #fdd800;
  outline-style: solid;
  outline-width: 1px;
}
.list-three {
  grid-template-columns: auto repeat(2, 1fr);
}
.list-four {
  grid-template-columns: auto repeat(3, 1fr);
}
.list-five {
  grid-template-columns: auto repeat(4, 1fr);
}
</style>
