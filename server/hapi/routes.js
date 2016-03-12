var bedwetterOptions = {};
var defaultConfig = {
    handler: {
        bedwetter: bedwetterOptions
    }
};

module.exports = function(server) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply('Hello HAPI!');
        }
    });

    server.route({
        method: 'GET',
        path: '/dogs/{id}',
        handler: function (request, reply) {
            var Dogs = request.model.dogs;
            reply(Dogs.findOne(request.params.id));
        }
    });

    // server.route({
    //     method: 'GET',
    //     path: '/company',
    //     handler: function (request, reply) {
    //         var Company = request.model.company;
    //         reply(Company.find());
    //     }
    // });

    server.route(require('./routes/test.js'));
    server.route(require('./routes/company.js'));
    server.route(require('./routes/contact.js'));
    server.route(require('./routes/project.js'));
    server.route(require('./routes/account.js'));
}
