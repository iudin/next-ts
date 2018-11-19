require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    webpack(config, options) {
      config.plugins = config.plugins || [];
      config.plugins = [
        ...config.plugins,
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      ];
      return config;
    }
  })
);
