import { shallowMount } from '@vue/test-utils';

import SuccessfulPayment from '@/pages/PointOfSalePage/PaymentModal/SuccessfulPayment';

describe('SuccessfulPayment.vue', () => {
  it('must contain Successful Payment typo', async () => {
    const wrapper = shallowMount(SuccessfulPayment);

    expect(wrapper.text()).toContain('Successful Payment');
  });
});
