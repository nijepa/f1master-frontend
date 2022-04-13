import { computed, getCurrentInstance, ref } from "vue";
import { useStore } from "vuex";

export default function () {
  const app = getCurrentInstance();
  const dayjs = app.appContext.config.globalProperties.$dayjs;
  const store = useStore();

  store.dispatch("fetchF1datas", "events");
  const events = computed(() => store.getters.getF1datas("events"));

  const currentRace = ref([]);
  const currEv = () => {
    const posibleEvents = events.value?.filter((ev) => {
      return (
        dayjs(new Date(ev.raceStart)).format("YYYY-MM-DD") >
        dayjs(new Date()).format("YYYY-MM-DD")
      );
    });
    if (posibleEvents.length) {
      currentRace.value = posibleEvents.reduce((a, b) => {
        return new Date(b.start) > new Date(a.start) ? b : a;
      });
    }
  };
  currEv();

  return currentRace;
}
