/**
 * 一个webpack配置的模板，当前为dev环境
 */
let webpack = require('webpack'),
    path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, './src/index.js'),
        indexTest: path.join(__dirname, './test/index.test.js'),
    },
    output: {
        path: path.join(__dirname, 'devDist'),
        filename: '[name].min.js',
        publicPath: '/devDist/',
        library: 'SimpleComponent',
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
                test: /\.[s]?css$/,
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
    // webpack-dev-server,下方配置
    devServer: {
        contentBase: "./", // 需要操作的文件目录
        hot:true // 启用 webpack 的模块热替换特性
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 模块热更新
    ]
};
