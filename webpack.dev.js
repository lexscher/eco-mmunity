const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ] // <~ Rules
  }, // <~ module
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Eco-mmunity',
      inject: false,
      template: require('html-webpack-template'),
      bodyHtmlSnippet: '<main class="main" id="root"></main>'
    })
  ] // <~ Plugins
});
