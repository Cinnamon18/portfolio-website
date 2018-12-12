const webpack = require('webpack');
const path = require('path');

const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(ts|tsx)?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				],
				exclude: /\.module\.css$/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
				],
				include: /\.module\.css$/
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					'scss-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				test: /\.mp4$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 1000,
							mimtetype: 'video/mp4',
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: 'html-loader?attrs[]=video:src'
			}
		],
		// loaders: [
		// 	{
		// 		test: /\.(png|jpg)$/,
		// 		loader: 'url?limit=25000'
		// 	}
		// ]

	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.tsx',
			'.ts'
		]
	}
}

module.exports = config;