import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import UserModule from './User';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    User: UserModule,
  },
  plugins: [createPersistedState()],
});
