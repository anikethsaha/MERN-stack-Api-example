var webpack = require('webpack');
var path = require('path');
module.exports = {
              entry: './app.js',
                output: {
                    path: path.resolve(__dirname),
                    filename: 'bundle.js'
                },
              module: {
                  loaders: [
                      {
                          test: /\.js$/,
                          loader: 'babel-loader',
                          query: {
                              presets: ['es2015', 'react']
                          }
                      }
                  ]
              },
              stats: {
                  colors: true
              },
              devtool: 'source-map'
};
