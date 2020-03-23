import {
  createLocalVue,
  shallowMount,
} from '@vue/test-utils';
import Vuex from 'vuex';

import ButtonGroup from '@/pages/PointOfSalePage/Cart/ButtonGroup';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ButtonGroup.vue', () => {
  let store;
  let cartState;
  let cartMutations;
  let paymentState;
  let paymentMutations;

  let wrapper;

  beforeEach(() => {
    cartState = {
      selectedBooks: {
        'number string': {
          title: 'any string',
          price: 500,
          quantity: 1,
        },
      },
    };

    cartMutations = {
      clearCart: jest.fn(),
    };

    paymentState = {
      receivedCash: 0,
      paymentStep: 0,
    };

    paymentMutations = {
      paymentBtnClick: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        cart: {
          state: cartState,
          mutations: cartMutations,
          namespaced: true,
        },
        payment: {
          state: paymentState,
          mutations: paymentMutations,
          namespaced: true,
        },
      },
    });

    wrapper = shallowMount(ButtonGroup, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });
  });

  it('must contain Clear and Payment button', () => {
    expect(wrapper.find('#clear-cart-btn').text()).toBe('Clear Cart');
    expect(wrapper.find('#payment-btn').text()).toBe('Payment');
  });
});
