<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="wrap">
      <BetPanel />
      <br /><br /><br />
    </div>
  </transition>
</template>

<script>
import BetPanel from "../components/bet/BetPanel.vue";
export default {
  components: { BetPanel },
  setup() {
    return { BetPanel };
  },
};
</script>

<style scoped>
.wrap {
  display: grid;
  justify-items: center;
}
button {
  max-width: 400px;
}
</style>
