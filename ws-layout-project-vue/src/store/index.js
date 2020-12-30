import Vue from 'vue';
import Vuex from 'vuex';
import model from './model';
import modalState from './modalState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    model,
    modalState,
  },
});
