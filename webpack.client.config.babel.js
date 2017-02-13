import path from "path";
import webpack from "webpack";
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'

module.exports = {
	context: path.resolve(__dirname, './src/client'),
	entry: './index.jsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'client.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {presets: ['es2015', 'react', 'stage-0']},
				}]
			},
			{
				test: /\.(sass|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'commons',
		// 	filename: 'common.js',
		// minChunks: 2
		// }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false},
			mangle: true,
			sourcemap: false,
			beautify: false,
			dead_code: true
		}),
		new OptimizeCSSAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {discardComments: {removeAll: true}},
			canPrint: true
		}),
	]
};