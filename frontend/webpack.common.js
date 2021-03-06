const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const frontendDistPath = path.resolve(__dirname, '..', 'smashdata', 'static');
const config = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: frontendDistPath,
    filename: 'index.js',
  },
  devServer: {
    index: 'index.html',
    port: 1234,
    host: '0.0.0.0',
    hot: true,
    contentBase: frontendDistPath,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
    new HtmlWebpackPlugin({
      // eslint-disable-next-line global-require
      template: './src/index.html'
    }),
  ],
};

module.exports = config;