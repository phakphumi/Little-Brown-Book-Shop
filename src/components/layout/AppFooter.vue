<template>
  <Footer class="footer">
    <Row type="flex" justify="center" align="middle">
      <Col>
        <span>© LITTLE BROWN BOOK SHOP </span>
      </Col>
    </Row>
  </Footer>
</template>

<script>
import { Layout } from 'ant-design-vue';

const { Footer } = Layout;
export default {
  name: 'AppFooter',
  components: { Footer },
};
</script>

<style scoped lang="scss">
  .footer {
    width: 100%
  }
</style>
