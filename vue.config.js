const path = require('path');
const webpack = require('webpack');

module.exports = {
	// chainWebpack: config => {
	//     config.plugin('html').tap(args => {
	//         args[0].minify.removeAttributeQuotes = false;
	//         return args;
	//     })
	// },
	publicPath: process.env.NODE_ENV == 'production' ? '/' : '/',

	// assetsDir: './',
	css: {
		sourceMap: true,
	},

	productionSourceMap: false,

	transpileDependencies: [
		/\/node_modules\/vuetify\//,
		/\/node_modules\/vue-echarts\//,
		/\/node_modules\/resize-detector\//,
	],

	configureWebpack: {
		resolve: {
			alias: {
				Api: path.resolve(__dirname, 'src/api/'),
				WebServices: path.resolve(__dirname, 'src/webServices/'),
				Components: path.resolve(__dirname, 'src/components/'),
				Constants: path.resolve(__dirname, 'src/constants/'),
				Container: path.resolve(__dirname, 'src/container/'),
				Views: path.resolve(__dirname, 'src/views/'),
				Helpers: path.resolve(__dirname, 'src/helpers/'),
				Themes: path.resolve(__dirname, 'src/themes/'),
			},
			extensions: ['*', '.js', '.vue', '.json'],
		},
		plugins: [
			//jquery plugin
			new webpack.ProvidePlugin({
				$: 'jquery',
				jquery: 'jquery',
				'window.jQuery': 'jquery',
				jQuery: 'jquery',
			}),
		],
	},

	pwa: {
		name: 'jufrah-admin',
		themeColor: '#FFFFFF',
		iconPaths: {
			faviconSVG: 'img/icons/favicon.svg',
			favicon32: 'img/icons/android-icon-36x36.png',
			favicon16: 'img/icons/favicon-16x16.png',
			appleTouchIcon: 'img/icons/apple-icon-152x152.png',
			maskIcon: 'img/icons/safari-pinned-tab.svg',
			msTileImage: 'img/icons/msapplication-icon-144x144.png',
		},
	},
};
