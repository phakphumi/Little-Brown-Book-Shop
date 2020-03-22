<template>
  <Header class="header">
    <Row type="flex" justify="center" align="middle">
      <Col>
        <div class="logo">
          Little Brown Book Shop
        </div>
      </Col>
    </Row>
  </Header>
</template>

<script>
import { Layout } from 'ant-design-vue';

const { Header } = Layout;

export default {
  name: 'AppHeader',
  components: { Header },
};
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 9999;
    background-color: $color-forest-green;

    .logo {
      float: left;
      color: white;
      font-size: 24px;
      font-weight: bold;
    }
  }
</style>
