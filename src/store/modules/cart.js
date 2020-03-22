import {
  reduce,
  toNumber,
} from 'lodash';
import Vue from 'vue';

const DISCOUNT_BOOKS = [
  '9781408855652',
  '9781408855669',
  '9781408855676',
  '9781408855683',
  '9781408855690',
  '9781408855706',
  '9781408855713',
];

export default {
  namespaced: true,
  state: {
    selectedBooks: {},
  },
  getters: {
    totalDiscount: (state) => {
      const selectedBooks = state.selectedBooks;

      const { uniqueBooks, uniqueBooksTotalCost } = reduce(DISCOUNT_BOOKS, (booksToDiscount, isbn) => {
        if (selectedBooks[isbn]) {
          booksToDiscount.uniqueBooks += 1;
          booksToDiscount.uniqueBooksTotalCost += selectedBooks[isbn].price;
        }
        return booksToDiscount;
      }, { uniqueBooks: 0, uniqueBooksTotalCost: 0 });

      switch (uniqueBooks) {
        case 0:
        case 1:
          return '0.00';
        case 2:
          return (0.1 * uniqueBooksTotalCost).toFixed(2);
        case 3:
          return (0.11 * uniqueBooksTotalCost).toFixed(2);
        case 4:
          return (0.12 * uniqueBooksTotalCost).toFixed(2);
        case 5:
          return (0.13 * uniqueBooksTotalCost).toFixed(2);
        case 6:
          return (0.14 * uniqueBooksTotalCost).toFixed(2);
        case 7:
        default:
          return (0.15 * uniqueBooksTotalCost).toFixed(2);
      }
    },
    totalCost: function (state, getter) {
      const totalCost = reduce(state.selectedBooks, (totalCost, { price, quantity }) => totalCost + (price * quantity), 0);
      return (totalCost - toNumber(getter.totalDiscount)).toFixed(2);
    },
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
