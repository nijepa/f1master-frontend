<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="wrap">
      <BetPanel />
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
  display: flex;
}
</style>
