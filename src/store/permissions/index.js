const state = {
  permissions: [],
};

const mutations = {
  SET_PERMISSIONS(state, permissions) {
    state.permissions = permissions;
  },
  RESET_PERMISSIONS(state) {
    state.permissions = [];
  },
};

const getters = {
  GET_PERMISSIONS(state) {
    return state.permissions;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
