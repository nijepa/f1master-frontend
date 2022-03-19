<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="panel__admin">
      <router-link class="link__admin" to="/fantasy">results</router-link>
      <router-link class="link__admin" to="/fantasy">teams</router-link>
      <router-link class="link__admin" to="/fantasy">drivers</router-link>
      <router-link class="link__admin" to="/fantasy">events</router-link>
      <router-link class="link__admin" to="/fantasy">users</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 2em;
  h1 {
    color: lightgreen;
  }
  .panel__admin {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(3, 150px);
    justify-content: center;
    column-gap: 1em;
    row-gap: 2em;
    .link__admin {
      background-color: #ffff00;
      color: black;
      padding: 1em;
      border-radius: 0.3em;
      text-decoration: none;
      font-variant: small-caps;
      font-family: "Play", cursive;
      transition: all 0.4s ease;
    }
    .link__admin:first-child,
    .link__admin:last-child {
      background-color: #fdd800;
      grid-column: 1/4;
    }
    .link__admin:hover {
      background: #ff2800;
      color: #fff;
    }
  }
}
</style>
