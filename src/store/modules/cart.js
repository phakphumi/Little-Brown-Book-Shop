import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    selectedBooks: {},
  },
  mutations: {
    addToCart (state, { isbn, title, price }) {
      if (state.selectedBooks[isbn]) {
        Vue.set(state.selectedBooks[isbn], 'quantity', state.selectedBooks[isbn].quantity + 1);
      } else {
        Vue.set(state.selectedBooks, isbn, {
          title,
          price,
          quantity: 1,
        });
      }
    },
    deductItemCount (state, isbn) {
      if (!state.selectedBooks[isbn]) {
        return;
      } else if (state.selectedBooks[isbn].quantity > 1) {
        Vue.set(state.selectedBooks[isbn], 'quantity', state.selectedBooks[isbn].quantity - 1);
      } else {
        Vue.delete(state.selectedBooks, isbn);
      }
    },
    clearCart (state) {
      Vue.set(state, 'selectedBooks', {});
    },
  },
};
