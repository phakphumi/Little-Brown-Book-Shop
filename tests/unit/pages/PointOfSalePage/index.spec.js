import { shallowMount } from '@vue/test-utils';

import PointOfSalePage from '@/pages/PointOfSalePage';

describe('App.vue', () => {
  it('must contains Bookshelf and PaymentModal components', () => {
    const wrapper = shallowMount(PointOfSalePage, { stubs: ['Col', 'Row'] });
    expect(wrapper.find({ name: 'Bookshelf' }).exists()).toBe(true);
    expect(wrapper.find({ name: 'PaymentModal' }).exists()).toBe(true);
  });
});
