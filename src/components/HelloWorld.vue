<template>
  <div class="hello">
    <!-- <button @click="getTeams">geeeet</button> -->
    <img src="@/assets/logo2.png" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  name: "HelloWorld",
  setup() {
    const store = useStore();
    const teams = computed(() => store.getters.getTeams);
    const getTeams = async () => {
      await store.dispatch("fetchTeams");
    };

    return { teams, getTeams };
  },
};
</script>

<style scoped lang="scss">
.hello {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
