<template>
  <List :data-model="model" />
</template>

<script>
import models from "@/config/models";
import List from "./List.vue";

export default {
  components: {
    List,
  },

  setup() {
    const model = models[0].fields;

    return { model };
  },
};
</script>

<style></style>
