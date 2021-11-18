const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: '/\.(jpe?g|svg|png|gif)$/',
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets'
                    }
                }
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