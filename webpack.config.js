const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.sass|\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
