<template>
  <Layout>
    <AppHeader class="header" />
    <Content class="content">
      <slot />
    </Content>
    <AppFooter class="footer" />
  </Layout>
</template>

<script>
import { Layout } from 'ant-design-vue';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

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
    height: calc(100vh - #{$header-height} - #{$footer-height});
  }

  .footer {
    height: $footer-height;
  }
</style>
