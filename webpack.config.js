const path = require("path")
const webpack = require("webpack")

const isDev = false

module.exports = {
  mode: "production",
  devtool: "hidden-source-map",
  entry: {
    index: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[name].map",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new webpack.DefinePlugin({
      isDev,
    }),
  ],
  module: {
    rules: [
      {
        test: /src\/.*\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          compact: false,
          presets: [
            [
              "env",
              {
                targets: {
                  browsers: ["last 2 versions", "ie >= 10"],
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
          "extract-loader",
          "css-loader",
        ],
      },
    ],
  },
}
