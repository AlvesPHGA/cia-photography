const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",

  entry: "./__source/index.js",

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public/pages/"),
    },
    compress: true,
    port: 8080,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
    }),

    // pug
    new HtmlWebpackPlugin({
      template: "__source/views/pages/index.pug",
      filename: "./pages/index.html",
      inject: true,
    }), //index page

    new HtmlWebpackPlugin({
      template: "__source/views/pages/about.pug",
      filename: "./pages/about.html",
      inject: true,
    }), //about page

    new HtmlWebpackPlugin({
      template: "__source/views/pages/team.pug",
      filename: "./pages/team.html",
      inject: true,
    }), //team page

    new HtmlWebpackPlugin({
      template: "__source/views/pages/events.pug",
      filename: "./pages/events.html",
      inject: true,
    }), //events page

    new HtmlWebpackPlugin({
      template: "__source/views/pages/contact.pug",
      filename: "./pages/contact.html",
      inject: true,
    }), //contact page
  ],

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(png|jpg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
          },
        },
      },

      {
        test: /\.pug$/,
        loader: "@webdiscus/pug-loader",
        // loader: ["pug-loader"],
      },
    ],
  },
};
