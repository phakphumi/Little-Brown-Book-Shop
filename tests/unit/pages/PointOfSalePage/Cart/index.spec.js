import { shallowMount } from '@vue/test-utils';

import Cart from '@/pages/PointOfSalePage/Cart';

describe('Cart.vue', () => {
  it('must contains ItemList, TotalCost, and ButtonGroup components', () => {
    const wrapper = shallowMount(Cart, { stubs: ['Col', 'Row'] });
    expect(wrapper.find({ name: 'ItemList' }).exists()).toBe(true);
    expect(wrapper.find({ name: 'TotalCost' }).exists()).toBe(true);
    expect(wrapper.find({ name: 'ButtonGroup' }).exists()).toBe(true);
  });
});
