<template>
  <div>
    <Row>
      <Col
        :span="18"
        class="row-title"
      >
        Total Discount:
      </Col>
      <Col
        :span="6"
        class="row-value"
      >
        {{ totalDiscount }} Baht
      </Col>
    </Row>
    <Row>
      <Col
        :span="18"
        class="row-title"
      >
        Total Cost:
      </Col>
      <Col
        :span="6"
        class="row-value"
      >
        {{ totalCost }} Baht
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TotalCost',
  computed: {
    ...mapGetters('cart', [
      'totalDiscount',
      'totalCost',
    ]),
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
