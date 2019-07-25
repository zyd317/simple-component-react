/**
 * 一个webpack配置的模板，当前为dev环境
 */
const path = require('path');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = (env, argv) => {
    const commonConfig = {
        mode: argv.mode,
        entry: {
            index: path.join(__dirname, './src/index.ts'),
            usualComponentWeb: path.join(__dirname, './src/usualComponentWeb.ts'),
            usualComponentTouch: path.join(__dirname, './src/usualComponentTouch.ts'),
        },
        output: {
            path: path.join(__dirname, 'lib'),
            filename: '[name].js',
            publicPath: '/lib/',
            libraryTarget: 'commonjs',
        },
        resolve: {
            extensions: [".js", ".jsx", ".scss", ".ts", ".tsx"],
            alias: {
                utils: path.resolve(__dirname, './src/utils'),
                static: path.resolve(__dirname, './src/static')
            }
        },
        externals: {
            'react': {
                commonjs: 'react',
            },
            'react-dom': {
                commonjs: 'react-dom',
            },
        },
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'
                    }, {
                        loader: 'ts-loader'
                    }]
                },
                {
                    test: /\.(png|jpg|svg|gif)$/,
                    use: {
                        loader: 'url-loader',
                    },
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
        },
        plugins: argv.env === 'analyzer' ? [new BundleAnalyzerPlugin()] : []
    };

    const isDevMode = argv.mode !== 'production';
    if(isDevMode){
        commonConfig.externals = {};
        commonConfig.entry = {
            index: path.join(__dirname, './src/index.ts'),
            usualComponentWeb: path.join(__dirname, './src/usualComponentWeb.ts'),
            usualComponentTouch: path.join(__dirname, './src/usualComponentTouch.ts'),
            indexTest: path.join(__dirname, './test/index.test.tsx'),
            indexTest2: path.join(__dirname, './test/index.test2.tsx'),
            indexTestTouch: path.join(__dirname, './test/index.test.touch.tsx'),
        };
        commonConfig.output = {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: '/dist/',
            libraryTarget: 'umd',
        };
        commonConfig.devServer = {
            host: '127.0.0.1',
            port:8088
        };
    }
    return commonConfig;
};
