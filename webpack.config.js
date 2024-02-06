// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode :  "production",
   entry: './src/index.js',
   output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public'),
  },

  devServer : 
  {
    static : {
      directory : path.resolve(__dirname, "../public"),
    },
    port : 3000,
    open : true,
    hot :  true,
    compress : true,
    historyApiFallback : true,
    proxy: {
      "/api" : "http://localhost:8000"
    },

  },

  module : {
    rules : [
      {
        test : /\.css$/,
        use : [ MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test : /\.js$/,
        exclude : /node/,
        use : {
          loader : "babel-loader",
          options : {
            presets : ["@babel/preset-env"],
          }
        }

      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : "gymIdea App",
      filename : "index.html",
      template : "./src/index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};
