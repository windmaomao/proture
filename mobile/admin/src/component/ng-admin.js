/**
 * NG Admin model module
 *
 * Handles setup of ng admin
 *
 * @date 03/29/16
 * @author Fang Jin <fang-a.jin@db.com>
*/

var ngAdmin = {};

var options = require('../config/ng-admin');
var admin;
var nga;
var entities;
var models;

// Publish ngAdmin options
ngAdmin.options = options;

// Get admin handle
ngAdmin.create = function(provider) {
    // set nga AngularJS provider
    nga = provider;
    // create admin
    admin = nga.application(options.site).baseApiUrl(options.url);
    // add tabs for each model
    ngAdmin.setupEntities(options.entities);
    // return admin instance
    return admin;
};

// Attach admin to angularJS
ngAdmin.attach = function() {
    nga.configure(admin);
};

// Assemble nga fields based on fields definiation array
var assembleFields = function(fields) {
    var f = [];
    _.each(fields, function(field) {
        var nf = {};
        if (!(field === Object(field))) {
            nf = nga.field(field);
        } else {
            switch (field.type) {
                case 'id':
                case 'date':
                case 'datetime':
                case 'string':
                    nf = nga.field(field.field);
                    break;
                case 'boolean':
                    nf = nga.field(field.field, field.type)
                        .validation({required: true});
                    break;
                case 'json':
                    nf = nga.field(field.field, field.type);
                    break;
                case 'reference':
                    var tEntity = field.targetEntity;
                    var tField = field.targetField;
                    nf = nga.field(field.field, field.type)
                        // .label(_.capitalize(tEntity))
                        .targetEntity(entities[tEntity])
                        .targetField(nga.field(tField));
                    break;
                default:
            }
        }
        f.push(nf);
    });
    return f;
};

// assemble nga search fields
ngAdmin.assembleSearchFields = function(p, fields) {
    return [p.field(fields[0]).label(fields[0]).pinned(true)];
};

// convert model and merge with nga fields
var fieldsFromModel = function(model) {
    var fields = _.keys(model);
    var updated = {};

    _.each(fields, function(field) {
        var updatedField = {};
        var modelField = {};
        if (!(field === Object(field))) {
            updatedField.field = field;
            if (!(model[field] === Object(model[field]))) {
                modelField = { type: model[field] };
            } else {
                modelField = model[field];
            }
            updatedField = _.defaults(updatedField, modelField);
        } else {
            updatedField = field;
        }
        updated[updatedField.field] = updatedField;
    });

    return updated;
};

// Assemble NGA model fields with model and fields name
ngAdmin.ngaFieldsFromModel = function(model, fields) {
    // var modelFields = this.entityModelFields(model, fields);
    // return this.assembleFields(modelFields);

    var nlist = [];
    _.each(fields, function(field) {
        nlist.push(models[model][field]);
    });
    // console.log(model, nlist);
    return assembleFields(nlist);
};

// Deep defaults
var defaults2nd = function(target, source) {
    for (var prop in source) {
        if (prop in target) {
            _.extend(target[prop], source[prop]);
        }
    }
    return target;
};

// Setup entities for admin
ngAdmin.setupEntities = function(opts) {
    models = {};
    entities = {};
    // entityFields = {};

    // add tabs for each model
    _.each(opts, function(op, key) {
        // skip inactive entity
        var disable = op.disable || false;
        if (disable) {
            return;
        }

        var entityName = op.entity || key;
        // get model fields
        models[entityName] = fieldsFromModel(op.model);
        defaults2nd(models[entityName], op.fields);
        console.log(entityName, models[entityName]);

        var id = op.id || 'id';
        var fields = op.fields;
        var defaultFields = op.default.fields;
        var listFields = op.list.fields || defaultFields;
        var showFields = op.show.fields || defaultFields;
        var creationFields = op.creation.fields || defaultFields;
        var searchFields = op.search.fields || id;
        var sort = op.list.sort || '';

        var entity = nga.entity(entityName).identifier(nga.field(id));

        var listView = entity.listView()
            .fields(ngAdmin.ngaFieldsFromModel(entityName, listFields))
            .listActions(['show', 'edit'])
            .filters(ngAdmin.assembleSearchFields(nga, searchFields))
        ;
        if (sort) {
            listView.sortField(sort.field).sortDir(sort.dir);
        }
        entity.creationView()
            .fields(ngAdmin.ngaFieldsFromModel(entityName, creationFields))
        ;
        entity.editionView()
            .fields(ngAdmin.ngaFieldsFromModel(entityName, creationFields))
            .title('Edit')
        ;
        entity.showView()
            .fields(ngAdmin.ngaFieldsFromModel(entityName, showFields))
            .title('Detail')
        ;

        entities[entityName] = entity;
        admin.addEntity(entity);
    });
}

module.exports = ngAdmin;
