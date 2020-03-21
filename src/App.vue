<template>
  <Layout>
    <AppHeader class="header" />
    <Content class="content" />
    <AppFooter class="footer" />
  </Layout>
</template>

<script>

import Layout from './components/Layout';

export default {
  name: 'App',
  components: { Layout },
};
</script>

<style scoped lang="scss">
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
