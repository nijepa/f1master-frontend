<template>
  <div class="wrap">
    <div class="auth-card">
      <div class="header">
        <div class="title">
          <h4>Register</h4>
        </div>
        <div class="links">
          <router-link to="/superlicense"><a>Back</a></router-link>
        </div>
      </div>
      <Form @submit="handleRegister" :validation-schema="schema" class="inputs">
        <div class="input-field">
          <label>
            <Field name="firstname" type="text" placeholder="" class="" />
            <span>First Name</span>
          </label>
          <ErrorMessage name="firstname" class="error-msg" />
        </div>
        <div class="input-field">
          <label>
            <Field name="lastname" type="text" placeholder="" class="" />
            <span>Last Name</span>
          </label>
          <ErrorMessage name="lastname" class="error-msg" />
        </div>
        <div class="input-field">
          <label>
            <Field
              name="email"
              type="email"
              placeholder=""
              class="emailRegister"
            />
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
            <span>Password</span>
          </label>
          <ErrorMessage name="password" class="error-msg" />
        </div>
        <!-- <div class="input-field">
          <label>
            <input
              v-model="state.password.confirm"
              type="password"
              placeholder=""
              class="password"
            />
            <span>Repeat password</span>
          </label>
          <span v-if="v$.password.confirm.$error" class="error-msg">{{
            v$.password.confirm.$errors[0].$message
          }}</span>
        </div> -->

        <div class="keepCon">
          <input id="keep" type="checkbox" class="checkbox" />
          <label for="keep"
            >By clicking 'Confirm' you accept the terms and conditions</label
          >
        </div>
        <div class="">
          <Loader v-if="loading" :btn="true" />
          <button v-else>CONFIRM</button>
        </div>
      </Form>
      <div v-if="message" :class="successful ? 'success-msg' : 'error-msg'">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Loader,
  },

  setup() {
    const schema = yup.object().shape({
      firstname: yup
        .string()
        .required("First is required!")
        .min(2, "Must be at least 2 characters!")
        .max(20, "Must be maximum 20 characters!"),
      lastname: yup
        .string()
        .required("Last is required!")
        .min(2, "Must be at least 2 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });

    const store = useStore();
    const route = useRoute();

    const successful = ref(false);
    const loading = ref(false);
    const message = ref("");

    const loggedIn = computed(() => store.state.auth.status.loggedIn);
    if (loggedIn.value) route.push("/");

    const handleRegister = (user) => {
      console.log(99, user);
      message.value = "";
      successful.value = false;
      loading.value = true;
      store.dispatch("register", user).then(
        (data) => {
          message.value = data.message;
          successful.value = true;
          loading.value = false;
        },
        (error) => {
          message.value =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          successful.value = false;
          loading.value = false;
        }
      );
    };

    return { loading, schema, handleRegister, successful, message };
  },
};
</script>

<style scoped></style>
