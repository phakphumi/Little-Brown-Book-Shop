<template>
  <Row
    :gutter="8"
    class="button-group"
  >
    <Col :span="12">
      <Button
        block
        id="clear-cart-btn"
        size="large"
        :disabled="isDisabledBtn"
        @click="clearCart"
      >
        Clear Cart
      </Button>
    </Col>
    <Col :span="12">
      <Button
        block
        id="payment-btn"
        type="primary"
        size="large"
        :disabled="isDisabledBtn"
        @click="paymentBtnClick"
      >
        Payment
      </Button>
    </Col>
  </Row>
</template>

<script>
import { Button } from 'ant-design-vue';
import { isEmpty } from 'lodash';
import { mapMutations } from 'vuex';

export default {
  name: 'ButtonGroup',
  computed: {
    isDisabledBtn: function () {
      return isEmpty(this.$store.state.cart.selectedBooks);
    },
  },
  methods: {
    ...mapMutations('cart', ['clearCart']),
    ...mapMutations('payment', ['paymentBtnClick']),
  },
  components: { Button },
};
</script>

<style scoped>
  .button-group {
    height: auto;
    width: 100%;
    margin-top: 16px;
  }
</style>
