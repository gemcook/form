module.exports = function getBabelOptions() {
  return Object.assign(
    {},
    {
      exclude: 'node_modules/**',
      babelrc: false,
      presets: ['stage-flow'],
      runtimeHelpers: true,
    },
  );
};
