import path from "path";
import webpack from "webpack";
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import ExtractCssPlugin from 'extract-text-webpack-plugin'

const extractSASS = new ExtractCssPlugin({
	filename: 'index.css'
});

module.exports = {
	context: path.resolve(__dirname, './src/client'),
	entry: {
		main: ['./index.jsx'],
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, './dist/js'),
		filename: '[name].js',
		publicPath: '/',
	},
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
					options: {presets: ['es2015', 'react', 'stage-2']},
				}]
			},
			{
				test: /\.(sass|scss)$/,
				use: extractSASS.extract({
					loader: [{
						loader: "css-loader"
					},
						{
							loader: "sass-loader",
							options: {
								includePaths: ["node_modules"]
							}
						}],
					fallback: "style-loader"
				})
			}
		]
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
		extractSASS
	]
};