const path = require("path");

module.exports = {
  entry: {
    main: "./index.js",
    list: "./components/pages/article/list.js",
    detail: "./components/pages/article/detail.js",
  },
  output: {
    filename: "[name].js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -10,
        },
        articleList: {
          test: /components[\\/]pages[\\/]article[\\/]list\.js/,
          name: "articleList",
          priority: -5,
        },
        articleDetail: {
          test: /components[\\/]pages[\\/]article[\\/]detail\.js/,
          name: "articleDetail",
          priority: -5,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
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
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./assets/"),
      css: path.resolve(__dirname, "./css/"),
      data: path.resolve(__dirname, "./data/"),
      layout: path.resolve(__dirname, "./components/layout/"),
      components: path.resolve(__dirname, "./components/"),
      utils: path.resolve(__dirname, "./utils/"),
    },
    extensions: [".js", ".css"],
  },
};
