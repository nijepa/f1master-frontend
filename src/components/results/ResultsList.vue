<template>
  <div class="results-list">
    <h2 class="list-title">{{ $t("result", 2) }}</h2>
    <button class="btn-new" @click="addItem">new</button>
    <ul>
      <li class="">
        <div class="list-heading">season</div>
        <div class="list-heading">event</div>
        <div class="list-heading">pole time</div>
        <div class="list-heading">pole winner</div>
        <div class="list-heading">race winner</div>
      </li>
    </ul>
    <ul>
      <li
        v-for="result in results"
        :key="result.id"
        @click="loadEvent(result.id)"
      >
        <div class="">{{ result.season }}</div>
        <div class="">{{ result.event[0].val }}</div>
        <div class="">{{ result.poletime }}</div>
        <div class="">{{ result.qualifying[0].val }}</div>
        <div class="">{{ result.race[0].val }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";

export default {
  name: "Resultslist",

  setup() {
    const router = useRouter();
    const store = useStore();
    store.dispatch("fetchf1results");
    const results = computed(() => store.getters.getf1results);
    console.log(results.value);

    const loadEvent = (id) => {
      router.push({ name: "ResultsEvent", params: { eventId: id } });
    };

    const addItem = () => {
      router.push({ name: "ResultsNew" });
    };

    return { results, loadEvent, addItem };
  },
};
</script>

<style lang="scss" scoped>
.results-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;

  .list-title {
    margin: 0.5em 0;
    color: $grey;
    text-transform: uppercase;
    text-shadow: none;
  }

  ul {
    margin-top: 1em;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
      padding: 1em;
      display: grid;
      grid-template-columns: 50px 250px auto 1fr 1fr;
      width: 750px;
      text-align: left;
      column-gap: 1em;
      color: $astonmartin;
      transition: all 0.4s ease;
      cursor: pointer;

      &:hover {
        color: $mercedes;
      }
    }
  }
}
.list-heading {
  font-variant: small-caps;
  margin-bottom: 0.5em;
  color: $alphatauri;
  cursor: pointer;
  transition: all 0.4s ease;
}

.list-heading:hover {
  color: $yellow;
}
.btn-new {
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: $mercedes-silver;
  color: $mclaren-orange;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  text-transform: uppercase;
  transition: all 0.4s ease;

  &:hover {
    color: $yellow;
    text-shadow: 0px -1px 10px rgba(253, 216, 0, 0.5);
    box-shadow: 0px -1px 10px rgba(253, 216, 0, 0.5);
  }
}
</style>
