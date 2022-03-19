<template>
  <input
    v-model="inputValue"
    :type="inputType"
    :placeholder="placeholder"
    :value="inputValue"
    @change="change"
  />
</template>

<script>
import { computed } from "vue";
export default {
  name: "defaultInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "enter",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const inputValue = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        emit("update:modelValue", value);
        emit("inputed", value);
      },
    });
    const change = () => {
      emit("changed", props.modelValue);
    };

    return { inputValue, change };
  },
};
</script>

<style lang="scss" scoped>
input {
  background: #101010;
  //height: 30px;
  border-radius: 4px;
  //width: 300px;
  border: none;
  color: #ddd;
  padding: 1em;
  //margin-top: 20px;
  letter-spacing: 1.5px;
  //font-size: 1rem;
}
.readonly {
  background-color: transparent;
  text-align: right;
  width: 50px;
}
</style>
