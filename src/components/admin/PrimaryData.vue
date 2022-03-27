<template>
  <Loader v-if="loading" />
  <DefaultList
    v-else
    :data-model="model"
    :title="title"
    :list-class="listClass"
    @loaded="loaded"
  />
</template>

<script>
import Loader from "@/components/Loader.vue";
import models from "@/config/models";
import DefaultList from "./DefaultList.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "Primary Data",
  components: {
    DefaultList,
    Loader,
  },

  setup() {
    const route = useRoute();
    const model = ref(models[route.name].fields);
    const title = ref(route.name);
    const listClass = ref(model.value.length);

    const loading = ref(true);
    const loaded = (finished) => {
      console.log(88888, finished);
      finished ? (loading.value = false) : (loading.value = true);
    };

    setTimeout(() => (loading.value = false), 2000);

    return { model, title, listClass, loading, loaded };
  },
};
</script>

<style></style>
