const path = require("path");
const webpack = require('webpack');

const config = {
  
  mode: 'development',

  entry: [
    './app/index.jsx'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js"
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      "/api": "http://server:5000"
    }
  },

  devtool: 'eval-source-map',

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }

};


module.exports = config
