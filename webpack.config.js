const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  console.log("env", env);

  const isProduction = env === "production";
  const CSSExtract = new MiniCssExtractPlugin({ filename: "styles.css" });

  return {
    entry: {
      app: ["./src/app.js"]
    },
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "[name].js"
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
