const routesInfo = [
  {
    path: "/f1",
    component: () =>
      import(/* webpackChunkName "info" */ "@/views/header/F1.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/news",
    component: () =>
      import(/* webpackChunkName "info" */ "@/views/header/News.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/socialmedia",
    component: () =>
      import(/* webpackChunkName "info" */ "@/views/header/SocialMedia.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/fantasy",
    component: () =>
      import(/* webpackChunkName "info" */ "@/views/header/Fantasy.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/footer/About.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
];
export default routesInfo;
