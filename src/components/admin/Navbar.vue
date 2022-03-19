<template>
  <nav>
    <div class="navlink">
      <router-link class="logo" to="/"></router-link>
      <router-link to="/admin/teams">Teams</router-link>
      <router-link to="/admin/drivers">Drivers</router-link>
      <router-link to="/admin/events">Events</router-link>
    </div>
    <router-link class="btn btn1" to="/admin/results">RESULTS</router-link>
    <router-link class="btn btn2" to="/superlicense">USERS</router-link>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-content: center;
  background: linear-gradient(#000 2%, #0a0a0a 52%, #000);
  grid-gap: 5px;
  padding: 0 10px;
  box-shadow: 2px 0px 1px black;
  top: 0;
  height: 40px;
  z-index: 1;
}
.logo {
  height: 25px;
  align-self: center;
  align-items: center;
  align-content: center;
  min-width: auto;
  width: 110px;
  background: url("../../assets/logo.png") center / contain no-repeat;
}
.navlink {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (min-width: 720px) {
  .navlink {
    align-content: center;
    margin-top: 1.5px;
  }
}
.navlink a {
  color: #555555;
  font-size: 0.75rem;
  text-shadow: 0px 0px 8px #000000;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 5px 15px;
  transition: 0.4s;
  margin: 0;
  margin-top: -1px;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 1.5px;
  list-style: none;
}
.navlink a:hover {
  color: #ddd;
  text-shadow: 0px -1px 10px rgba(253, 216, 0, 0.5);
}
.navlink a.router-link-active {
  color: #fdd800;
  transition: 0.4s;
}
.btn {
  display: grid;
  width: 110px;
  max-width: 120px;
  min-width: 100px;
  padding: 0 10px;
  height: 25px;
  border-radius: 3px;
  align-content: center;
  align-self: center;
  text-align: center;
  text-decoration: none;
  justify-self: center;
  font-size: 0.65rem;
  font-family: "Play", cursive;
  font-weight: 700;
  cursor: pointer;
  transition: 0.4s;
}
.btn1:hover {
  color: white;
  background: red;
}
.btn1:active {
  color: white;
  background: red;
}

.btn1 {
  color: red;
  border: solid 1px red;
  background: rgba(255, 0, 0, 0.02);
}
.btn.btn2:hover,
.btn.btn2 a.router-link-active {
  color: white;
  background: green;
  border: solid 1px green;
}

.btn.btn2 {
  color: green;
  border: solid 1px green;
  background: rgba(0, 128, 0, 0.02);
}
</style>
