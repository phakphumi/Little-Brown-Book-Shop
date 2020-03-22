<template>
  <div>
    <Row>
      <Col
        :span="16"
        class="row-title"
      >
        Total Discount:
      </Col>
      <Col
        :span="8"
        class="row-value"
      >
        {{ totalDiscount }} Baht
      </Col>
    </Row>
    <Row>
      <Col
        :span="16"
        class="row-title"
      >
        Total Cost:
      </Col>
      <Col
        :span="8"
        class="row-value"
      >
        {{ totalCost }} Baht
      </Col>
    </Row>
    <template v-if="isChangeEnabled">
      <Row>
        <Col
          :span="16"
          class="row-title"
        >
          Cash:
        </Col>
        <Col
          :span="8"
          class="row-value"
        >
          {{ receivedCash }} Baht
        </Col>
      </Row>
      <Row>
        <Col
          :span="16"
          class="row-title"
        >
          Change:
        </Col>
        <Col
          :span="8"
          class="row-value"
        >
          {{ changeCash }} Baht
        </Col>
      </Row>
    </template>
  </div>
</template>

<script>
import { toNumber } from 'lodash';
import {
  mapGetters,
  mapState,
} from 'vuex';

export default {
  name: 'TotalCost',
  props: {
    isChangeEnabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    changeCash: function () {
      return this.receivedCash - toNumber(this.totalCost);
    },
    ...mapGetters('cart', [
      'totalDiscount',
      'totalCost',
    ]),
    ...mapState('payment', ['receivedCash']),
  },
};
</script>

<style scoped>
  .row-title {
    font-weight: bold;
  }
  .row-value {
    text-align: end;
  }
</style>
