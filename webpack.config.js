/**
 * 一个webpack配置的模板，当前为dev环境
 * @type {webpack}
 */
let webpack = require('webpack'),
    path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: path.join(__dirname, './src/index.js'),
        indexTest: path.join(__dirname, './test/index.test.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].min.js',
        publicPath: '/dist/',
        libraryTarget: "umd",
    },
    module: {
        rules:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'
                }]
            },
            {
                test: /\.([s]?css)|(less)$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    devServer: {
        contentBase: "./",
        historyApiFallback: true,
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 模块热更新
        new ExtractTextPlugin("styles.css")
    ]
};
