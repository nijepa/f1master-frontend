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
      type: [String, Number, Boolean],
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
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
  background: rgba(16, 16, 16, 0.502);
  border-radius: 4px;
  border: none;
  color: white;
  padding: 1em;
  letter-spacing: 1.5px;
  transition: all 0.4s ease;

  &:focus,
  &:hover {
    background: rgba(16, 16, 16, 1);
    outline: none;
    -webkit-box-shadow: inset 0px 0px 1px 1px $haas;
    box-shadow: inset 0px 0px 1px 1px $haas;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &[type="checkbox"] {
    cursor: pointer;
    accent-color: $astonmartin;
    height: 100%; /* not needed */
    width: 1.5em; /* not needed */
    outline: none;

    &:hover,
    &:focus {
      box-shadow: none;
    }
  }
}

.readonly {
  background-color: transparent;
  text-align: right;
  width: 50px;
}

// /* Chrome, Safari, Edge, Opera */
// input::-webkit-outer-spin-button,
// input::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }

/* Firefox */
// input[type="number"] {
//   -moz-appearance: textfield;
// }

// input[type="checkbox"] {
//   cursor: pointer;
//   accent-color: $astonmartin;
//   height: 100%; /* not needed */
//   width: 1.5em; /* not needed */
//   outline: none;

//   &:hover,
//   &:focus {
//     box-shadow: none;
//   }
// }
</style>
