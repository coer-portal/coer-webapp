import path from "path";
import webpack from "webpack";
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'

module.exports = {
	context: path.resolve(__dirname, './client'),
	entry: {
		main: ['./index.jsx'],
	},
	output: {
		path: path.resolve(__dirname, './dist/js'),
		filename: '[name].js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.sass', '.scss'],
		"alias": {
			"react": "preact-compat/dist/preact-compat",
			"react-dom": "preact-compat/dist/preact-compat",
		}
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx|es6)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {presets: ['es2015']},
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
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: '[name].js'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: true},
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
		})
	]
}
;