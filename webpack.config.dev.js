/**
 * 一个webpack配置的模板，当前为dev环境
 */
let path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, './src/index.js'),
        usualComponentWeb: path.join(__dirname, './src/usualComponentWeb.js'),
        usualComponentTouch: path.join(__dirname, './src/usualComponentTouch.js'),
        indexTest: path.join(__dirname, './test/index.test.js'),
        indexTest2: path.join(__dirname, './test/index.test2.js'),
        indexTestTouch: path.join(__dirname, './test/index.test.touch.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
        library: 'SimpleComponent',
        libraryTarget: "umd",
    },
    resolve: {
        // 首先寻找模块中的 .ts(x) 文件, 然后是 .js 文件
        extensions: [".ts", ".tsx", ".js", ".jsx"]
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
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('typings') },
            {
                test: /\.[s]?css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: () => [
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                                remove: false,
                            }),
                        ],
                    },
                }]
            }
        ]
    },
    devServer: {
        host: '127.0.0.1',
        port:8088
    },
};
