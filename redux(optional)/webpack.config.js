var webpack = require('webpack');
var path = require('path');
module.exports = {
              entry: './main.js',
                output: {
                    path: path.resolve(__dirname),
                    filename: './bundle.js',
                     publicPath: '/'

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
              devServer: {
                  historyApiFallback:  {index: 'public/views/index.html'},
              },
              stats: {
                  colors: true
              },
              devtool: 'source-map'
};
