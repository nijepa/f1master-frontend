<template>
  <transition name="route" mode="out-in">
    <AppLayout>
      <router-view :key="$route.path" v-slot="{ Component }">
        <component :is="Component"></component>
      </router-view>
    </AppLayout>
  </transition>
</template>

<style lang="scss">
@import "./assets/css/app.css";
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Play, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
  color: $alphatauri;
  height: 100vh;
}
.route-enter-from {
  opacity: 0;
  transform: scale(0.2);
}
.route-enter-active {
  transition: all 0.4s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: scale(0.2);
}
.route-enter-active {
  transition: all 0.4s ease-in;
}
</style>
