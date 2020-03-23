import {
  createLocalVue,
  shallowMount,
} from '@vue/test-utils';
import Vuex from 'vuex';

import InsertCash from '@/pages/PointOfSalePage/PaymentModal/InsertCash';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('InsertCash.vue', () => {
  it('must show warnning text when receivedCash < totalCost', async () => {
    const store = new Vuex.Store({
      modules: {
        cart: {
          getters: { totalCost: () => 100 },
          namespaced: true,
        },
      },
    });

    const wrapper = shallowMount(InsertCash, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });

    expect(wrapper.text()).not.toContain('The received cash should greater than total cost.');

    wrapper.setData({ receivedCash: 80 });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('The received cash should greater than total cost.');

    wrapper.setData({ receivedCash: 100 });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).not.toContain('The received cash should greater than total cost.');
  });
});
