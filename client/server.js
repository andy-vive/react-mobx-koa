const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const _ = require('lodash');
const config = require('./webpack/webpack.config.dev');



const otherConfig = {
  setup: function(app) {
  	app.get('/api/categories', function(req, res) {
			res.json([
				{
					id: 1,
					code: 'CA0001',
					name: 'Category A',
					description: 'This is category A',
				},
			]);
  	})
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