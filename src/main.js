import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Maska from "maska";
import dayjs from "dayjs";
import AppLayout from "./layouts/AppLayout";
import ClickOutside from "./composables/useClickOutside.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Maska);
app.config.globalProperties.$dayjs = dayjs;
app.directive("click-outside", ClickOutside);
app.component("AppLayout", AppLayout);
app.mount("#app");
