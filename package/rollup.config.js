import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'lib/index.js',
			format: 'es',
			sourcemap: false,
			name: '@yrobot/react-mobile-table',
		},
	],
	plugins: [
		resolve({
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			jsnext: true,
		}),

		babel({
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			include: ['**/*'],
			exclude: 'node_modules/**',
		}),

		// Automatically externalize peerDependencies in a rollup bundle.
		external(),

		postcss({
			minimize: true, // uses cssnano behind scene
			modules: false, // enable css modules
			use: [['less', { javascriptEnabled: true }]],
			extensions: ['.css', '.scss', '.sass', '.less'], // uses node-sass
		}),

		filesize(),

		// Progress while building
		progress({ clearLine: false }),
	],
	external: ['react', 'react-dom'],
}
