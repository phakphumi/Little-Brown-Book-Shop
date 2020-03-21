<template>
  <Layout>
    <AppHeader />
    <Content />
    <AppFooter />
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

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
