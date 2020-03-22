export default {
  namespaced: true,
  state: {
    receivedCash: 0,
    paymentStep: 0,
  },
  mutations: {
    paymentBtnClick (state) {
      state.paymentStep = 1;
    },
    receivedCashFromCustomer (state, cash) {
      state.receivedCash = cash;
    },
    clearPayment (state) {
      state.receivedCash = 0;
      state.paymentStep = 0;
    },
    nextPaymentStep (state) {
      state.paymentStep += 1;
    },
  },
};
