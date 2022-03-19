<template>
  <h1 class="list-title">DRIVERS</h1>
  <ul class="list-ul">
    <li v-for="(item, i) in list" :key="item.id" class="list-li">
      <!-- <div v-for="key in Object.keys(item)" :key="key">
          <Defaultinput @changed="handleUpdated" v-model="item[key]" />
        </div> -->
      <template v-for="key in model" :key="key.name">
        <div class="">
          <h4 v-if="i === 0" class="list-heading">{{ key.name }}</h4>
          <Defaultinput
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
import drivers from "@/data/drivers";
import Defaultinput from "./Defaultinput.vue";
import { ref } from "vue";

export default {
  name: "List",
  components: {
    Defaultinput,
  },
  props: {
    dataModel: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const model = ref(props.dataModel);
    const list = ref(drivers);
    const handleUpdated = (field) => {
      console.log(field);
    };

    return { model, list, handleUpdated };
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
    margin: 0.5em;
    column-gap: 0.5em;
    .list-heading {
      font-variant: small-caps;
      margin-bottom: 0.5em;
      color: #ff2800;
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
