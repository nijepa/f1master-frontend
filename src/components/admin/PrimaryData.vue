<template>
  <DefaultList :data-model="model" :title="title" :list-class="listClass" />
</template>

<script>
import models from "@/config/models";
import DefaultList from "./DefaultList.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "Primary Data",
  components: {
    DefaultList,
  },

  setup() {
    const route = useRoute();
    const model = ref(models[route.name].fields);
    const title = ref(route.name);
    const listClass = ref(model.value.length);
    return { model, title, listClass };
  },
};
</script>

<style></style>
