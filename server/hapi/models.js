var Memory = require('sails-memory');
var MySQL = require('sails-mysql');

module.exports = {
    adapters: {
        memory: Memory,
        mysql: MySQL
    },
    connections: {
        simple: {
            adapter: 'memory'
        },
        db: {
            adapter: 'mysql',
            host: '45.55.153.87',
            database: 'proture',
            user: 'user',
            password: 'password'
        }
    },
    models: [
        {
            identity: 'dogs',
            connection: 'simple',
            attributes: { name: 'string' }
        },
        require('./models/test.js'),
        require('./models/company.js'),
        require('./models/contact.js'),
        require('./models/project.js'),
        require('./models/account')
    ],
    fixtures: [
        {
            model: 'dogs',
            items: [
                { name: 'Guinness' },
                { name: 'Sully' },
                { name: 'Ren' }
            ]
        }
    ],
};
