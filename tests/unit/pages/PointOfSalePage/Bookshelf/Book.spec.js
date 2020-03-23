import { shallowMount } from '@vue/test-utils';

import Book from '@/pages/PointOfSalePage/Bookshelf/Book';

describe('App.vue', () => {
  it('must contains img title and price from prop', async () => {
    const propsData = {
      title: 'any string',
      price: 300,
      coverUrl: 'http://string/',
      isbn: 'number string',
    };
    const wrapper = shallowMount(Book, {
      propsData,
      stubs: ['Col', 'Row'],
      methods: {
        addToCart: jest.fn(),
      },
    });
    expect(wrapper.find('img').attributes('src')).toBe(propsData.coverUrl);
    expect(wrapper.find('.title').text()).toContain(propsData.title);
    expect(wrapper.find('.priceBar').text()).toContain(propsData.price);
  });
});
