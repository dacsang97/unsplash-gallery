const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.resolve.extensions.push('.vue');

  return config;
};
