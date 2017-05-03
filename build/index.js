const path = require('path');
const webpack = require('webpack');
var options = require('./base.js');

options.devtool = '#source-map';
options.externals = ['vue'];
options.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
];
module.exports = options;