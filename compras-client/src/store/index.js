import Vue from 'vue'
import Vuex from 'vuex'

import cart from '@/store/modules/cart.store';
import negocios from '@/store/modules/negocios.store';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart: cart,
    negocios: negocios
  }
})
