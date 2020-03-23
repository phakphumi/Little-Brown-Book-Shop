import {
  createLocalVue,
  shallowMount,
} from '@vue/test-utils';
import Vuex from 'vuex';

import ItemList from '@/pages/PointOfSalePage/Cart/ItemList';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ItemList.vue', () => {
  let mutations;
  let store;
  let state;
  beforeEach(() => {
    state = {
      selectedBooks: {
        'number string': {
          title: 'any string',
          price: 500,
          quantity: 1,
        },
      },
    };

    mutations = {
      addToCart: jest.fn(),
      deductItemCount: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        cart: {
          state,
          mutations,
          namespaced: true,
        },
      },
    });
  });

  it('must contains No., Title, Price, Quantity as header title and contain book title in list', () => {
    const wrapper = shallowMount(ItemList, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });

    const headerWrapper = wrapper.find('.header');
    expect(headerWrapper.exists()).toBe(true);
    expect(headerWrapper.text()).toContain('No.');
    expect(headerWrapper.text()).toContain('Title');
    expect(headerWrapper.text()).toContain('Price');
    expect(headerWrapper.text()).toContain('Quantity');

    expect(wrapper.text()).toContain(state.selectedBooks['number string'].title);
    expect(wrapper.text()).toContain(state.selectedBooks['number string'].price);
  });
});
