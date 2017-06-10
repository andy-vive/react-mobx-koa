const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../src/'),
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://0.0.0.0:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    path.resolve(__dirname, '../src/app.js'),
  ],
  output: {
    path: path.resolve(__dirname, '../dist/'),
    // Don't use hashes in dev mode for better performance
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*'],
    alias: {
      containers: path.resolve(__dirname, '../src/containers'),
      components: path.resolve(__dirname, '../src/components'),
      utils: path.resolve(__dirname, '../src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules/'),
        ],
        include: [
          path.resolve(__dirname, '../src/'),
        ],
      },
      {
        test: /\.css$/,
        exclude: /.*\.min.css/,
        use: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'],
      },
      {
        test: /\.min.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.png$/,
        use: 'url-loader?prefix=img/&limit=5000',
      },
      {
        test: /\.jpg$/,
        use: 'url-loader?prefix=img/&limit=5000',
      },
      {
        test: /\.gif$/,
        use: 'url-loader?prefix=img/&limit=5000',
      },
      {
        test: /\.(eot|svg|ttf)$/,
        use: 'file-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        use: 'url-loader?mimetype=application/font-woff' },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])+$/,
        use: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      // (the commons chunk name)
      filename: 'common.js',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../lte'), to: path.resolve(__dirname, '../dist/lte') },
    ]),
  ],
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, '../dist/'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`
    proxy: {
      "/api/**": "http://localhost:8080"
    }
  },
  devtool: 'eval-source-map',
};