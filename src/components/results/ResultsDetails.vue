<template>
  <div class="results-details">
    <router-link to="/admin/results" class="back">
      <svg
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 487.622 487.622"
        style="enable-background: new 0 0 487.622 487.622"
        xml:space="preserve"
      >
        <circle fill="#00d2be" cx="243.811" cy="243.811" r="243.811" />
        <path
          fill="#00d2be"
          style="opacity: 0.37; enable-background: new"
          d="M487.622,243.811c0-10.555-0.672-20.953-1.973-31.154
			L364.019,93.248l-43.018,43.018l-36.666-43.018L112.263,265.32l206.079,210.681C416.537,444.504,487.622,352.464,487.622,243.811z
			"
        />
        <rect
          x="321.001"
          y="93.248"
          style="fill: #ffffff"
          width="43.018"
          height="43.018"
        />
        <polygon
          style="fill: #ffffff"
          points="191.947,222.302 155.282,222.302 155.282,179.284 198.3,179.284 198.3,222.302 
				234.964,222.302 234.964,265.32 198.3,265.32 198.3,308.338 155.282,308.338 155.282,265.32 191.947,265.32 			"
        />
        <polygon
          style="fill: #ffffff"
          points="234.964,265.32 277.983,265.32 277.983,308.338 241.318,308.338 241.318,351.357 
				198.3,351.357 198.3,308.338 234.964,308.338 			"
        />
        <polygon
          style="fill: #ffffff"
          points="277.983,308.338 321.001,308.338 321.001,351.357 284.335,351.357 284.335,394.374 
				241.318,394.374 241.318,351.357 277.983,351.357 			"
        />
        <rect
          x="321.001"
          y="351.357"
          style="fill: #ffffff"
          width="43.018"
          height="43.018"
        />
        <polygon
          style="fill: #ffffff"
          points="241.318,136.265 241.318,93.248 284.335,93.248 284.335,136.265 321.001,136.265 
				321.001,179.284 277.983,179.284 277.983,136.265 			"
        />
        <polygon
          style="fill: #ffffff"
          points="198.3,179.284 198.3,136.265 241.318,136.265 241.318,179.284 277.983,179.284 
				277.983,222.302 234.964,222.302 234.964,179.284 			"
        />
        <rect
          x="112.263"
          y="222.302"
          style="fill: #ffffff"
          width="43.019"
          height="43.018"
        />
      </svg>
      <span>{{ $t("back") }}</span>
    </router-link>
    <h1>{{ $t("result", 2) }}</h1>
    <div class="results-details__event">
      <h3>{{ results.season }}</h3>
      <h3>{{ results.event[0].val }}</h3>
    </div>
    <div class="">
      <h3>{{ $t("pole") }}</h3>
      <h4>{{ results.poletime }}</h4>
    </div>
    <div class="results-details__tables">
      <ul>
        <h3>{{ $t("qualifying") }}</h3>
        <li v-for="pos in results.qualifying" :key="pos.id">
          <span class="pos">{{ pos.idx + 1 }}.</span><span>{{ pos.val }}</span>
        </li>
      </ul>
      <ul>
        <h3>{{ $t("race") }}</h3>
        <li v-for="pos in results.race" :key="pos.id">
          <span class="pos">{{ pos.idx + 1 }}.</span><span>{{ pos.val }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
//import { useI18n } from "vue-i18n";

export default {
  setup() {
    //const lang = ref(localStorage.getItem("lang") || "en");

    //const { t } = useI18n({ locale: lang.value });
    const route = useRoute();
    const store = useStore();
    store.dispatch("fetchf1result", route.params.eventId);
    const results = computed(() => store.getters.getf1result);
    return { results };
  },
};
</script>

<style lang="scss" scoped>
.results-details {
  margin: 1em 0;
  color: $astonmartin;

  .results-details__event {
    margin: 1em 0;
  }

  h1 {
    color: $mercedes;
  }

  h3 {
    color: $yellow;
    text-align: center;
  }

  h4 {
    color: whitesmoke;
  }

  .results-details__tables {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1em;
    text-align: left;
    column-gap: 1em;

    ul {
      list-style: none;
      color: whitesmoke;
      margin-bottom: 1em;

      li {
        display: grid;
        grid-template-columns: 40px 1fr;
      }
    }
  }
}
.back {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5em;

  span {
    font-variant: small-caps;
    color: $mercedes;
  }

  &:hover {
    svg {
      circle {
        fill: $astonmartin;
        transition: all 0.4s ease;
      }
      path {
        fill: $astonmartin;
        transition: all 0.4s ease;
      }
    }

    span {
      color: $astonmartin;
      transition: all 0.4s ease;
    }
  }
}
</style>
