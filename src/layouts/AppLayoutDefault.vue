<template>
  <div class="main">
    <slot />
  </div>
</template>
<style>
.main {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
