import { computed, watch } from "vue";
import { useStore } from "vuex";

export default function () {
  const store = useStore();

  const currentUser = computed(() => store.state.auth.user);

  const setUserName = () => {
    if (currentUser.value) {
      currentUser.value.username =
        currentUser.value.firstname + " " + currentUser.value.lastname;
    }
  };
  setUserName();

  watch(
    () => currentUser.value,
    () => {
      setUserName();
    }
  );
  return currentUser;
}
