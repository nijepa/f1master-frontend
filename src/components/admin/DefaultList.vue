<template>
  <h2 class="list-title">DRIVERS</h2>
  <ul class="list-ul">
    <li v-for="(item, i) in listData" :key="item.id" class="list-li">
      <!-- <div v-for="key in Object.keys(item)" :key="key">
          <Defaultinput @changed="handleUpdated" v-model="item[key]" />
        </div> -->
      <template v-for="key in model" :key="key.name">
        <div class="">
          <h4
            v-if="i === 0"
            class="list-heading"
            @click="handleSort(key.name, key.type)"
          >
            {{ key.name }}
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
import models from "@/config/models";
import drivers from "@/data/drivers";
import DefaultInput from "./DefaultInput.vue";
import { ref, computed } from "@vue/reactivity";
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "List",
  components: {
    DefaultInput,
  },
  props: {
    // dataModel: {
    //   type: Array,
    //   required: true,
    // },
    // listDat: {
    //   type: String,
    //   required: true,
    // },
  },

  setup(props) {
    const route = useRoute();
    console.log(111, route.name);
    const model = ref(models[route.name].fields)
watch(
      () => route.name,
      (currentValue) => {
        console.log('ggggg',currentValue)
        store.dispatch("fetchF1datas", route.name);
        listData.value = computed(() => store.getters.getF1datas(props.listDat))
        model.value = ref(models[route.name].fields)
      }
    );
    const store = useStore();
    //store.dispatch("fetchF1datas", route.name);
    const listData = computed(() => store.getters.getF1datas(props.listDat));

    //const model = ref(props.dataModel);
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

    return { model, list, handleUpdated, handleSort, listData };
  },
};
</script>

<style lang="scss" scoped>
.list-title {
  margin: 0.5em 0;
  color: #ff2800;
  //text-shadow: 0 1px 0 #fdd700c4;
  text-shadow: none;
}
.list-ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  .list-li {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    column-gap: 0.5em;
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
.heading-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.list__heading-ul {
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  list-style: none;
  h4 {
    font-variant: small-caps;
  }
}
</style>
