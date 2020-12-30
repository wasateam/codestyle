export default {
  namespaced: true,
  state: {
    indexMsg: '',
  },
  mutations: {
    SET_INDEX_MSG(state, data) {
      state.indexMsg = data;
    },
  },
  actions: {
    setIndexMsg({ commit }, data) {
      commit('SET_INDEX_MSG', data);
    },
  },
};
