var webpack = require("webpack"),
    path = require("path");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: [
        "webpack-hot-middleware/client",
        "./scripts/index"
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.scss$/,
            include: path.join(__dirname, "styles"),
            loader: "style!css!sass"
        }]
    },  
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ["",".js",".scss"]
    }
};