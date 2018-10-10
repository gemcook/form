const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const closure = require('rollup-plugin-closure-compiler-js');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const {getBabelOptions, resolvePath, getClosureOptions} = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';

async function build() {
  const bundle = await rollup({
    input: resolvePath('src/index.js'),
    external: ['react', 'react-dom'],
    plugins: [
      resolve({
        preferBuiltins: false,
        customResolveOptions: {
          moduleDirectory: resolvePath('node_modules'),
        },
      }),
      postcss({
        extensions: ['.css'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      babel(getBabelOptions()),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      closure(getClosureOptions()),
      // TODO: COPYRIGHT
      // stripBanner(),
      isProduction &&
        prettier({
          parser: 'babylon',
        }),
    ],
  });

  bundle.write({
    format: 'umd',
    file: resolvePath('lib/index.js'),
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
}

build();
