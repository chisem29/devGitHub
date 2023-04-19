
const path = require("path");
const webpack = require("webpack")

const HtmlWebpackPlugin = require("html-webpack-plugin");

const production = process.env.NODE_ENV ? "production" : "development"

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js",
    clean : true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            },
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', ".jsx", ".sass" ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    allowedHosts: 'all',
    hot: true,
    historyApiFallback: true,
  },
  mode : production
};