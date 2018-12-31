const path = require('path');

module.exports = {
    entry: {
       'bundle' : './src/app.js',
        'RipInput':'./src/components/RipInput.js'
    },
    output : {
        path:path.resolve(__dirname, 'dist'),
        filename:`[name].js`
    },
    devServer:{
        historyApiFallback: true
    }
}