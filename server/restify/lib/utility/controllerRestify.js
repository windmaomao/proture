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

    // define model hooks
    if (SchemaDef.hooks) {
        if (SchemaDef.hooks.pre) {
            for (var key in SchemaDef.hooks.pre) {
                Schema.pre(key, SchemaDef.hooks.pre[key]);
            }
        }
        if (SchemaDef.hooks.post) {
            for (var key in SchemaDef.hooks.post) {
                Schema.post(key, SchemaDef.hooks.post[key]);
            }
        }
    }

    // load virtuals
    for (var key in SchemaDef.virtuals) {
        Schema.virtual(key).get(SchemaDef.virtuals[key]);
    }

    // define model
    var Model = mongoose.model(modelName,Schema);

    // restify route
    var restifyOpts = {};
    if (SchemaDef.populates) {
        restifyOpts.populate = SchemaDef.populates;
    }
    if (SchemaDef.projections) {
        if (SchemaDef.projections.list) {
            restifyOpts.listProjection = SchemaDef.projections.list;
        }
        if (SchemaDef.projections.detail) {
            restifyOpts.detailProjection = SchemaDef.projections.detail;
        }
    }
    var Rest = restifyMongoose(Model, restifyOpts);

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
