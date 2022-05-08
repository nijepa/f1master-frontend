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
      import(/* webpackChunkName "play" */ "@/components/bet/Draggable.vue"),
    meta: {
      layout: "AppLayoutHome",
      panel: "bet",
    },
  },
  {
    path: "/superlicense",
    component: () =>
      import(/* webpackChunkName "auth" */ "@/views/SuperLicense.vue"),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/registration",
    component: () =>
      import(
        /* webpackChunkName "auth" */ "@/components/superlicense/Registration.vue"
      ),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/recovery-password",
    component: () =>
      import(
        /* webpackChunkName "auth" */ "@/components/superlicense/RecoveryPassword.vue"
      ),
    meta: {
      layout: "AppLayoutHome",
    },
  },
  {
    path: "/profile",
    component: () =>
      import(
        /* webpackChunkName "auth" */ "@/components/superlicense/Profile.vue"
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
