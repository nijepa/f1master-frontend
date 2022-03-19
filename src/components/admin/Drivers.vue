<template>
  <DefaultList :data-model="model" :list-dat="listData" />
  <p>dsgdfgg</p>
</template>

<script>
import models from "@/config/models";
import DefaultList from "./DefaultList.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { ref, computed, watch } from "vue";
import { mapActions } from "vuex";

export default {
  components: {
    DefaultList,
  },
  // data() {
  //   return {
  //     listData: '',
  //     model: ''
  //   };
  // },
  // methods: {
  //   ...mapActions(["fetchF1datas"]),
  // },
  // watch: {
  //   $route(to, from) {
  //     console.log(
  //       `MyCoolComponent - watch route.name changed to ${to.name} from ${from.name}`
  //     );
  //     this.listData = to.name;
  //     this.model = models[to.name].fields
  //     console.log(this.model)
  //   },
  // },

  setup() {
    const route = useRoute();
    //const store = useStore();
    //const rt = computed(() => route)
    //const model = models.drivers.fields;
    //const model = ref(models[route.name].fields);
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
    return {  };
  },
};
</script>

<style></style>
