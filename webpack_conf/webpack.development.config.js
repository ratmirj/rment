const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(exec_dir){
    return {
        context: path.join(exec_dir, './client'),
            entry: [
        './src/index.js'
    ],
        output: {
        path: path.join(exec_dir, './client/dist'),
            filename: 'js/index.js',
            publicPath: '/'
    },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            hot: true,
                contentBase: './client/dist',
                historyApiFallback: true,
                port: 8080
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
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
    };



};
