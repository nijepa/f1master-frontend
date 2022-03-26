<template>
  <transition name="bounce" mode="out-in" appear>
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
.bounce-enter-active {
  animation: bounce-in 0.4s;
}
.bounce-leave-active {
  animation: bounce-in 0.4s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
