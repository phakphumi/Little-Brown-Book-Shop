import { shallowMount } from '@vue/test-utils';

import Bookshelf from '@/pages/PointOfSalePage/Bookshelf';

describe('App.vue', () => {
  it('must contains Book after call API', async () => {
    const wrapper = shallowMount(Bookshelf, { stubs: ['Col', 'Row'] });
    // default state
    expect(wrapper.vm.booksResponse.length).toBe(0);
    expect(wrapper.vm.books.length).toBe(0);

    expect(wrapper.find({ name: 'Book' }).exists()).toBe(false);

    // call api to collect books data
    const responesMock = [
      {
        cover: 'url string',
        price: '0',
        title: 'any string',
        id: 'number string',
      },
    ];
    wrapper.setData({
      booksResponse: responesMock,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.books.length).toBe(1);
    // transform data to
    expect(wrapper.vm.books[0].isbn).toBe(responesMock[0].id);
    expect(wrapper.vm.books[0].title).toBe(responesMock[0].title);
    expect(wrapper.vm.books[0].coverUrl).toBe(responesMock[0].cover);
    expect(wrapper.vm.books[0].price).toBe(parseFloat(responesMock[0].price));
    expect(wrapper.find({ name: 'Book' }).exists()).toBe(true);
  });
});
