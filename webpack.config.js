const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');




module.exports = env => {
    if(!env.production){
        console.log("Development mode");
        return{
            context: path.join(__dirname, './client'),
            entry: [
                './src/index.js'
            ],
            output: {
                path: path.join(__dirname, './client/dist'),
                filename: 'js/index.js',
                publicPath: '/'
            },
            resolve: {
                extensions: ['.js']
            },
            devServer: {
                hot: true,
                contentBase: './client/dist',
                historyApiFallback: true,
                port: 8080
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: ["/node_modules/", "/first-task/"],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }
                },
                    {
                        test: /\.scss$/,
                        use: ['style-loader', 'css-loader', 'sass-loader']
                    },
                    {
                        test: /\.html$/,
                        use: ['html-loader']
                    }
                ]
            },

            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NamedModulesPlugin(),
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    filename: 'index.html',
                    inject: 'body'
                }),
            ]
        }

    }
    else{
        console.log("Producton mode");
        return{
            context: path.join(__dirname, './client'),
            entry: [
                './src/index.js'
            ],
            output: {
                path: path.join(__dirname, './client/dist'),
                filename: 'js/index.js',
                publicPath: '/'
            },
            resolve: {
                extensions: ['.js']
            },
            devServer: {
                hot: true,
                contentBase: './client/dist',
                historyApiFallback: true,
                port: 8080
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: ["/node_modules/", "/first-task/"],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }
                },
                    {
                        test: /\.scss$/,
                        use: ['style-loader', 'css-loader', 'sass-loader']
                    },
                    {
                        test: /\.html$/,
                        use: ['html-loader']
                    }
                ]
            },

            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NamedModulesPlugin(),
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    filename: 'index.html',
                    inject: 'body'
                }),
                new UglifyJsPlugin({
                    exclude: [/node_modules/]
                })
            ]
        }

    }

};
