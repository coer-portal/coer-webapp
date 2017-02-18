import path from "path";
import webpack from "webpack";
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import ExtractCssPlugin from 'extract-text-webpack-plugin'

const extractSASS = new ExtractCssPlugin({
	filename: 'index.css'
});

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
			"react": "preact-compat",
			"react-dom": "preact-compat"
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
				use: ["css-loader", "sass-loader", "style-loader"]
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
		}),
		extractSASS
	]
}
;