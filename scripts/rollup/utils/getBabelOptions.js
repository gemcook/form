module.exports = function getBabelOptions() {
  return Object.assign(
    {},
    {
      exclude: 'node_modules/**',
      babelrc: false,
      runtimeHelpers: true,
      presets: [
        '@babel/flow',
        '@babel/react',
        [
          '@babel/preset-env',
          {
            targets: {browsers: ['> 1% in JP'], esmodules: false},
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: 2,
            helpers: true,
            regenerator: true,
            useESModules: false,
          },
        ],
        '@babel/plugin-proposal-export-default-from',
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        ['@babel/plugin-proposal-class-properties', {loose: true}],
        '@babel/plugin-proposal-json-strings',
      ],
    }
  );
};
