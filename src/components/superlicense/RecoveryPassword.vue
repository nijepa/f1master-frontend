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

      <div class="inputs">
        <div class="input-field">
          <label>
            <input
              v-model="state.emailRegistration"
              type="email"
              placeholder=""
              class="emailRegistration"
            />
            <span>E-mail</span>
          </label>
          <span v-if="v$.emailRegistration.$error" class="error-msg">{{
            v$.emailRegistration.$errors[0].$message
          }}</span>
        </div>
      </div>

      <button @click.prevent="submitForm">CONFIRM</button>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      emailRegistration: "",
    });
    const rules = computed(() => {
      return {
        emailRegistration: { required, email, minLength: minLength(3) },
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

<style></style>
