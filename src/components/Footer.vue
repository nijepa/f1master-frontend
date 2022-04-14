<template>
  <footer id="footer" class="footer">
    <router-link to="/about">{{ $t("about") }}</router-link>
    <router-link to="terms">{{ $t("terms") }}</router-link>
    <router-link to="/rules">{{ $t("rules") }}</router-link>
    <router-link to="/community">{{ $t("community") }}</router-link>
    <router-link to="/contact">{{ $t("contact") }}</router-link>
    <router-link to="/marketplace">{{ $t("marketplace") }}</router-link>
    <router-link to="/partners">{{ $t("partners") }}</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: black;
  box-shadow: 0px 0px 20px 1px #151515;

  a {
    line-height: 35px;
    padding: 20px;
    color: #555555;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.9px;
    text-shadow: 0px 0px 2px black;

    &:hover {
      line-height: 35px;
      text-decoration: none;
      color: white;
      transition: 0.4s;
    }
  }
}
</style>
