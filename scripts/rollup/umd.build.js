const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const compiler = require('@ampproject/rollup-plugin-closure-compiler');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const resolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const {getBabelOptions, resolvePath, getClosureOptions} = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';

rollup({
  input: resolvePath('./src/index.js'),
  external: ['react', 'react-dom', 'semantic-ui-react'],
  plugins: [
    babel(getBabelOptions()),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json'],
      preferBuiltins: false,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    compiler(getClosureOptions()),
    postcss({
      extensions: ['.css'],
    }),
    isProduction &&
      prettier({
        parser: 'babylon',
      }),
  ],
  acorn: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
})
  .then(bundle => {
    bundle.write({
      format: 'umd',
      file: resolvePath('./lib/index.js'),
      name: '@gemcook/form',
      globals: {
        recompose: 'recompose',
        react: 'React',
        classnames: 'classNames',
        'react-modal': 'ReactModal',
        'semantic-ui-react': 'semanticUiReact',
        ramda: 'R',
      },
    });
  })
  .catch(e => {
    console.error(e);
  });
