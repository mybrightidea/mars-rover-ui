const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  console.log("env", env);

  const isProduction = env === "production";
  // const CSSExtract = new ExtractTextPlugin("styles.css");
  const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" });

  return {
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "/public"
              }
            },
            "css-loader",
            "sass-loader"
          ]
          // use: CSSExtract.extract({
          //   use: [
          //     {
          //       loader: "css-loader",
          //       options: { sourceMap: true }
          //     },
          //     {
          //       loader: "sass-loader",
          //       options: { sourceMap: true }
          //     }
          //   ]
          // })
        }
      ]
    },
    mode: "development",
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/"
    }
  };
};
