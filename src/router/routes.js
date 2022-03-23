import routesAdmin from "./routesAdmin";
import routesInfo from "./routesInfo";

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
      import(/* webpackChunkName "plays" */ "@/views/PlayToEarn.vue"),
    meta: {
      layout: "AppLayoutHome",
      panel: "bet",
    },
  },
  {
    path: "/superlicense",
    component: () =>
      import(/* webpackChunkName "auths" */ "@/views/SuperLicense.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/registration",
    component: () =>
      import(
        /* webpackChunkName "auths" */ "@/components/superlicense/Registration.vue"
      ),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/recovery-password",
    component: () =>
      import(
        /* webpackChunkName "auths" */ "@/components/superlicense/RecoveryPassword.vue"
      ),
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
  ...routesInfo,
  ...routesAdmin,
];
export default routes;
