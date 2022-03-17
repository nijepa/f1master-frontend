const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName "home" */ "@/views/Home.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/playtoearn",
    component: () =>
      import(/* webpackChunkName "play" */ "@/views/PlayToEarn.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/f1",
    component: () => import(/* webpackChunkName "play" */ "@/views/F1.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/news",
    component: () => import(/* webpackChunkName "play" */ "@/views/News.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/socialmedia",
    component: () =>
      import(/* webpackChunkName "play" */ "@/views/SocialMedia.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/fantasy",
    component: () =>
      import(/* webpackChunkName "play" */ "@/views/Fantasy.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/superlicense",
    component: () =>
      import(/* webpackChunkName "play" */ "@/views/SuperLicense.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/registration",
    component: () =>
      import(
        /* webpackChunkName "play" */ "@/components/superlicense/Registration.vue"
      ),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
];
export default routes;
