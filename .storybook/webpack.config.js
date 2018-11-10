const fs = require('fs');
const path = require('path');
const getStyleLoaders = require('./shared/getStyleLoaders');

const directory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(directory, relativePath);

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, env, defaultConfig) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  // style files regexes

  defaultConfig.module.rules.push(
    {
      test: /\.(js|jsx|mjs)$/,
      include: resolveApp('src'),
      loader: require.resolve('babel-loader'),
      options: {
        babelrc: false,
        configFile: false,
        presets: [require.resolve('babel-preset-stage-flow')],
        plugins: [
          [
            require.resolve('babel-plugin-named-asset-import'),
            {
              loaderMap: {
                svg: {
                  ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                },
              },
            },
          ],
        ],
        cacheDirectory: true,
        cacheCompression: false,
      },
    },
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    }
  );

  // Return the altered config
  return defaultConfig;
};
