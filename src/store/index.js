import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart';
import payment from './modules/payment';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    payment,
  },
});
