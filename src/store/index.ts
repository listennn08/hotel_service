import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    locale: 'en',
    currency: 'TWD',
  }),

  getters: {
    locale: (stat) => stat.locale,
    currency: (stat) => stat.currency,
  },

  mutations: {
    CHANGE_LOCALE(stat, payload) {
      Vue.set(stat, 'locale', payload);
    },
    CHANGE_CURRENCY(stat, payload) {
      Vue.set(stat, 'currency', payload);
    },
  },
});
