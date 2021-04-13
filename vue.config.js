module.exports = {
  publicPath: "./",
  configureWebpack: config => {
    config.externals = {
      "navigation-info": "NavigationInfo"
    };
  }
};
