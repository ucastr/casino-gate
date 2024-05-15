import { createWebHistory, createRouter } from "vue-router";
import { IS_USER_AUTHENTICATED } from "../store/storeconstants";
import store from "../store";
import LoginView from "../components/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../components/DashboardView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/marketplace",
    name: "Marketplace",
    component: () => import("../components/MarketPlace/MarketPlaceList.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/marketplace/add:id",
    name: "Marketplace Add",
    component: () => import("../components/MarketPlace/MarketPlaceAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/marketplace/edit:id",
    name: "Marketplace Edit",
    component: () => import("../components/MarketPlace/MarketPlaceEdit.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/marketplace/show:id",
    name: "Marketplace Show",
    component: () => import("../components/MarketPlace/MarketPlaceShow.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tournaments",
    name: "Tournaments",
    component: () => import("../components/Tournaments/TournamentsList.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tournaments/add:id",
    name: "Tournaments Add",
    component: () => import("../components/Tournaments/TournamentsAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tournaments/edit:id",
    name: "Tournaments Edit",
    component: () => import("../components/Tournaments/TournamentsEdit.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tournaments/show:id",
    name: "Tournaments Show",
    component: () => import("../components/Tournaments/TournamentsShow.vue"),
    meta: { requiresAuth: true },
  },
  /*
  {
    path: "/gamemanager",
    name: "GameManager",
    component: () => import("../components/GameManager/GameManagerView.vue"),
    meta: { requiresAuth: true },
  },
 
  {
    path: "/configuration",
    name: "Configuration",
    component: () => import("../components/Configuration/ConfigurationView.vue"),
    meta: { requiresAuth: true },
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters[`auth/${IS_USER_AUTHENTICATED}`];

  console.log("isAuthenticated == ", isAuthenticated);
  // Verificar se a rota requer autenticação
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Se a rota requer autenticação e o utilizador não estiver autenticado, redirecione para a página de login
    if (!isAuthenticated) {
      next({
        path: "/",
        query: { redirect: to.fullPath }, // Salva o caminho para redirecionar de volta após o login
      });
    } else {
      // Se o utilizador estiver autenticado, prossegue para a próxima rota
      next();
    }
  } else {
    // Se a rota não requer autenticação, prossegue para a próxima rota
    next();
  }
});

export default router;
