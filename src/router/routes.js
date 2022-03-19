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
    component: () =>
      import(/* webpackChunkName "play" */ "@/views/header/F1.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/news",
    component: () =>
      import(/* webpackChunkName "play" */ "@/views/header/News.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/socialmedia",
    component: () =>
      import(/* webpackChunkName "play" */ "@/views/header/SocialMedia.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/fantasy",
    component: () =>
      import(/* webpackChunkName "play" */ "@/views/header/Fantasy.vue"),
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
    path: "/recovery-password",
    component: () =>
      import(
        /* webpackChunkName "play" */ "@/components/superlicense/RecoveryPassword.vue"
      ),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/footer/About.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
    meta: {
      requiresAuth: true,
      layout: "AppLayoutAdmin",
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "admin" */ "../components/admin/Dashboard.vue"
          ),
      },
      {
        path: "results",
        name: "Results",
        component: () =>
          import(
            /* webpackChunkName: "admin" */ "../components/admin/Results.vue"
          ),
      },
      {
        path: "drivers",
        name: "Drivers",
        component: () =>
          import(
            /* webpackChunkName: "admin" */ "../components/admin/Drivers.vue"
          ),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
];
export default routes;
