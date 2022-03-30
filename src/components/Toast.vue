<template>
  <transition name="toast" appear>
    <div
      v-if="getToast"
      class="toast"
      :class="[toastData.colorVariant, toastData.position || 'top-right']"
    >
      <div
        class="toast-header d-flex"
        :class="`${getToast.colorVariant}_heading` || 'danger_heading'"
      >
        <strong class="me-auto">{{ toastData.title }}</strong>
        <button type="button" class="btn btn-primary" @click="dismiss">
          X
        </button>
      </div>
      <div
        class="toast-body text-wrap"
        :class="toastData.colorVariant || 'danger'"
      >
        <p>{{ toastData.message }}</p>
        <a v-if="toastData.link" :href="toastData.link">
          {{ toastData.buttonText }}
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ getToast: "getToast" }),
  },
  data() {
    return {
      timeout: null,
      toastData: {
        title: "",
        message: "",
        colorVariant: "",
        position: "top-rught",
        duration: 0,
        buttonText: "",
        link: "",
      },
    };
  },
  watch: {
    getToast() {
      if (this.getToast && this.getToast.duration) {
        setTimeout(() => {
          this.dismiss();
        }, this.getToast.duration * 1000);
      }
      if (this.getToast) {
        this.toastData = { ...this.getToast };
      }
    },
  },
  methods: {
    dismiss() {
      this.$store.dispatch("updateToast", null);
      clearTimeout(this.timeout);
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  margin: 1rem;
  padding-bottom: 0.5rem;
  z-index: 100;
  text-align: center;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.12);
  opacity: 0.9;
  // @include media-breakpoint-down(md) {
  //   margin: 0;
  // }

  .toast-header {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1em;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  .toast-body {
    padding: 1em 0.5em 0.5em 0.5em;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  button {
    background-color: $red;
    padding: 0.5rem;
    color: $yellow;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: lighten($red, 10%);
    }
  }
}

.top-right {
  top: 0;
  right: 0;
}

.top-leftt {
  top: 0;
  left: 0;
}

.center {
  top: 50%;
  left: 50%;
  //transform: translate(-50%, -50%);
}

.bottom-right {
  bottom: 0;
  right: 0;
}

.bottom-left {
  bottom: 0;
  left: 0;
}

.danger {
  background-color: lighten($red, 50%);
}
.danger_heading {
  background-color: $red;
  color: $yellow;
}

.info {
  background-color: lighten($mercedes, 30%);
}
.info_heading {
  background-color: $mercedes-silver;
  color: $yellow;
}

/* enter transitions */
.toast-enter-active {
  animation: wobble 0.5s ease;
}
/* leave transitions */
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.7s ease;
}
@keyframes wobble {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 0.3;
  }
  60% {
    transform: translateX(8px);
    opacity: 0.3;
  }
  70% {
    transform: translateX(-8px);
    opacity: 0.7;
  }
  80% {
    transform: translateX(4px);
    opacity: 0.7;
  }
  90% {
    transform: translateX(-4px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
