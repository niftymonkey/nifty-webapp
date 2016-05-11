var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,

  // more info: https://webpack.github.io/docs/build-performance.html#sourcemaps and
  //            https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  devServer: {
    port: 3000,
    contentBase: "./dist",
    stats: "minimal"
  },

  // set to false to see a list of every file being bundled.
  noInfo: true,

  // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  target: 'web',

  // Entry points for the app bundles
  entry: {
    app: [
      './src/js/index.js'
    ]
  },

  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name].js'
  },

  plugins: [
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?sourceMap!autoprefixer-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/[name]-[hash:6].[ext]"
      },
      {
        test: /\.(html|htm)$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  }
};
