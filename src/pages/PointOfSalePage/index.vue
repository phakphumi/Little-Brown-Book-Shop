<template>
  <Row>
    <Col :span="16">
      <Bookshelf />
    </Col>
    <Col :span="8">
      <Basket />
    </Col>
  </Row>
</template>

<script>
import Basket from './Basket';
import Bookshelf from './Bookshelf';

export default {
  name: 'PointOfSalePage',
  components: {
    Basket,
    Bookshelf,
  },
};
</script>

<style scoped>

</style>
