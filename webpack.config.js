/**
 * 一个webpack配置的模板，当前为dev环境
 */
let path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, './src/index.js'),
        indexTest: path.join(__dirname, './test/index.test.js'),
        indexTest2: path.join(__dirname, './test/index.test2.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].min.js',
        publicPath: '/dist/',
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
    }
};
