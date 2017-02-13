import path from "path";
import webpack from "webpack";
import fs from "fs";

module.exports = {
	context: path.resolve(__dirname, './src/server'),
	entry: './server.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'server.bundle.js',
	},
	target: 'node',
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {presets: ['es2015', 'react', 'stage-0']}
			}]
		}]
	}
};