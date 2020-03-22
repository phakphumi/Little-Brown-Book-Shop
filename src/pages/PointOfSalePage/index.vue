<template>
  <Row>
    <Col :span="16">
      <Bookshelf />
    </Col>
    <Col :span="8">
      <Cart />
    </Col>
  </Row>
</template>

<script>
import Bookshelf from './Bookshelf';
import Cart from './Cart';

export default {
  name: 'PointOfSalePage',
  components: {
    Bookshelf,
    Cart,
  },
};
</script>

<style scoped lang="scss">
  .bookshelf-col {
    height: inherit;
  }

  [class^="ant-col"], [class*=" ant-col"] {
    height: inherit;
  }
</style>
