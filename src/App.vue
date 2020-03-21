<template>
  <Layout>
    <AppHeader />
    <Content />
    <AppFooter />
  </Layout>
</template>

<script>
import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import { Layout } from 'ant-design-vue';

const { Content } = Layout;

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Layout,
    Content,
  }
}
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
