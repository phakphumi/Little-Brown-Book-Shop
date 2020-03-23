import { shallowMount } from '@vue/test-utils';

import AppHeader from '@/components/Layout/AppHeader';

describe('App.vue', () => {
  it('logo class must contain Little Brown Book Shop typo', () => {
    const wrapper = shallowMount(AppHeader, { stubs: ['Col', 'Row'] });
    expect(wrapper.find('.logo').text()).toBe('Little Brown Book Shop');
  });
});
