<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="wrap">
      <SignIn />
    </div>
  </transition>
</template>

<script>
import SignIn from "@/components/superlicense/SignIn.vue";
export default {
  components: {
    SignIn,
  },
  setup() {},
};
</script>

<style scoped></style>
