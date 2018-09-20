const autoprefixer = require('autoprefixer');
const fs = require('fs');
const path = require('path');
const getStyleLoaders = require('./utils/getStyleLoaders');

const directory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(directory, relativePath);

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, env, defaultConfig) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  const cssRegex = /\.css$/;
  const cssModuleRegex = /\.module\.css$/;
  const sassRegex = /\.(scss|sass)$/;
  const sassModuleRegex = /\.module\.(scss|sass)$/;

  defaultConfig.module.rules.push(
    {
      test: /\.(js|jsx|mjs)$/,
      include: resolveApp('src'),
      exclude: [/[/\\\\]node_modules[/\\\\]/],
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            babelrc: false,
            cacheDirectory: true,
            highlightCode: true,
            presets: ['babel-preset-stage-flow'],
          },
        },
      ],
    },
    {
      test: cssRegex,
      exclude: cssModuleRegex,
      use: getStyleLoaders({
        importLoaders: 1,
      }),
    },
    {
      test: sassRegex,
      exclude: sassModuleRegex,
      use: getStyleLoaders({importLoaders: 2}, 'sass-loader'),
    },
  );

  // Return the altered config
  return defaultConfig;
};
