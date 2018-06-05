const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const build = require('./webpack.build.js');

module.exports = merge(build, {
  plugins: [
    new CompressionPlugin({
      test: /(\.js)|(\.css)/,
      deleteOriginalAssets: true,
    }),
  ],
});
