<template>
  <div class="wrap">
    <div class="auth-card">
      <div class="header">
        <div class="title">
          <h4>Password<br />Recovery</h4>
        </div>

        <div class="links">
          <router-link to="/superlicense"><a>Back</a></router-link>
        </div>
      </div>

      <Form @submit="handleRegister" :validation-schema="schema" class="inputs">
        <div class="input-field">
          <label>
            <Field
              name="email"
              type="email"
              placeholder=""
              class="emailRegistration"
            />
            <span>E-mail</span>
          </label>
          <ErrorMessage name="email" class="error-msg" />
        </div>
      </Form>

      <button @click.prevent="submitForm">CONFIRM</button>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
    });

    const message = ref("");

    const store = useStore();
    const router = useRouter();

    const handleRegister = (user) => {
      store.dispatch("login", user).then(
        () => {
          router.push("/profile");
        },
        (error) => {
          message.value =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    };

    return { schema, handleRegister };
  },
};
</script>

<style></style>
