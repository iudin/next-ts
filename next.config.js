require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack(config, options) {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];
    config.resolve.alias = {
      Components: path.resolve(__dirname, 'src/components/'),
      Lib: path.resolve(__dirname, 'lib/'),
      Store: path.resolve(__dirname, 'src/store/'),
      Utils: path.resolve(__dirname, 'src/utils/')
    };
    return config;
  }
});
