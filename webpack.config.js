const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  // npm install webpack-dev-server --save-dev
  // mode change from 'production' to 'development'
  devServer: {
    host: 'localhost',
    port: 8080,
    static: {
      directory: path.join(__dirname),
    },
    proxy: {
      "/api/**": "http://localhost:3000",
      secure: false,
    },
  },
  module: {
    rules: [
      //npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // npm install -D css-loader style-loader sass-loader sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates 'style' nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  // npm install --save-dev html-webpack-plugin
  plugins: [
    new HtmlWebpackPlugin({
    template: './client/index.html'
  })],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};