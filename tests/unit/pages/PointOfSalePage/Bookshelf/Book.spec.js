import {
  createLocalVue,
  shallowMount,
} from '@vue/test-utils';
import Vuex from 'vuex';

import Book from '@/pages/PointOfSalePage/Bookshelf/Book';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Book.vue', () => {
  let mutations;
  let store;

  beforeEach(() => {

    mutations = {
      addToCart: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        cart: {
          mutations,
          namespaced: true,
        },
      },
    });
  });

  it('must contains img title and price from prop', async () => {
    const propsData = {
      title: 'any string',
      price: 300,
      coverUrl: 'http://string/',
      isbn: 'number string',
    };
    const wrapper = shallowMount(Book, {
      propsData,
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });
    expect(wrapper.find('img').attributes('src')).toBe(propsData.coverUrl);
    expect(wrapper.find('.title').text()).toContain(propsData.title);
    expect(wrapper.find('.priceBar').text()).toContain(propsData.price);

    wrapper.vm.addToCart();
    expect(mutations.addToCart).toHaveBeenCalled();
  });
});
