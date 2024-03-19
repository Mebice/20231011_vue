import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/VtextAndVModel",
      name: "VtextAndVModel",
      component: () => import("../views/VtextAndVModel.vue"),
    },
    {
      path: "/Vfor",
      name: "Vfor",
      component: () => import("../views/Vfor.vue"),
    },
    {
      path: "/Von",
      name: "Von",
      component: () => import("../views/Von.vue"),
    },
    {
      path: "/Vbind",
      name: "Vbind",
      component: () => import("../views/Vbind.vue"),
    },
    {
      path: "/VifAndVshow",
      name: "VifAndVshow",
      component: () => import("../views/VifAndVshow.vue"),
    },
    {
      path: "/Hw",
      name: "Hw",
      component: () => import("../views/HW.vue"),
      children: [
        {
          path: "BNote",
          component: () => import("../components/BootstrapNote.vue"),
        },
        {
          path: "HwHome",
          component: () => import("../components/HwHome.vue"),
          alias:''
        },
      ],
    },    
    {
      path: "/VueRouter",
      name: "VueRouter",
      component: () => import("../views/VueRouter.vue"),
      children: [
        {
          path: "RouterComA",
          component: () => import("../components/RouterComA.vue"),
        },
        {
          path: "RouterComB",
          component: () => import("../components/RouterComB.vue"),
        },
      ]
    },
    {
      path: "/Props",
      name: "Props",
      component: () => import("../views/Props.vue"),
    },
    {
      path: "/Emit",
      name: "Emit",
      component: () => import("../views/Emit.vue"),
    },
    {
      path: "/Sign",
      name: "Sign",
      component: () => import("../views/Sign.vue"),
    },
    {
      path: "/ProvideAndInject",
      name: "ProvideAndInject",
      component: () => import("../views/ProvideAndInject.vue"),
    },
    {
      path: "/Accounting",
      name: "Accounting",
      component: () => import("../views/Accounting.vue"),
      children: [
        {
          path: "InputAcc",
          component: () => import("../components/InputAcc.vue"),
        },
        {
          path: "DeleteAcc",
          component: () => import("../components/DeleteAcc.vue"),
        },
      ]
    },
    {
      path: "/LoginAcc",
      name: "LoginAcc",
      component: () => import("../views/LoginAcc.vue"),
    },
    {
      path: "/SignupAcc",
      name: "SignupAcc",
      component: () => import("../views/SignupAcc.vue"),
    },
    {
      path: "/WatchAndComputed",
      name: "WatchAndComputed",
      component: () => import("../views/WatchAndComputed.vue"),
    },

  ],
});

export default router;
