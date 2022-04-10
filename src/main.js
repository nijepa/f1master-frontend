import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Maska from "maska";
import dayjs from "dayjs";
import AppLayout from "./layouts/AppLayout";
import ClickOutside from "./composables/useClickOutside.js";

// import translation from "./config/translation";
// import { createI18n } from "vue-i18n";
import i18n from "./i18n";

// const i18n = createI18n({
//   legacy: false,
//   locale: localStorage.getItem("lang") || "en",
//   messages: {
//     en: translation["en-US"],
//     pt: translation["pt-BR"],
//   },
//   fallbackLocale: "en",
// });

const app = createApp(App).use(i18n);
app.use(store);
app.use(router);
app.use(i18n);
app.use(Maska);
app.config.globalProperties.$dayjs = dayjs;
//app.config.globalProperties.$t = i18n;
app.directive("click-outside", ClickOutside);
app.component("AppLayout", AppLayout);
app.mount("#app");
