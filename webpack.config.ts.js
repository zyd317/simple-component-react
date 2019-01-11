/**
 * 一个webpack配置的模板，当前为dev环境
 */
let path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
    mode: 'production',
    entry: {
        indexTs: path.join(__dirname, './typings/index.tsx')
    },
    output: {
        path: path.join(__dirname, 'lib'),
        filename: '[name].js',
        publicPath: '/lib/',
        library: 'SimpleComponent',
        libraryTarget: "umd",
    },
    // 告诉 Webpack 加载 TypeScript 文件
    resolve: {
        // 首先寻找模块中的 .ts(x) 文件, 然后是 .js 文件
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules:[
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
    }
};
