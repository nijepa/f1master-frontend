<template>
  <div class="lang">
    <select name="" id="" v-model="$i18n.locale" @change="handleChange($event)">
      <option
        v-for="(locale, i) in locales"
        :key="`locale-${i}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const handleChange = (e) => {
      localStorage.setItem("lang", e.target.value);
      window.location.reload;
    };

    const locales = ref(["en", "pt"]);
    return { locales, handleChange };
  },
};
</script>

<style lang="scss" scoped>
select {
  background: transparent;
  border: none;
  border-radius: 4px;
  padding: 0 0.2em;
  height: 32px;
  color: $alphatauri;
  text-transform: uppercase;
  cursor: pointer;
  option {
    text-transform: uppercase;
    background: transparent;
  }
}
</style>
