var webpack = require('webpack');

module.exports = {
    entry: [
        './scripts/index'
    ],
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
    ],
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['jsx?harmony'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    }
};