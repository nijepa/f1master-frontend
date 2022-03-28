<template>
  <div class="home-wrapper">
    <h1>{{ currentRace.name }}</h1>
    <Counter :end="currentRace.raceStart" />
    <div class="hello">
      <img src="@/assets/images/logo2.png" />
    </div>
    <button @click="logOut">sdf</button>
  </div>
</template>

<script>
//import { useStore } from "vuex";
//import { ref, computed, getCurrentInstance } from "vue";
import Counter from "@/components/Counter.vue";
import useCurrentRace from "@/composables/useCurrentRace";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "HelloWorld",
  components: {
    Counter,
  },
  setup() {
    const currentRace = useCurrentRace();

    const store = useStore();
    const router = useRouter();

    const logOut = () => {
      store.dispatch("logout");
      router.push("/");
    };

    return { currentRace, logOut };
  },
};
</script>

<style scoped lang="scss">
.home-wrapper {
  display: grid;
  align-items: center;
  height: 100%;
  grid-template-rows: auto auto 1fr;

  h1 {
    color: #fdd800;
    box-shadow: none;
    margin-top: 2em;
  }

  .hello {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
