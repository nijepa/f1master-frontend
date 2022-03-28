import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  // const currentUser = {
  //   id: 0,
  //   timestamp: "18/03/2022 18:52:21",
  //   name: "Rayanne",
  //   surname: "Pires",
  //   email: "rayannezinha@f1master.com",
  // }; //fb.auth().currentUser;

  // if (requiresAuth && !currentUser) {
  //   next("/");
  // } else if (requiresAuth && currentUser) {
  //   next();
  // } else {
  //   next();
  // }

  const publicPages = [
    "/",
    "/superlicense",
    "/registration",
    "/recovery-password",
    "/f1",
    "/news",
    "/socialmedia",
    "/about",
  ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/superlicense");
  } else {
    next();
  }
});

export default router;
