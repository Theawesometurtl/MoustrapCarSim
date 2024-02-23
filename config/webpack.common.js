const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.ts'],
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/, 
        loader: "ts-loader",
        options: { allowTsInNodeModules: true },
        exclude: /node_modules/, 
        exclude: /named-references/
      },
      
      // Images: Copy image files to build folde
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource',
    exclude: /node_modules/,},

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline',
    exclude: /node_modules/,},
    ],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    
  ],

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx','.json', '.ts', '.tsx'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
