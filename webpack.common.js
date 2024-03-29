const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    devServer: {
        port: 8080,
        hot: true,
        compress: true,
        static: './dist'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpeg|jpg|svg|gif|png)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/view/template.html",
            filename: "./index.html",
        })
    ]
}