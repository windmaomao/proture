'use strict';

// HAPI
const Hapi = require('hapi');

// HAPI server
const server = new Hapi.Server();
server.connection({ port: 3000 });

// Server plugins
const plugins = require('./plugins');

// Start server
server.register(plugins, function (err) {
    if (err) {
        throw err;
    }

    // Server routes
    require('./routes')(server);

    server.start();
});
