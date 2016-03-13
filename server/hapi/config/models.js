var Memory = require('sails-memory');
var MySQL = require('sails-mysql');

// var models;
// var normalizedPath = require("path").join(__dirname, "models");
// require("fs").readdirSync(normalizedPath).forEach(function(file) {
//   models.push(require("./routes/" + file));
// });
//
var modelPath = '../models';
var models = ['test', 'company', 'contact', 'project', 'account', 'transaction'];

var modelDefs = [];
models.forEach(function(item) {
    modelDefs.push(require(modelPath + '/' + item));
});

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
    models: modelDefs,
    // models: [
    //     {
    //         identity: 'dogs',
    //         connection: 'simple',
    //         attributes: { name: 'string' }
    //     },
    //     require('../models/test'),
    //     require('../models/company'),
    //     require('../models/contact'),
    //     require('../models/project'),
    //     require('../models/account'),
    //     require('../models/transaction')
    // ],
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
