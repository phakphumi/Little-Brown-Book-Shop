<template>
  <Header class="header">
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
    // position: fixed;
    // top: 0px;
    // width: 100%;
    // height: 64px;
    // z-index: 9999;
    background-color: #C8A58C;

    // display: flex;
    // justify-content: center;
    // align-items: center;

    .logo {
      color: white;
      font-size: 24px;
      font-weight: bold;
    }
  }
</style>
