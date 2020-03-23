import { shallowMount } from '@vue/test-utils';

import App from '@/App';

describe('App.vue', () => {
  it('must contains Layout and PointOfSalePage inside', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find({ name: 'Layout' }).exists()).toBe(true);
    expect(wrapper.find({ name: 'PointOfSalePage' }).exists()).toBe(true);
  });
});
