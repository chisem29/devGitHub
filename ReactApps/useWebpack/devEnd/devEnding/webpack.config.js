
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const path = require('path')

module.exports = {
  mode : 'none',
  entry : {
    app : path.join(__dirname, './src/index.tsx')
  },
  target : 'web',
  resolve : {
    extensions : ['.ts', '.tsx', '.js']
  },
  devServer: {
    allowedHosts : 'all',
    port : 3000,
    static : path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
  module : {
    rules : [
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
      {
        test : /\.css$/i,
        use : [
          "style-loader",
          "css-loader",
          {
            loader : "postcss-loader",
            options : {
              postcssOptions : {
                plugins : [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                      modules : true,
                      sourceMap : true
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : path.join(__dirname, 'src', 'index.html'),
      filename : 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  output : {
    filename : 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean : true
  }
}
