import { createStore } from "vuex";
import auth from "./auth/index";
import permissions from "./permissions/index";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    permissions,
  },
});
