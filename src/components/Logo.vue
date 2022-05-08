<template>
  <component :is="currentIcon" style="width: 30px; height: 30px" />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  props: {
    name: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    currentIcon() {
      return defineAsyncComponent(() =>
        import(`@/assets/images/teams/${this.name}.svg`)
      );
    },
  },
};
</script>
