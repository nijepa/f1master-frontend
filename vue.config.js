module.exports = {
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
};
