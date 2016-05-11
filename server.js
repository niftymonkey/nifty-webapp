var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var options = require('minimist')(process.argv.slice(2));
var publicPath = "http://localhost:" +  + config.devServer.port;

// attempt to hot-swap modules
if (options.hot) {
  // configure entry points
  config.entry.app.unshift("webpack-dev-server/client?" + publicPath);
  // add the HMR plugin
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
  // fall back to reloading the whole page if the module can't be hot-swapped
  config.devServer.inline = true;
}

new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.devServer.port, 'localhost', function(err)  {
    if (err) {
      console.log(err);
    }
    console.log("Listening at: " + publicPath);
  });
