<template>
  <Row :gutter="[16, 16]">
    <Col
      v-for="book in books"
      :key="book.title"
      :md="6"
      :sm="8"
    >
      <Book v-bind="book" />
    </Col>
  </Row>
</template>

<script>
import Book from './Book';

export default {
  name: 'Bookshelf',
  data: function() {
    return {
      books: [],
    };
  },
  components: { Book },
  mounted: function() {
    this.books = [
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'ROWLING, J.K.',
        price: 295.0,
        coverImgUrl: 'https://www.asiabooks.com/media/catalog/product/cache/1/image/264x/17f82f742ffe127f42dca9de82fb58b1/9/7/9781408855652c_4.png',
        isbn: '9781408855652',
      },
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'ROWLING, J.K.',
        price: 295.0,
        coverImgUrl: 'https://www.asiabooks.com/media/catalog/product/cache/1/image/264x/17f82f742ffe127f42dca9de82fb58b1/9/7/9781408855652c_4.png',
        isbn: '9781408855652',
      },
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'ROWLING, J.K.',
        price: 295.0,
        coverImgUrl: 'https://www.asiabooks.com/media/catalog/product/cache/1/image/264x/17f82f742ffe127f42dca9de82fb58b1/9/7/9781408855652c_4.png',
        isbn: '9781408855652',
      },
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'ROWLING, J.K.',
        price: 295.0,
        coverImgUrl: 'https://www.asiabooks.com/media/catalog/product/cache/1/image/264x/17f82f742ffe127f42dca9de82fb58b1/9/7/9781408855652c_4.png',
        isbn: '9781408855652',
      },
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'ROWLING, J.K.',
        price: 295.0,
        coverImgUrl: 'https://www.asiabooks.com/media/catalog/product/cache/1/image/264x/17f82f742ffe127f42dca9de82fb58b1/9/7/9781408855652c_4.png',
        isbn: '9781408855652',
      },
    ];
  },
};
</script>

<style scoped>

</style>
