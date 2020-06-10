const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	// 入口文件
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash].js',
		path: path.join(__dirname, '/dist'),
	},
	module: {
		// 配置相应的规则
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.js[x]?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'less-loader',
				],
			},
		],
	},
	// 配置相应的插件
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new CleanWebpackPlugin(),
	],
	resolve: {
		alias: {
			react: path.resolve('./node_modules/react'),
			'@yrobot/react-mobile-table': path.resolve('../package'),
		},
	},
}
