<template>
  <div class="point-of-sale">
    <Row>
      <Col
        :xs="24"
        :md="12"
        :lg="14"
      >
        <Bookshelf />
      </Col>
      <Col
        :xs="24"
        :md="12"
        :lg="10"
      >
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

      @include mobile-view {
        height: auto;
      }
    }
  }

  [class^="ant-col"], [class*=" ant-col"] {
    height: inherit;

    @include mobile-view {
      height: auto;
    }
  }

</style>
