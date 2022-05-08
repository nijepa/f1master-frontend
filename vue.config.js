module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },

  publicPath:
    process.env.NODE_ENV === "production" ? "/f1master_frontend/" : "/",

  lintOnSave: false,

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/global.scss";`,
      },
    },
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "F1Master";
      return args;
    });
    config.plugin("define").tap((args) => {
      args[0] = {
        ...args[0],
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
      };
      return args;
    });
  },
};
