const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "main.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    devMiddleware: {
      publicPath: "/",
    },
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};
