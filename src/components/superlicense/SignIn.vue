<template>
  <div class="card">
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
      <input
        v-model="state.emailLogin"
        type="email"
        placeholder="email"
        class="emailLogin"
      />
      <span>{{ errorMessage }}</span>
      <input
        v-model="state.password"
        type="password"
        placeholder="password"
        class="password"
      />
      <span>{{ errorMessage }}</span>
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

    <div class="btn">
      <button @click.prevent="submitForm">CONFIRM</button>
    </div>
  </div>
</template>

<script>
// import useValidate from "@vuelidate/core";
// import { required, email, minLength } from "@vuelidate/validators";
import { reactive } from "vue";
import { useField } from "vee-validate";
export default {
  setup() {
    const state = reactive({
      emailLogin: "",
      password: "",
      keepConnected: false,
      formName: "SignIn",
    });
    function validateField(value) {
      if (!value) {
        return "this field is required";
      }

      if (value < 8) {
        return "this field must contain at least 8 characters";
      }

      return true;
    }

    const { value, errorMessage } = useField(state.emailLogin, validateField);

    const submitForm = () => {
      validateField(state.emailLogin);
    };

    return { state, errorMessage, value, submitForm };
  },
};
</script>

<style scoped>
.wrap {
  display: grid;
  justify-content: center;
  padding: 10px 20px;
}
.card {
  display: grid;
  justify-items: center;
  width: 400px;
  height: auto;
  background: #060606;
  border-radius: 4px;
  border: solid 3px #070707;
  box-shadow: #272727 0px 0px 6px;
  transition: 600ms;
}
.card:hover {
  /* box-shadow: darkgray 0px 0px 6px; */
  transition: 600ms;
  cursor: pointer;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
}
h4 {
  font-weight: 700;
  text-shadow: 2px 2px 4px black;
  letter-spacing: 1px;
  box-shadow: none;
  border: none;
  font-size: 2.2rem;
}
h4:hover {
  color: white;
}
.links {
  display: grid;
  justify-items: end;
  text-align: left;
}
a {
  font-weight: 700;
  letter-spacing: 0.8px;
  text-decoration: none;
  color: #999999;
  text-shadow: 2px 2px 3px black;
  padding: 2px 0;
  /* background: black; */
}
a :hover {
  color: lightgreen;
  transition: 500ms;
}
.dataInputs {
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
}
input {
  display: grid;
  justify-items: center;
  background: #101010;
  height: 30px;
  border-radius: 4px;
  width: 300px;
  border: none;
  color: #ddd;
  padding: 25px;
  margin-top: 20px;
  letter-spacing: 1.5px;
  font-size: 1rem;
}
.keepCon {
  display: flex;
  align-items: end;
  column-gap: 1em;
  color: #999999;
  width: 300px;
  padding: 1em 0;
}

.keepCon label {
  text-shadow: 2px 2px 3px black;
  color: #999999;
  cursor: pointer;
}
input[type="checkbox"]:checked + label {
  color: lightgreen;
}
.keepCon p {
  display: inline;
  /* background: black; */
  padding: 2px;
}
.keepCon,
label:active {
  color: lightgreen;
}
.checkbox {
  width: 20px;
  height: 20px;
  border: #999999;
  /* background: black;     */
}
.btn {
  display: grid;
  padding: 20px;
}
button {
  display: grid;
  width: 200px;
  padding: 0 10px;
  height: 35px;
  border-radius: 4px;
  align-content: center;
  align-self: center;
  text-align: center;
  text-decoration: none;
  justify-self: center;
  font-family: "Play", cursive;
  font-weight: 700;
  cursor: pointer;
  transition: 0.4s;
  background: #fdd800;
  /* border: none; */
  border: 2px solid transparent;
  font-size: 0.8rem;
  text-decoration: uppercase;
}
button:hover {
  border: 2px solid #ffea72;
}
</style>
