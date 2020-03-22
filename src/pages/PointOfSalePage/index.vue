<template>
  <div class="point-of-sale">
    <Row>
      <Col :span="16">
        <Bookshelf />
      </Col>
      <Col :span="8">
        <Cart />
      </Col>
    </Row>
    <PaymentModal />
  </div>
</template>

<script>
import Bookshelf from './Bookshelf';
import Cart from './Cart';
import PaymentModal from './PaymentModal';

export default {
  name: 'PointOfSalePage',
  components: {
    Bookshelf,
    Cart,
    PaymentModal,
  },
};
</script>

<style scoped lang="scss">
  .point-of-sale {
    height: inherit;

    .bookshelf-col {
      height: inherit;
    }
  }

  [class^="ant-col"], [class*=" ant-col"] {
    height: inherit;
  }
</style>
