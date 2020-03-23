<template>
  <Row class="bookshelf">
    <Col
      v-for="book in books"
      :key="book.isbn"
      :xs="12"
      :md="8"
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
        price: round(book.price),
      }));
    },
  },
  mounted: async function() {
    try {
      const { data: { books } } = await axios.get(process.env.VUE_APP_BOOK_LIST_API, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
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
