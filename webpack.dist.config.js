var webpack = require('webpack');

module.exports = {
    entry: [
        './scripts/index'
    ],
    output: {
        path: 'build/',
        filename: 'bundle.js',
        publicPath: '/scripts/'
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