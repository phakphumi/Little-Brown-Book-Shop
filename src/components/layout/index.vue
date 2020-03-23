<template>
  <AntdLayout>
    <AppHeader class="header" />
    <Content class="content">
      <slot />
    </Content>
    <AppFooter class="footer" />
  </AntdLayout>
</template>

<script>
import { Layout as AntdLayout } from 'ant-design-vue';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const { Content } = AntdLayout;

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppFooter,
    AntdLayout,
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

    @include mobile-view {
      height: auto;
    }
  }

  .footer {
    height: $footer-height;
  }
</style>
