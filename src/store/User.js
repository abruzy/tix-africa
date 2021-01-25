import { allUsers } from '../utils/data';

const UserModule = {
  namespaced: true,

  state: {
    users: allUsers,
    selectedUser: null,
  },

  mutations: {
    SET_USER(state, user) {
      state.selectedUser = user;
    },
  },

  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
  },
};

export default UserModule;
