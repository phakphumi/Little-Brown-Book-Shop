<template>
  <div>
    <Row class="header">
      <Col :span="3">
        No.
      </Col>
      <Col :span="12">
        Title
      </Col>
      <Col :span="3">
        Price
      </Col>
      <Col :span="6">
        Quantity
      </Col>
    </Row>
    <Row
      v-for="(book, isbn, index) in books"
      :key="isbn"
    >
      <Col
        :span="3"
        class="row-no"
      >
        {{ index + 1 }}
      </Col>
      <Col :span="12">
        {{ book.title }}
      </Col>
      <Col
        :span="3"
        class="row-price"
      >
        {{ book.price }}
      </Col>
      <Col
        :span="6"
        class="row-quantity-group"
      >
        <Button
          @click="deductItemCount(isbn)"
          v-if="!isFormDisabled"
        >
          -
        </Button>
        {{ book.quantity }}
        <Button
          @click="addToCart({
            isbn,
            title: book.title,
            price: book.price
          })"
          v-if="!isFormDisabled"
        >
          +
        </Button>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';
import {
  mapMutations,
  mapState,
} from 'vuex';

export default {
  name: 'ItemList',
  props: {
    isFormDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      books: state => state.cart.selectedBooks,
    }),
  },
  methods: {
    ...mapMutations('cart', [
      'addToCart',
      'deductItemCount',
    ]),
  },
  components: { Button },
};
</script>

<style scoped lang="scss">
  .header {
    font-weight: bold;
  }

  .header, .row-no, .row-quantity-group, .row-price {
    text-align: center;
  }

  .ant-row {
    height: unset;
    overflow: scroll;
  }
</style>
