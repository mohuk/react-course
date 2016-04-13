const path = require('path');
const webpack = require('webpack');
const packageData = require('./package.json');
const filename = [packageData.name, packageData.version, 'js'];

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
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
};
