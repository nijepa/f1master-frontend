<template>
  <div class="lang">
    <!-- <select name="" id="" v-model="$i18n.locale" @change="handleChange($event)"></select> -->
    <select name="" id="" v-model="locale" @change="handleChange($event)">
      <!-- <option
        v-for="(locale, i) in $i18n.availableLocales"
        :key="`locale-${i}`"
        :value="locale"
      > -->
      <option
        v-for="(locale, i) in availableLocales"
        :key="`locale-${i}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script>
//import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { locale, availableLocales } = useI18n();
    const handleChange = (e) => {
      localStorage.setItem("lang", e.target.value);
      window.location.reload;
    };

    return { locale, availableLocales, handleChange };
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
