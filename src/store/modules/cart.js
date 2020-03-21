export default {
  namespaced: true,
  state: {
    selectedBooks: {},
  },
  mutations: {
    addToCart (state, { isbn, title, price }) {
      if (state.selectedBooks[isbn]) {
        state.selectedBooks[isbn].quantity++;
      } else {
        state.selectedBooks = {
          ...state.selectedBooks,
          [isbn]: {
            title,
            price,
            quantity: 1,
          },
        };
      }
    },
    deductItemCount (state, isbn) {
      if (!state.selectedBooks[isbn]) {
        return;
      } else if (state.selectedBooks[isbn].quantity > 1) {
        state.selectedBooks[isbn].quantity--;
      } else {
        delete state.selectedBooks[isbn];
      }
    },
    clearCart (state) {
      state.selectedBooks = {};
    },
  },
};
