<template>
  <h3 class="loading">
    <div id="loading4"></div>
    <span>loading ...</span>
  </h3>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%);

  span {
    color: $red;
  }
}
#loading4 {
  width: 2em;
  height: 2em;
  background: transparent;
  border-radius: 2em;
  border: 0.5em solid $ferrari;
  position: relative;
  border-bottom-color: rgba($ferrari, 0.5);

  &::after {
    position: absolute;
    top: 0.25em;
    left: 0.25em;
    width: 0.5em;
    height: 0.5em;
    content: "";
    display: block;
    background: $ferrari;
    border-radius: 1em;
  }

  &::before {
    position: absolute;
    bottom: 0.5em;
    left: 0.25em;
    content: "";
    display: block;
    background: transparent;
    transform-origin: 50% 100%;
    border-bottom: 0.5em solid $yellow;
    border-right: 0.25em solid transparent;
    border-left: 0.25em solid transparent;
    animation: loading4 6s infinite;
  }
}

@keyframes loading4 {
  0% {
    transform: rotate(-135deg);
    opacity: 0;
  }
  10% {
    transform: rotate(-135deg);
    opacity: 1;
  }
  30% {
    transform: rotate(-50deg);
  }
  40% {
    transform: rotate(-70deg);
  }
  60% {
    transform: rotate(35deg);
  }
  70% {
    transform: rotate(30deg);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  90% {
    transform: rotate(135deg);
    opacity: 1;
  }
  100% {
    transform: rotate(135deg);
    opacity: 0;
  }
}
</style>
