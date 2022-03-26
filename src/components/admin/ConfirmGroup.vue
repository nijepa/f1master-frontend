<template>
  <div class="btn-wrapper" :class="{ direction: 'direction' }">
    <button class="btn reset" @click="handleReset">{{ titleNo }}</button>
    <button class="btn confirm" @click="handleConfirmation">
      {{ titleYes }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ConfirmGroup",
  props: {
    titleYes: {
      type: String,
      default: "Confirm",
    },
    titleNo: {
      type: String,
      default: "Reset All",
    },
    direction: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const handleReset = () => {
      emit("reseted");
    };
    const handleConfirmation = () => {
      emit("confirmed");
    };
    return { handleReset, handleConfirmation };
  },
};
</script>

<style lang="scss">
.btn-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin-top: 1em;

  .btn {
    font-size: 0.8em;
    font-weight: 700;
    font-family: $font-main;
    width: 140px;
    height: 25px;
    cursor: pointer;
    margin: 0 5px;
    border-radius: 4px;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 15%);
    border: 1px solid transparent;
    transition: all 0.4s ease;
    text-transform: uppercase;

    &:hover {
      background-color: linear-gradient(#ffef93, #e8c500);
      letter-spacing: 1px;
    }
  }

  .reset {
    background: transparent;
    color: #ddd;
    margin-bottom: 1em;
  }

  .confirm {
    background: #fdd800;
    color: black;
    padding: 1em;
    height: auto;
  }
}
.direction {
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 1em;

  .reset {
    margin-bottom: 0;
  }
}
</style>
