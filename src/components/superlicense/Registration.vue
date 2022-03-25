<template>
  <div class="wrap">
    <div class="auth-card">
      <div class="header">
        <div class="title">
          <h4>{{ state.formName }}</h4>
        </div>
        <div class="links">
          <router-link to="/superlicense"><a>Back</a></router-link>
        </div>
      </div>
      <div class="inputs">
        <div class="input-field">
          <label>
            <input v-model="state.name" type="text" placeholder="" class="" />
            <span>First Name</span>
          </label>
          <span v-if="v$.name.$error" class="error-msg">{{
            v$.name.$errors[0].$message
          }}</span>
        </div>
        <div class="input-field">
          <label>
            <input
              v-model="state.surname"
              type="text"
              placeholder=""
              class=""
            />
            <span>Last Name</span>
          </label>
          <span v-if="v$.surname.$error" class="error-msg">{{
            v$.surname.$errors[0].$message
          }}</span>
        </div>
        <div class="input-field">
          <label>
            <input
              v-model="state.emailRegister"
              type="email"
              placeholder=""
              class="emailRegister"
            />
            <span>E-mail</span>
          </label>
          <span v-if="v$.emailRegister.$error" class="error-msg">{{
            v$.emailRegister.$errors[0].$message
          }}</span>
        </div>
        <div class="input-field">
          <label>
            <input
              v-model="state.password.password"
              type="password"
              placeholder=""
              class="password"
            />
            <span>Password</span>
          </label>
          <span v-if="v$.password.password.$error" class="error-msg">{{
            v$.password.password.$errors[0].$message
          }}</span>
        </div>
        <div class="input-field">
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
        </div>
      </div>
      <div class="keepCon">
        <input
          id="keep"
          type="checkbox"
          class="checkbox"
          v-model="state.aceptTerms"
        />
        <label for="keep"
          >By clicking 'Confirm' you accept the terms and conditions</label
        >
      </div>

      <button @click.prevent="submitForm">CONFIRM</button>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      emailRegister: "",
      name: "",
      surname: "",
      password: {
        password: "",
        confirm: "",
      },
      aceptTerms: false,
      formName: "Register",
    });
    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(2), maxLength: maxLength(15) },
        surname: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(15),
        },
        emailRegister: { required, email, minLength: minLength(3) },
        password: {
          password: { required, minLength: minLength(6) },
          confirm: { required, sameAs: sameAs(state.password.password) },
        },
      };
    });
    const v$ = useValidate(rules, state);
    function submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("its ok");
      } else {
        alert("check errors!!!");
      }
    }
    return { state, v$, submitForm };
  },
};
</script>

<style scoped></style>
