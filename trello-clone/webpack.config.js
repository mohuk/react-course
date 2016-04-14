const path = require('path');
const webpack = require('webpack');
const packageData = require('./package.json');
const filename = [packageData.name, packageData.version, 'js'];
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'app', packageData.main),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.js',
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
  plugins: [new HtmlWebpackPlugin({
      title: 'My App',
      filename: './app/index.html'
    })]
};
