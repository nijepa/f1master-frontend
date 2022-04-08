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
            /* webpackChunkName: "admin" */ "../components/results/ResultsList.vue"
          ),
        meta: {
          panel: "admin",
        },
      },
      {
        path: "results/:eventId",
        name: "ResultsEvent",
        component: () =>
          import(
            /* webpackChunkName: "admin" */ "../components/results/ResultsDetails.vue"
          ),
        meta: {
          panel: "admin",
        },
      },
      {
        path: "results/new",
        name: "ResultsNew",
        component: () =>
          import(
            /* webpackChunkName: "admin" */ "../components/results/Results.vue"
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
      {
        path: "users",
        name: "users",
        component: () =>
          import(
            /* webpackChunkName: "admin" */ "../components/admin/Users.vue"
          ),
        meta: {
          dataModel: "users",
        },
      },
    ],
  },
];
export default routesAdmin;
