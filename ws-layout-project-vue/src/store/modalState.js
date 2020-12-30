export default {
  namespaced: true,
  state: {
    modal: {
      isShow: false,
      title: '',
      content: '',
    },
  },
  mutations: {
    SET_MODAL_OPEN(state, data) {
      state.modal = {
        isShow: true,
        ...data,
      };
    },
    SET_MODAL_CLOSE(state) {
      state.modal = {
        isShow: false,
        title: '',
        content: '',
      };
    },
  },
  actions: {
    setModalOpen({ commit }, data) {
      commit('SET_MODAL_OPEN', data);
    },
    setModalClose({ commit }) {
      commit('SET_MODAL_CLOSE');
    },
  },
};
