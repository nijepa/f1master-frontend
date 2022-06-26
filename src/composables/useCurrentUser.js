import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useUserStore } from "@/store/user";

export default function () {
  const store = useStore();
  const auth = useUserStore();

  //const currentUser = computed(() => store.state.auth.user);
  const currentUser = computed(() => auth.initialState.user);

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
