<template>
  <footer id="footer" class="footer">
    <div id="footerItens" class="footerItens">
      <router-link to="/about">About F1Master</router-link>
      <router-link to="terms">Terms & Conditions</router-link>
      <!-- <router-link to="/rules">Rules</router-link> -->
      <router-link to="/community">Community</router-link>
      <!-- <router-link to="/contact">Contact</router-link> -->
      <router-link to="/marketplace">Marketplace</router-link>
      <!-- <router-link to="/partners">Partners</router-link> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background: black;
  padding: 10px;
  box-shadow: 0px 0px 20px 1px #151515;
  bottom: 0;
}
footer a:hover {
  line-height: 35px;
  text-decoration: none;
  color: white;
  transition: 0.4s;
}
footer a {
  line-height: 35px;
  text-decoration: none;
  padding: 20px;
  color: #555555;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.9px;
  text-shadow: 0px 0px 2px black;
}
</style>
