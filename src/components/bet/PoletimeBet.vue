<template>
  <div id="demo">
    <div class="cont">
      <inputComp
        placeholder="  0'00''000'''"
        class="input"
        :reseted="reseted"
        @select="getSelected"
        @cleared="reseted = false"
      />
    </div>
    <div class="btn">
      <button class="reset" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import inputComp from "./InputComponent.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  components: { inputComp },
  props: {
    resetAll: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const store = useStore();

    const selected = ref("");
    const getSelected = (val) => {
      selected.value = val;
    };

    const reseted = ref(false);
    const reset = () => {
      selected.value = 0;
      reseted.value = true;
    };
    watch(
      () => props.resetAll,
      (first) => {
        first && reset();
      }
    );

    watch(
      () => selected.value,
      (currentValue, oldValue) => {
        console.log(oldValue, currentValue);
        store.dispatch("liveBetUpdate", {
          type: "Pole",
          value: currentValue,
        });
      }
    );

    return { getSelected, reset, reseted };
  },
};
</script>

<style scoped>
.btn {
  height: 70px;
  justify-items: center;
  align-items: end;
  display: grid;
}
button {
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 0.8em;
  font-weight: 700;
  width: 140px;
  height: 25px;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 4px;
  box-shadow: 5px 5px 12px rgb(0 0 0 / 15%);
  border: 1px solid transparent;
  transition: all 0.4s ease;
  text-transform: uppercase;
}
.reset {
  background: #070707;
  color: #ddd;
  border: solid 1px #050505;
}
.confirm {
  background: #fdd800;
  color: black;
}
button:hover {
  background-color: linear-gradient(#ffef93, #e8c500);
  letter-spacing: 1px;
}
.btn {
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  align-items: baseline;
}
</style>
