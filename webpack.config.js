// var webpack = require('webpack');
module.exports = {

  entry: './src/',  // <== this equivalent to './src/index.js' since entry point will be looking for default [index] file'
  module: {
  	loaders: [
      {
      	test: /\.js$/,
      	exclude: /node_modules/,
        loader:  'babel-loader'
        // query: {
        //   presets: ['react', 'es2015'],
        //   plugins: 'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        // }
      }
  	]
  },
  devtool:  'inline-source-map',
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin()
  // ],
  devServer: {
  	publicPath: '/',   
  	filename: 'bundle.js',  // located here => 'localhost:<port>/bundle.js'
  	host: '0.0.0.0',
  	port: 8085
  }
}