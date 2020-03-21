export default {
  state: {
    selectedBooks: {},
  },
  mutations: {
    pickBook ({ selectedBooks }, { isbn, title, price }) {
      if (selectedBooks[isbn]) {
        selectedBooks[isbn].quantity++;
      } else {
        selectedBooks = {
          ...selectedBooks,
          [isbn]: {
            title,
            price,
            quantity: 1,
          },
        };
      }
    },
    removeBook ({ selectedBooks }, isbn) {
      if (!selectedBooks[isbn]) {
        return;
      } else if (selectedBooks[isbn].quantity > 1) {
        selectedBooks[isbn].quantity--;
      } else {
        delete selectedBooks[isbn];
      }
    },
    clearBooks (state) {
      state.selectedBooks = {};
    },
  },
};
