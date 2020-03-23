module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "src/styles/index.scss";',
      },
      less: {
        modifyVars: {
          'primary-color': '#00410F',
        },
        javascriptEnabled: true,
      },
    },
  },
};
