const path = require("path");
const webpack = require("webpack");
const htmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.js',
    // use instead of clean-webpack-plugin
    output: {
        clean: true,
        library: {
            name: 'Client',
            type: 'var',
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]   
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        })
    ]
};