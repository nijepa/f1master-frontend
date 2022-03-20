const routesAdmin = [
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
        meta: {
          panel: "admin",
        },
      },
      {
        path: "drivers",
        name: "drivers",
        component: () =>
          import(
            /* webpackChunkName: "admin" */ "../components/admin/PrimaryData.vue"
          ),
        meta: {
          dataModel: "drivers",
        },
      },
      {
        path: "teams",
        name: "teams",
        component: () =>
          import(
            /* webpackChunkName: "admin" */ "../components/admin/PrimaryData.vue"
          ),
        meta: {
          dataModel: "teams",
        },
      },
      {
        path: "events",
        name: "events",
        component: () =>
          import(
            /* webpackChunkName: "admin" */ "../components/admin/PrimaryData.vue"
          ),
        meta: {
          dataModel: "events",
        },
      },
    ],
  },
];
export default routesAdmin;
