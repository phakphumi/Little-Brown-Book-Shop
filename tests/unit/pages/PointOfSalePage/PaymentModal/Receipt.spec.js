import { shallowMount } from '@vue/test-utils';

import Receipt from '@/pages/PointOfSalePage/PaymentModal/Receipt';


describe('SuccessfulPayment.vue', () => {
  it('must contain ItemList and TotalCost', async () => {
    const wrapper = shallowMount(Receipt);

    expect(wrapper.find({ name: 'ItemList' }).exists()).toBe(true);
    expect(wrapper.find({ name: 'TotalCost' }).exists()).toBe(true);
  });
});
