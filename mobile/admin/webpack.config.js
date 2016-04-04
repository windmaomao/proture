module.exports = {
    watch: true,
    entry: "./src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.html']
    }
};
