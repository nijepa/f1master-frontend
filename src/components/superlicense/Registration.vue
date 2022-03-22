<template>
  <div class="wrap">
    <div class="card">
      <div class="header">
        <div class="title">
          <h4>{{ state.formName }}</h4>
        </div>
        <div class="links">
          <router-link to="/superlicense"><a>Back</a></router-link>
        </div>
      </div>
      <div class="inputs">
        <input v-model="state.name" type="text" placeholder="name" class="" />
        <!-- <span v-if="v$.name.$error" style="color: coral">{{
          v$.name.$errors[0].$message
        }}</span> -->
        <input
          v-model="state.surname"
          type="text"
          placeholder="surname"
          class=""
        />
        <!-- <span v-if="v$.surname.$error" style="color: coral">{{
          v$.surname.$errors[0].$message
        }}</span> -->
        <input
          v-model="state.emailRegister"
          type="email"
          placeholder="email"
          class="emailRegister"
        />
        <!-- <span v-if="v$.emailRegister.$error" style="color: coral">{{
          v$.emailRegister.$errors[0].$message
        }}</span> -->
        <input
          v-model="state.password.password"
          type="password"
          placeholder="password"
          class="password"
        />
        <!-- <span v-if="v$.password.password.$error" style="color: coral">{{
          v$.password.password.$errors[0].$message
        }}</span> -->
        <input
          v-model="state.password.confirm"
          type="password"
          placeholder="password"
          class="password"
        />
        <!-- <span v-if="v$.password.confirm.$error" style="color: coral">{{
          v$.password.confirm.$errors[0].$message
        }}</span> -->
      </div>
      <div class="acceptTerms">
        <!-- <input type="checkbox" class="checkbox" v-model="state.aceptTerms"> -->
        <p><a>By clcking 'Confirm' you are acept terms and conditions</a></p>
      </div>

      <div class="btn">
        <button @click.prevent="submitForm">CONFIRM</button>
      </div>
    </div>
  </div>
</template>

<script>
// import useValidate from "@vuelidate/core";
// import {
//   required,
//   email,
//   minLength,
//   maxLength,
//   sameAs,
// } from "@vuelidate/validators";
import { reactive } from "vue";
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
    // const rules = computed(() => {
    //   return {
    //     name: { required, minLength: minLength(2), maxLength: maxLength(15) },
    //     surname: {
    //       required,
    //       minLength: minLength(2),
    //       maxLength: maxLength(15),
    //     },
    //     emailRegister: { required, email, minLength: minLength(3) },
    //     password: {
    //       password: { required, minLength: minLength(6) },
    //       confirm: { required, sameAs: sameAs(state.password.password) },
    //     },
    //   };
    // });
    // const v$ = useValidate(rules, state);
    function submitForm() {
      // this.v$.$validate();
      // if (!this.v$.$error) {
      //   alert("its ok");
      // } else {
      //   alert("check errors!!!");
      // }
    }
    return { state, submitForm };
  },
};
</script>

<style scoped>
.acceptTerms {
  padding: 30px 50px 0;
}
.wrap {
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 10px 20px;
}
.card {
  display: grid;
  justify-items: center;
  max-width: 350px;
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
  display: grid;
  /* grid-template-columns: 30px 200px; */
  align-items: baseline;
  /* justify-content: start;
justify-items: start; */
  color: #999999;
  width: 300px;
  margin-left: 0;
  padding: 30px 5px 0;
}
.keepCon p {
  display: inline;
  /* background: black; */
  padding: 2px;
  text-shadow: 2px 2px 3px black;
}
.keepCon,
p :active {
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
  border: none;
  font-size: 0.8rem;
  text-decoration: uppercase;
}
</style>
