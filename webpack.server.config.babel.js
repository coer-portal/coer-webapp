import path from "path";
import webpack from "webpack";
import fs from "fs";
import NodeExternals from 'webpack-node-externals'

module.exports = {
	context: path.resolve(__dirname, './src/server'),
	entry: './server.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'server.bundle.js',
	},
	target: 'node',
	externals: [NodeExternals({
		whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
	})],
	resolve: {
		extensions: ['.js', '.jsx', '.sass', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {presets: ['es2015', 'react', 'stage-2']}
				}]
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: ["node_modules"]
						}
					}
				]
			}]
	}
};