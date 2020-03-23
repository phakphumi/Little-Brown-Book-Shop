import { shallowMount } from '@vue/test-utils';

import Layout from '@/components/Layout';

describe('App.vue', () => {
  it('must contains AppHeader, AppFooter, and Content inside', () => {
    const wrapper = shallowMount(Layout);
    expect(wrapper.find({ name: 'AppHeader' }).exists()).toBe(true);
    expect(wrapper.find({ name: 'AppFooter' }).exists()).toBe(true);
    expect(wrapper.find('.content').exists()).toBe(true);
  });
});
