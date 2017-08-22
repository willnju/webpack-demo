var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
    entry:{
        main:'./app/index.js',
        vendor:'moment',
    },
    output: {
        filename: '[chunkhash].[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','manifest'] // 指定公共 bundle 的名字。
        }),
        new ExtractTextPlugin('styles.css'),
    ],
    module: {
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({use: 'css-loader'}),
            }
        ]
    }
}