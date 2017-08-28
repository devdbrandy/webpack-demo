const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config');

module.exports = merge(config, {
  plugins: [
    new UglifyJSPlugin()
  ]
});
