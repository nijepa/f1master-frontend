<template>
  <div class="profile">
    <div class="profile-wrapper">
      <header>
        <h2>Profile</h2>
        <h1>{{ currentUser?.firstname }} {{ currentUser?.lastname }}</h1>
      </header>
      <p>
        E-mail:
        {{ currentUser?.email }}
      </p>
      <p>Joined: {{ currentUser?.createdAt.slice(0, 10) }}</p>
      <ul>
        <li v-for="role in currentUser?.roles" :key="role">{{ role }}</li>
      </ul>
      <button @click="logOut" class="btn-logout">Log Out</button>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, onMounted } from "vue";

export default {
  name: "Profile",
  setup() {
    const store = useStore();
    const router = useRouter();

    const logOut = () => {
      store.dispatch("logout");
      router.push("/");
    };

    const currentUser = computed(() => store.state.auth.user);

    onMounted(() => {
      if (!currentUser.value) router.push("/login");
    });

    return { currentUser, logOut };
  },
};
</script>
<style lang="scss" scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .profile-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    row-gap: 1em;
    background-color: rgba(11, 31, 42, 0.7);
    border-radius: 8px;
    padding: 1em;
    font-family: $font-main;
    color: white;

    .btn-logout {
      font: inherit;
      color: inherit;
      background-color: $red;
      border: 1px solid transparent;
      border-radius: 4px;
      margin-top: 1em;
      padding: 0.5em 1em;
      cursor: pointer;

      &:hover {
        background-color: $redbull-red;
        color: $redbull-yellow;
      }
    }
  }
}
</style>
