<template>
  <DefaultList :data-model="model" :title="title" :list-class="listClass" />
</template>

<script>
import models from "@/config/models";
import DefaultList from "./DefaultList.vue";
//import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "Primary Data",
  components: {
    DefaultList,
  },

  setup() {
    const route = useRoute();
    //const store = useStore();
    //const rt = computed(() => route)
    //const model = models.drivers.fields;
    const model = ref(models[route.name].fields);
    const title = ref(route.name);
    const listClass = ref(model.value.length);
    //const listData = computed(() => store.getters.getF1datas(route.name));
    // watch(
    //   () => rt.value,
    //   () => {
    //     console.debug(
    //       `MyCoolComponent - watch route.name changed to ${route.name}`
    //     );
    //     //store.dispatch("fetchF1datas", route.name);
    //     // Do something here...

    //     // Optionally you can set immediate: true config for the watcher to run on init
    //     //}, { immediate: true });
    //   }
    // );
    return { model, title, listClass };
  },
};
</script>

<style></style>
