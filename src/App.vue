<template>
  <Layout>
    <AppHeader class="header" />
    <Content class="content" />
    <AppFooter class="footer" />
  </Layout>
</template>

<script>
import { Layout } from 'ant-design-vue';

import AppFooter from './components/layout/AppFooter';
import AppHeader from './components/layout/AppHeader';

const { Content } = Layout;

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Layout,
    Content,
  },
};
</script>

<style scoped lang="scss">
  $header-height: 64px;
  $footer-height: 69px;

  .header {
    height: $header-height;
  }

  .content {
    margin-top: $header-height;
    min-height: calc(100vh - #{$header-height} - #{$footer-height});
  }

  .footer {
    height: $footer-height;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    margin: 0;
  }
</style>
