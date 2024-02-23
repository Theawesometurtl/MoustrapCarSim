const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')
const common = require('./webpack.common')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'production',

  plugins: [
    new HtmlWebpackPlugin({
    title: 'Mousetrap Car Simulation',
    favicon: paths.src + '/images/favicon.png',
    template: paths.src + '/template.html', // template file
    filename: 'index.html', // output file
    // chunks: [paths.src + '/index.ts', paths.src + '/styles/index.scss']
  }),],

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
})
