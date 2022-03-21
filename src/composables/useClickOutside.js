export default {
  beforeMount: function (el, binding) {
    binding.event = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        if (binding.value instanceof Function) {
          binding.value(event);
        }
      }
    };
    setTimeout(() => document.body.addEventListener("click", binding.event), 0);
  },
  unmounted: function (el, binding) {
    document.body.removeEventListener("click", binding.event);
  },
};
