import {
  createLocalVue,
  shallowMount,
} from '@vue/test-utils';
import Vuex from 'vuex';

import TotalCost from '@/pages/PointOfSalePage/Cart/TotalCost';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('TotalCost.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store();
  });

  it('must hide Cash and Change if isChangeEnabled prop is false', () => {
    const wrapper = shallowMount(TotalCost, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
    });

    expect(wrapper.text()).not.toContain('Cash');
    expect(wrapper.text()).not.toContain('Change');
  });

  it('must show Cash and Change if isChangeEnabled prop is true', () => {
    const wrapper = shallowMount(TotalCost, {
      store,
      localVue,
      stubs: ['Col', 'Row'],
      propsData: {
        isChangeEnabled: true,
      },
    });

    expect(wrapper.text()).toContain('Cash');
    expect(wrapper.text()).toContain('Change');
  });
});
