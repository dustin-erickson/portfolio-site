const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
       'static/bundle' : './src/app.js'
    },
    output : {
        path:path.resolve(__dirname, 'dist'),
        filename:`[name].js`,
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/assets/images/[name].[ext]',
                },
            },
        ],
    },
    plugins:[
        new CleanWebpackPlugin(['dist', 'static']),
        new CopyWebpackPlugin({
            patterns: [
                {from:'./index.html',to:''}
            ]
        }),
    ],
    devServer:{
        historyApiFallback: true
    }
}