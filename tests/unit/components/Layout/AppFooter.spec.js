import { shallowMount } from '@vue/test-utils';

import AppFooter from '@/components/Layout/AppFooter';

describe('App.vue', () => {
  it('must contains © LITTLE BROWN BOOK SHOP typo', () => {
    const wrapper = shallowMount(AppFooter, { stubs: ['Col', 'Row'] });
    expect(wrapper.text()).toContain('© LITTLE BROWN BOOK SHOP');
  });
});
