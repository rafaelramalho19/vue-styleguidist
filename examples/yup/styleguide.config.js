const parseYup = require('./lib/parseYup');

module.exports = {
	components: 'src/components/**/[A-Z]*.vue',
	defaultExample: true,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
	},
	styles: {
		Table: {
			cell: {
				'&:nth-child(4)': {
					paddingTop: 8,
					paddingBottom: 8,
					verticalAlign: 'top',
					fontSize: 13,
					width: '50%',
					paddingRight: 0,
				},
			},
		},
	},
	propsParser(filePath) {
		return parseYup(filePath);
	},
	showUsage: true,
};
