/**
 * Restify controller module
 * Controller generator
 *
 * @module controller
 *
 * @date 3/21/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

var config = require('../config');
var mongoose = require('mongoose');
var restifyMongoose = require('restify-mongoose');
var path = '..' + config.model.path + '/';

var restify = function(modelName) {
    // load schema
    var SchemaDef = require(path + modelName);
    var Schema = new mongoose.Schema(
        SchemaDef.fields,
        SchemaDef.options
    );

    // define model
    var Model = mongoose.model(modelName,Schema);

    // restify route
    var Rest = restifyMongoose(Model);

    // define route
    return {
        Schema: Schema,
        Model:  Model,
        Rest:   Rest,
        query:  Rest.query(),
        detail: Rest.detail(),
        insert: Rest.insert(),
        patch:  Rest.update(),
        del:    Rest.remove()
    }
}

module.exports = restify;
