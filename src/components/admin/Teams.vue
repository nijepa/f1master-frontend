<template>
  <DefaultList :data-model="model" />
</template>

<script>
import models from "@/config/models";
import DefaultList from "./DefaultList.vue";

export default {
  components: {
    DefaultList,
  },

  setup() {
    const model = models[0].fields;

    return { model };
  },
};
</script>

<style></style>
