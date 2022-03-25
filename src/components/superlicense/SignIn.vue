<template>
  <div class="auth-card">
    <div class="header">
      <div class="title">
        <h4>{{ state.formName }}</h4>
      </div>

      <div class="links">
        <router-link to="/registration"><a>Not a member yet?</a></router-link>
        <router-link to="/recovery-password"
          ><a>Recovery Password?</a></router-link
        >
      </div>
    </div>

    <div class="inputs">
      <div class="input-field">
        <label>
          <input
            type="email"
            placeholder=""
            class="emailLogin"
            v-model="state.emailLogin"
          />
          <span>E-mail</span>
        </label>
        <span v-if="v$.emailLogin.$error" class="error-msg">{{
          v$.emailLogin.$errors[0].$message
        }}</span>
      </div>
      <div class="input-field">
        <label>
          <input
            type="password"
            placeholder=""
            class="password"
            v-model="state.password"
          />
          <span>Password</span>
        </label>
        <span v-if="v$.password.$error" class="error-msg">{{
          v$.password.$errors[0].$message
        }}</span>
      </div>
    </div>

    <div class="keepCon">
      <input
        id="keep"
        v-model="state.keepConnected"
        type="checkbox"
        class="checkbox"
      />
      <label for="keep">Keep Connected</label>
    </div>

    <button @click.prevent="submitForm">CONFIRM</button>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      emailLogin: "",
      password: "",
      keepConnected: false,
      formName: "SignIn",
    });
    const rules = computed(() => {
      return {
        emailLogin: { required, email, minLength: minLength(3) },
        password: { required, minLength: minLength(6) },
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

<style lang="scss" scoped></style>
