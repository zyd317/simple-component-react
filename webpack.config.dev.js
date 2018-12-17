/* eslint-disable */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './devDist/index.js',
    output: {
        path: path.join(__dirname, 'devDist'),
        filename: '[name].min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: [{loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'devDist/index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: process.env.PORT || 8888,
        historyApiFallback: true,
        open: true,
        host: '127.0.0.1'
    }
};
