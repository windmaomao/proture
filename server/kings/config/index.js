module.exports = {
    port: 8085,
    mongo: 'mongodb://localhost/test',
    model: __dirname + '/../model',
    controller: __dirname + '/../controller',
    routes: {
        blog: {}
    }
}
