const path = require("path");
// html5 file generator webpack bundle in the body using script tags
const HtmlWebpackPlugin = require("html-webpack-plugin");

const React = require("react");
const ReactDOM = require("react-dom");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  //   웹팩 아웃풋의 디버깅을 위해 소스맵 활성화
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // .ts, .tsx 확장자 파일을 awesome-typescript-loader 핸들링
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // 모든 .js 파일은 source-map-loader에 의해 리 프로세싱 됨
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: "./dist/",
    compress: true,
    port: 9000
  }
  // externals: {
  //   react: React,
  //   "react-dom": ReactDOM
  // }
};
