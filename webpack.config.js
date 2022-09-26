const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {test: /\.txt$/, use: "raw-loader"},
            {
                test: /\.html$/,
                use: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.ejs"})
    ],
};
