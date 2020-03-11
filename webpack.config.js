/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: { loader: "ts-loader" },
          exclude: /node_modules/
        },
        {
          test: /\.(s[ca]ss)/i,
          use: ["style-loader", "css-loader", "sass-loader"],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      }),
      new Dotenv({
        systemvars: true
      })
    ]
  };
};
