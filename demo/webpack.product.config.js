const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
	// 设置为生产模式
	mode: 'production',
})
