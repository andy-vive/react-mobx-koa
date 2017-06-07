const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const _ = require('lodash');
const config = require('./webpack/webpack.config.dev');



const otherConfig = {
  setup: function(app) {
  },
  proxy: {
    "/api/**": "http://localhost:8080"
  }
};

new WebpackDevServer(webpack(config), _.assign({}, config.devServer, otherConfig))
.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});