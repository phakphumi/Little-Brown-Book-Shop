import { shallowMount } from '@vue/test-utils';

import AppFooter from '@/components/Layout/AppFooter';

describe('App.vue', () => {
  it('must logo class should contain Little Brown Book Shop typo', () => {
    const wrapper = shallowMount(AppFooter, { stubs: ['Col', 'Row'] });
    expect(wrapper.text()).toContain('© LITTLE BROWN BOOK SHOP');
  });
});
