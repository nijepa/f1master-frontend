<template>
  <div class="main">
    <Navbar :navName="'admin'" />
    <!-- <AppLayoutLinks /> -->
    <slot />
    <Footer />
  </div>
</template>

<script>
//import AppLayoutLinks from '@/layouts/AppLayoutLinks'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "AppLayoutHome",
  components: {
    //AppLayoutLinks
    Navbar,
    Footer,
  },
};
</script>
<style></style>
