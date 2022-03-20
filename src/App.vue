<template>
  <AppLayout>
    <router-view :key="$route.fullPath" />
  </AppLayout>
</template>

<style lang="scss">
@import "./assets/css/app.css";
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Play, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
