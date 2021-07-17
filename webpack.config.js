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