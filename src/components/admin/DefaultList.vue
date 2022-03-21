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
          <Datepicker
            v-model="item[key.name]"
            v-if="key.type === 'date'"
            dark
          ></Datepicker>
          <DefaultInput
            v-else
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
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
//import models from "@/config/models";
import DefaultInput from "@/components/admin/DefaultInput.vue";
import { ref, computed } from "@vue/reactivity";
//import { watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "List",
  components: {
    DefaultInput,
    Datepicker,
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
    // const model = ref(models[route.name].fields);
    // watch(
    //   () => route.name,
    //   (currentValue) => {
    //     console.log("ggggg", currentValue);
    //     store.dispatch("fetchF1datas", currentValue);
    //     model.value = ref(models[route.name].fields);
    //   }
    // );
    const route = useRoute();
    const store = useStore();
    store.dispatch("fetchF1datas", route.name);
    const listData = computed(() => store.getters.getF1datas(route.name));
    const model = ref(props.dataModel);
    //const model = ref(models[route.name].fields);

    // TODO implement vuex store for updating list
    const handleUpdated = (field) => {
      console.log(field);
    };

    const sortOrder = ref(false);
    const handleSort = (field, type) => {
      sortOrder.value = !sortOrder.value;
      listData.value.sort((a, b) => {
        let x, y;
        if (type === "number" || type === "checkbox") {
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

    return {
      model,
      listData,
      fieldsClass,
      handleUpdated,
      handleSort,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-title {
  margin: 0.5em 0;
  color: $grey;
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
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .list-heading {
        font-variant: small-caps;
        margin-bottom: 0.5em;
        color: $alphatauri;
        cursor: pointer;
        transition: all 0.4s ease;
      }
      .list-heading:hover {
        color: $yellow;
      }
    }
  }
}
.btn-new {
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: $mercedes-silver;
  color: $mclaren-orange;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  text-transform: uppercase;
  transition: all 0.4s ease;
}
.btn-new:hover {
  // border: 1px solid $yellow;
  color: $yellow;
  // outline-color: $yellow;
  // outline-style: solid;
  // outline-width: 1px;
  text-shadow: 0px -1px 10px rgba(253, 216, 0, 0.5);
  box-shadow: 0px -1px 10px rgba(253, 216, 0, 0.5);
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
@media (max-width: 992px) {
  .list-ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .list-li {
      grid-template-columns: 1fr;
      padding: 1em;
      background-color: rgba(11, 31, 42, 0.3);
      border-radius: 4px;
      .list-item {
        padding: 0.5em 0;
      }
      h4 {
        display: none;
      }
    }
  }
}
@media (max-width: 576px) {
  .list-ul {
    flex-direction: column;
  }
}
</style>
