import {
  createLocalVue,
  shallowMount,
} from '@vue/test-utils';
import Vuex from 'vuex';

import PaymentModal from '@/pages/PointOfSalePage/PaymentModal';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('PaymentModal.vue', () => {
  it('must contain InsertCash when paymentStep=1', () => {
    const store = new Vuex.Store({
      modules: {
        payment: {
          state: { receivedCash: 0, paymentStep: 1 },
          namespaced: true,
        },
      },
    });

    const wrapper = shallowMount(PaymentModal, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });

    expect(wrapper.find({ name: 'InsertCash' }).exists()).toBe(true);
  });

  it('must contain InsertCash when paymentStep=1', () => {
    const store = new Vuex.Store({
      modules: {
        payment: {
          state: { receivedCash: 0, paymentStep: 1 },
          namespaced: true,
        },
      },
    });

    const wrapper = shallowMount(PaymentModal, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });

    expect(wrapper.find({ name: 'InsertCash' }).exists()).toBe(true);
  });

  it('must contain SuccessfulPayment when paymentStep=2', () => {
    const store = new Vuex.Store({
      modules: {
        payment: {
          state: { receivedCash: 0, paymentStep: 2 },
          namespaced: true,
        },
      },
    });

    const wrapper = shallowMount(PaymentModal, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });

    expect(wrapper.find({ name: 'SuccessfulPayment' }).exists()).toBe(true);
  });

  it('must contain Receipt when paymentStep=3', () => {
    const store = new Vuex.Store({
      modules: {
        payment: {
          state: { receivedCash: 0, paymentStep: 3 },
          namespaced: true,
        },
      },
    });

    const wrapper = shallowMount(PaymentModal, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });

    expect(wrapper.find({ name: 'Receipt' }).exists()).toBe(true);
  });

  it('must not contain any modal component when paymentStep=0', () => {
    const store = new Vuex.Store({
      modules: {
        payment: {
          state: { receivedCash: 0, paymentStep: 0 },
          namespaced: true,
        },
      },
    });

    const wrapper = shallowMount(PaymentModal, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });

    expect(wrapper.find({ name: 'InsertCash' }).exists()).toBe(false);
    expect(wrapper.find({ name: 'SuccessfulPayment' }).exists()).toBe(false);
    expect(wrapper.find({ name: 'Receipt' }).exists()).toBe(false);
  });
});
