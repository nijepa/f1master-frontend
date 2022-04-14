<template>
  <div class="auth-card">
    <div class="header">
      <div class="title">
        <h4>{{ $t("signin") }}</h4>
      </div>

      <div class="links">
        <router-link to="/registration"
          ><a>{{ $t("notmember") }}</a></router-link
        >
        <router-link to="/recovery-password"
          ><a>{{ $t("recoverypass") }}</a></router-link
        >
      </div>
    </div>

    <Form @submit="handleLogin" :validation-schema="schema" class="inputs">
      <div class="input-field">
        <label>
          <Field name="email" type="email" placeholder="" class="emailLogin" />
          <span>E-mail</span>
        </label>
        <ErrorMessage name="email" class="error-msg" />
      </div>
      <div class="input-field">
        <label>
          <Field
            name="password"
            type="password"
            placeholder=""
            class="password"
          />
          <span>{{ $t("password") }}</span>
        </label>
        <ErrorMessage name="password" class="error-msg" />
      </div>

      <div class="keepCon">
        <input id="keep" type="checkbox" class="checkbox" />
        <label for="keep">{{ $t("keepcon") }}</label>
      </div>
      <Loader v-if="loading" :btn="true" />
      <button v-else>{{ $t("Confirm").toUpperCase() }}</button>
    </Form>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Loader,
  },

  setup() {
    const schema = yup.object().shape({
      email: yup.string().required("E-mail is required!"),
      password: yup.string().required("Password is required!"),
    });
    const loading = ref(false);
    const message = ref("");

    const store = useStore();
    const router = useRouter();

    const loggedIn = computed(() => store.state.auth.status.loggedIn);
    if (loggedIn.value) router.push("/");

    const handleLogin = (user) => {
      loading.value = true;
      store.dispatch("login", user).then(
        () => {
          router.push("/profile");
        },
        (error) => {
          loading.value = false;
          message.value =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    };

    return { loading, schema, handleLogin, message };
  },
};
</script>

<style lang="scss" scoped></style>
