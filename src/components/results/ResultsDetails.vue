<template>
  <div class="results-details">
    <h1>Result</h1>
    <h3>{{ results.season }}</h3>
    <h3>{{ results.event[0].val }}</h3>
    <h4>{{ results.poletime }}</h4>
    <div class="results-details__tables">
      <ul>
        <li v-for="pos in results.qualifying" :key="pos.id">
          {{ pos.idx + 1 }}. {{ pos.val }}
        </li>
      </ul>
      <ul>
        <li v-for="pos in results.race" :key="pos.id">
          {{ pos.idx + 1 }}. {{ pos.val }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    store.dispatch("fetchf1result", route.params.eventId);
    const results = computed(() => store.getters.getf1result);
    console.log(results.value);
    return { results };
  },
};
</script>

<style lang="scss" scoped>
.results-details {
  margin: 1em 0;
  color: $astonmartin;

  h1 {
    color: $mercedes;
  }

  h3 {
    color: $yellow;
  }

  h4 {
    margin: 1em 0;
    color: $mclaren-orange;
  }

  .results-details__tables {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    text-align: left;
    column-gap: 1em;

    ul {
      list-style: none;
      color: $mclaren-orange;
    }
  }
}
</style>
