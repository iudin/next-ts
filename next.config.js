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
      Static: path.resolve(__dirname, 'static/'),
      Components: path.resolve(__dirname, 'src/components/')
    };
    return config;
  }
});
