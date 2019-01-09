const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: {
       'bundle' : './src/app.js',
        'components/RipInput':'./src/components/RipInput.js',
        'components/NavBar':'./src/components/NavBar.js',
    },
    output : {
        path:path.resolve(__dirname, 'dist/static'),
        filename:`[name].js`,
    },
    plugins:[
        new CopyWebpackPlugin([
            {
                from:'./index.html',
                to:''
            }
        ]),
    ],
    devServer:{
        historyApiFallback: true
    }
}