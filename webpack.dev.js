const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
