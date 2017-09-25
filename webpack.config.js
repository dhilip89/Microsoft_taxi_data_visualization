var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var babelpolyfill = require("babel-polyfill");

module.exports = {
    // devtool: 'inline-source-map', //可以在调试面板source中打开源文件
    watch: true,
    entry: {
        bundle: './src/app/view.js',
        vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-devtools-extension',
            "babel-polyfill", 'zrender', 'd3', 'antd', 'jquery', 'leaflet']
    },
    output: {
        path: __dirname + '/dist/app/',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader' })
            },
            // {
            //     test: /\.less$/,
            //     loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader!postcss-loader' })
            // },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader!sass-loader' })
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: 2
        })
    ],
    // context: __dirname + "/src",
    resolve: {
        modules: [
            path.resolve("./node_modules"),
            path.resolve("./src/")
        ]
    }
}