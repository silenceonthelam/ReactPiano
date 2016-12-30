var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path              = require("path"),
    webpack           = require("webpack");

module.exports = {
    devtool: "cheap-module-source-map",
    entry: "./scripts/index",
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            exclude: /node_modules/,
            include: __dirname
        }, {   
            test: /\.scss$/,
            include: path.join(__dirname, "styles"),
            loader: ExtractTextPlugin.extract(
                "style",
                "css!sass"
            )
        }]
    },
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common.js"),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),    
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi]      
        })
    ],
    resolve: {
        extensions: ["", ".js", ".scss"]
    }
};