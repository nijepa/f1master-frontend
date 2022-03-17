<template>
  <div class="bgError">
    <div class="container">
      <h1>404</h1>
      <h2>Oops. Nothing here...</h2>
      <router-link class="link-home" to="/">
        Go Home
        <svg
          width="52px"
          height="52px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="red"
            d="M355.975 292.25a24.82 24.82 0 1 0 24.82-24.81 24.84 24.84 0 0 0-24.82 24.81zm-253-24.81a24.81 24.81 0 1 1-24.82 24.81 24.84 24.84 0 0 1 24.81-24.81zm-76.67-71.52h67.25l-13.61 49.28 92-50.28h57.36l1.26 34.68 32 14.76 11.74-14.44h15.62l3.16 16c137.56-13 192.61 29.17 192.61 29.17s-7.52 5-25.93 8.39c-3.88 3.31-3.66 14.44-3.66 14.44h24.2v16h-52v-27.48c-1.84.07-4.45.41-7.06.47a40.81 40.81 0 1 0-77.25 23h-204.24a40.81 40.81 0 1 0-77.61-17.67c0 1.24.06 2.46.17 3.67h-36z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style lang="scss" scoped>
.bgError {
  display: grid;
  justify-items: center;
  align-items: center;
  min-height: 100vh;
  background: url("../assets/under-construction.png") center / cover no-repeat
    black;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 100px;
  color: #ddd;
  text-shadow: 0px 0px 10px black;
  background: rgba(0, 0, 0, 0.7);
}
.link-home {
  display: flex;
  align-items: center;
  column-gap: 0.5em;
  color: #ff2800;
  font-variant: all-small-caps;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.4s ease;
  svg path {
    fill: #ff2800;
    transition: all 0.4s ease;
  }
}
.link-home:hover {
  color: #fc4d2e;
  svg path {
    fill: #fc4d2e;
  }
}
</style>
