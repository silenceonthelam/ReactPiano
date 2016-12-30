var webpack = require("webpack"),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpackHotMiddleware = require("webpack-hot-middleware"),
    config = require("./webpack.config");

var app = new (require("express"))(),
    port = 3232;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    publicPath: config.output.publicPath, 
    stats: {colors: true}, 
    watch: true 
}));

app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index-dev.html");
})

app.listen(port, "0.0.0.0", function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎 ${__dirname}:  :${port} `);
    }
});