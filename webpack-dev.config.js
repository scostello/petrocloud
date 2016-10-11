'use strict';

var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        app: path.join(__dirname, 'src/app/app.module.js')
    },

    output: {
        path: path.join(__dirname, '/public'),

        publicPath: 'http://localhost:8080/',

        filename: '[name].bundle.js',

        chunkFilename: '[name].bundle.js'
    },

    module: {
        preLoaders: [],

        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less/,
                loader: 'style!css!less',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file?limit=100000'
            },
            {
                test: /\.html$/,
                loader: 'html?' + JSON.stringify({
                    attrs: ['img:src', 'img:ng-src']
                })
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'petrocloud-sample',
            template: './src/index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/assets/**/*'
            }
        ])
    ],

    devServer: {
        contentBase: './src',
        stats: 'minimal'
    }

};
