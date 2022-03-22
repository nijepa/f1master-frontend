<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="panel__admin">
      <router-link class="link__admin" to="/admin/results">results</router-link>
      <router-link class="link__admin" to="/admin/teams">teams</router-link>
      <router-link class="link__admin" to="/admin/drivers">drivers</router-link>
      <router-link class="link__admin" to="/admin/events">events</router-link>
      <router-link class="link__admin" to="/admin/users">users</router-link>
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
    color: $mercedes;
  }
  .panel__admin {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(3, 150px);
    justify-content: center;
    column-gap: 1em;
    row-gap: 2em;
    .link__admin {
      background-color: $mercedes-silver;
      color: $mclaren-orange;
      padding: 1em;
      border-radius: 0.3em;
      text-decoration: none;
      font-variant: small-caps;
      font-family: "Play", cursive;
      transition: all 0.4s ease;
    }
    .link__admin:first-child,
    .link__admin:last-child {
      background-color: $redbull-red;
      grid-column: 1/4;
    }
    .link__admin:last-child {
      background-color: $astonmartin;
    }
    .link__admin:hover {
      background: $ferrari-red;
      color: $haas-light;
    }
  }
}
@media (max-width: 992px) {
  .dashboard {
    .panel__admin {
      display: flex;
      flex-direction: column;
      max-width: 200px;
      margin: 0 auto;
      margin-top: 2em;
    }
  }
}
</style>
