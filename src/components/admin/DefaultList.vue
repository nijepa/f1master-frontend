<template>
  <h2 class="list-title">{{ $t(title, 2) }}</h2>
  <button class="btn-new" @click="addItem">{{ $t("new") }}</button>
  <ul class="list-ul">
    <li
      v-for="(item, i) in listData"
      :key="item.id"
      class="list-li"
      :class="fieldsClass"
    >
      <template v-for="key in model" :key="key.name">
        <div class="list-item">
          <h4
            v-if="i === 0"
            class="list-heading"
            @click="handleSort(key.name, key.type)"
          >
            {{ key.heading }}
          </h4>
          <select
            v-if="key.type === 'select'"
            v-model="item[key.name]"
            @update:modelValue="[setIndex(i), handleChange($event)]"
          >
            <option :value="team.teamName" v-for="team in teams" :key="team.id">
              {{ team.teamName }}
            </option>
          </select>
          <Datepicker
            v-model="item[key.name]"
            v-if="key.type === 'date'"
            @update:modelValue="[setIndex(i), handleChange($event)]"
            dark
          ></Datepicker>
          <DefaultInput
            v-if="
              key.type === 'text' ||
              key.type === 'checkbox' ||
              key.type === 'number'
            "
            @changed="[setIndex(i), handleChange($event)]"
            v-model="item[key.name]"
            :input-type="key.type"
            :placeholder="key.placeholder"
            :disabled="key.readonly"
            :class="key.readonly ? 'readonly' : ''"
          />
        </div>
      </template>
      <div class="btn-update tooltip">
        <h4 v-if="i === 0" class="action-heading"></h4>
        <svg
          v-if="selected && idx === i"
          @click="handleUpdate"
          width="20px"
          height="20px"
          viewBox="0 0 506.4 506.4"
          fill="#fdd800"
        >
          <path
            d="M75,252c-6-6-14-9.2-22.4-9.2c-8.4,0-16.4,3.2-22.4,9.2S21,266,21,274.4c0,8.4,3.2,16.4,9.2,22.4s14,9.2,22.4,9.2
		c8.4,0,16.4-3.2,22.4-9.2s9.2-14,9.2-22.4C84.2,266,81,258,75,252z"
          />
          <path
            d="M130.6,390.4c-10-10.4-18-21.6-24.8-33.6c-5.6-10-16-16-27.6-16c-5.2,0-10.8,1.2-15.6,4c-15.2,8.4-20.8,28-12,43.2
		c9.2,16.8,20.8,32,34,46c6,6.4,14.4,10,23.2,10c8,0,16-3.2,21.6-8.8c6-6,9.6-13.6,10-22C139.8,404.8,136.6,396.8,130.6,390.4z"
          />
          <path
            d="M355,450c-5.6-12-17.6-20-30.4-20c-4,0-7.6,0.8-11.2,2c-19.2,7.2-39.6,11.2-60,11.2c-14.4,0-28.4-1.6-42.4-5.2
		c-1.2-0.4-2.4-0.4-3.2-0.8c-2.8-0.8-5.6-1.2-8.4-1.2c-14,0-26.8,9.6-30.4,23.2c-2.4,8-1.2,16.8,2.8,24S182.6,496,191,498
		c1.6,0.4,3.2,0.8,4.8,1.2c18.8,4.8,38.4,7.2,58,7.2c28.4,0,56.4-5.2,82.8-15.2c8-3.2,14-8.8,17.6-16.8
		C357.8,466.8,357.8,458,355,450z"
          />
          <path
            d="M328.6,55.2c4.8-4.4,8-10,9.6-16.4c2-8.4,0.4-16.8-4-24c-6-9.2-16-14.8-26.8-14.8c-6,0-11.6,1.6-16.8,4.8l-58,36.8
		c-7.2,4.4-12,11.6-14,19.6c-2,8.4-0.4,16.8,4,24l36.8,58c6,9.2,16,14.8,26.8,14.8c6,0,11.6-1.6,16.8-4.8c12-7.6,17.2-22,13.6-35.2
		c63.2,25.6,105.2,87.6,105.2,156.4c0,38-12.4,74-35.6,104c-10.8,13.6-8.4,33.6,5.6,44.4c5.6,4.4,12.4,6.8,19.6,6.8
		c10,0,18.8-4.4,24.8-12c32-41.2,49.2-90.4,49.2-142.8C485,174.4,422.6,87.6,328.6,55.2z"
          />
        </svg>
        <span class="tooltiptext">Update record</span>
      </div>
    </li>
  </ul>
  <DefaultEntry
    v-if="newEntry"
    :data-model="model"
    :title="title"
    @finished="handleFinished"
  />
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import DefaultInput from "@/components/admin/DefaultInput.vue";
import DefaultEntry from "@/components/admin/DefaultEntry.vue";
import { ref, computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "List",
  components: {
    DefaultInput,
    Datepicker,
    DefaultEntry,
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
  emits: ["loaded"],

  setup(props, { emit }) {
    const route = useRoute();
    const store = useStore();

    const listData = computed(() => store.getters.getF1datas(route.name));
    const teams = computed(() => store.getters.getF1datas("teams"));
    const model = ref(props.dataModel);

    const loadData = async () => {
      await store.dispatch("fetchF1datas", route.name);
    };

    onMounted(() => {
      loadData();
      console.log(1111);
      emit("loaded", true);
    });

    const newEntry = ref(false);

    const idx = ref(null);
    const setIndex = (i) => {
      idx.value = i;
    };
    const selected = ref(false);
    const handleChange = () => {
      selected.value = true;
    };
    const handleUpdate = () => {
      const dataForVuex = {
        type: route.name,
        value: listData.value[idx.value],
      };
      store.dispatch("f1dataUpdate", dataForVuex);
      selected.value = false;
    };

    const addItem = () => {
      newEntry.value = true;
    };

    const handleFinished = (data) => {
      if (data) {
        const dataForVuex = {
          type: route.name,
          value: data,
        };
        store.dispatch("f1dataAdd", dataForVuex);
      }
      newEntry.value = false;
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
      teams,
      model,
      listData,
      fieldsClass,
      handleChange,
      handleSort,
      newEntry,
      addItem,
      handleFinished,
      selected,
      idx,
      setIndex,
      handleUpdate,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-title {
  margin: 0.5em 0;
  color: $grey;
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

      select {
        background: rgba(16, 16, 16, 0.502);
        border-radius: 4px;
        border: none;
        color: white;
        padding: 1em;
        letter-spacing: 1.5px;
        transition: all 0.4s ease;
        cursor: pointer;

        &:focus,
        &:hover {
          background: rgba(16, 16, 16, 1);
          outline: none;
          -webkit-box-shadow: inset 0px 0px 1px 1px $haas;
          box-shadow: inset 0px 0px 1px 1px $haas;
        }
      }

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

    .btn-update {
      height: 100%;
      display: grid;
      align-items: center;

      svg {
        cursor: pointer;
        transition: all 0.4s ease;
      }

      &:hover > svg {
        fill: $red;
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

  &:hover {
    color: $yellow;
    text-shadow: 0px -1px 10px rgba(253, 216, 0, 0.5);
    box-shadow: 0px -1px 10px rgba(253, 216, 0, 0.5);
  }
}

.list-three {
  grid-template-columns: auto repeat(2, 1fr) auto;
}

.list-four {
  grid-template-columns: auto repeat(3, 1fr) auto;
}

.list-five {
  grid-template-columns: auto repeat(4, 1fr) auto;
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

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  max-width: 120px;
  padding: 0.5em;
  background-color: $redbull-red;
  color: $redbull-yellow;
  text-align: center;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 400;
  font-family: $font-main;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  left: 2em;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
