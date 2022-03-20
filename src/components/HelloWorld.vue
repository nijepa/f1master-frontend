<template>
  <div class="home-wrapper">
    <h1>{{ currentRace.name }}</h1>
    <Counter :end="currentRace.raceStart" />
    <div class="hello">
      <!-- <button @click="getTeams">geeeet</button> -->
      <img src="@/assets/images/logo2.png" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, getCurrentInstance } from "vue";
import Counter from "@/components/Counter.vue";

export default {
  name: "HelloWorld",
  components: {
    Counter,
  },
  setup() {
    const app = getCurrentInstance();
    const dayjs = app.appContext.config.globalProperties.$dayjs;
    const store = useStore();

    store.dispatch("fetchF1datas", "events");
    const events = computed(() => store.getters.getF1datas("events"));

    const currentRace = ref([]);
    const currEv = () => {
      const posibleEvents = events.value.filter((ev) => {
        return (
          dayjs(new Date(ev.raceStart)).format("YYYY-MM-DD") >
          dayjs(new Date()).format("YYYY-MM-DD")
        );
      });
      currentRace.value = posibleEvents.reduce((a, b) => {
        return new Date(b.start) > new Date(a.start) ? b : a;
      });
    };
    currEv();

    return { events, currentRace };
  },
};
</script>

<style scoped lang="scss">
.home-wrapper {
  display: grid;
  align-items: center;
  height: 100%;
  grid-template-rows: auto auto 1fr;
  h1 {
    color: #fdd800;
    box-shadow: none;
    margin-top: 2em;
  }
}
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
