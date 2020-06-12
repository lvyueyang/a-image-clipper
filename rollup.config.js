const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')

module.exports = {
	input: 'src/main.js',
	output: {
		file: 'dist/ImageClipper.js',
		format: 'umd',
		name: 'ImageClipper',
		sourcemap: true,
		banner: ''
	},
	plugins: [
		resolve(),
		babel({
			// exclude: 'node_modules/**', // 只编译我们的源代码
		})
	]
}