<template>
  <Row class="bookshelf">
    <Col
      v-for="book in books"
      :key="book.isbn"
      :md="6"
      :sm="8"
    >
      <Book v-bind="book" />
    </Col>
  </Row>
</template>

<script>
import { message } from 'ant-design-vue';
import axios from 'axios';
import {
  map,
  round,
} from 'lodash';

import Book from './Book';

export default {
  name: 'Bookshelf',
  data: function() {
    return {
      booksResponse: [],
    };
  },
  components: { Book },
  computed: {
    books: function() {
      return map(this.booksResponse, (book) => ({
        coverUrl: book.cover,
        isbn: book.id,
        title: book.title,
        price: round(book.price, 2),
      }));
    },
  },
  mounted: async function() {
    try {
      const { data: { books } } = await axios.get('https://wt-0ca4cb2ec912fe2638414048c3f114a1-0.sandbox.auth0-extend.com/little-brown-api-dev/book-list');
      this.booksResponse = books;
    } catch (error) {
      message.error(error.message);
    }
  },
};
</script>

<style scoped>
  .bookshelf {
    overflow: scroll;
  }
</style>
