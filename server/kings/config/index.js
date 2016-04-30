module.exports = {
    port: 7929,
    mongo: 'mongodb://localhost/proture',
    prefix: '/v1',
    model: __dirname + '/../model',
    controller: __dirname + '/../controller',
    routes: {
        company: {},
        project: {},
        update: {},
        tech: {},
        showcase: {},
        entity: {},
        contact: {},
        member: {},
        route: {},
        task: {},
    }
}
