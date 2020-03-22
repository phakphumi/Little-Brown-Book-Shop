<template>
  <Layout>
    <PointOfSalePage />
  </Layout>
</template>

<script>
import Layout from './components/Layout';
import PointOfSalePage from './pages/PointOfSalePage';

export default {
  name: 'App',
  components: {
    Layout,
    PointOfSalePage,
  },
};
</script>

<style lang="scss">
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

  .ant-row {
    height: inherit;
  }
</style>
