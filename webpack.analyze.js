const merge = require('webpack-merge');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const build = require('./webpack.build.js');

module.exports = merge(build, {
  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
    }),
  ],
});
