var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,

  // more info: https://webpack.github.io/docs/build-performance.html#sourcemaps and
  //            https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  // set to false to see a list of every file being bundled.
  noInfo: true,

  // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  target: 'web',

  // HMR middleware + entry point for the app
  entry: [
    './src/js/index.js'
  ],

  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'js/app.js'
  },

  plugins: [
  ],

  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']}
    ]
  }
};
