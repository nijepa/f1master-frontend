<template>
  <div class="home-wrapper">
    <div class="">
      <h1>{{ currentRace.name }}</h1>
      <Counter :end="currentRace.raceStart" />
    </div>
    <h1 class="home-msg">
      <router-link to="/superlicense" class="adv-link"
        >sign in/up to play</router-link
      >
    </h1>
    <div class="hello">
      <img src="@/assets/images/logo2.png" />
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import useCurrentRace from "@/composables/useCurrentRace";

export default {
  name: "HelloWorld",
  components: {
    Counter,
  },
  setup() {
    const currentRace = useCurrentRace();

    return { currentRace };
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

  .home-msg {
    text-transform: uppercase;

    .adv-link {
      color: $astonmartin;

      &:hover {
        color: $mercedes;
      }
    }
  }
}
</style>
