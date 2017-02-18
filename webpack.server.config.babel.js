import path from "path";
import NodeExternals from 'webpack-node-externals'

module.exports = {
	context: path.resolve(__dirname, './server'),
	entry: './server.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'server.bundle.js',
	},
	target: 'node',
	devtool: 'source-map',
	externals: [NodeExternals({
		whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
	})],
	resolve: {
		extensions: ['.js', '.jsx', '.sass', '.scss'],
		"alias": {
			"react": "preact-compat",
			"react-dom": "preact-compat"
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {presets: ['es2015']}
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