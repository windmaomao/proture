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
var assembleFields = function(fields, editing) {
    var f = [];
    _.each(fields, function(field) {
        var nf = {};
        if (!(field === Object(field))) {
            nf = nga.field(field);
        } else {
            switch (field.type) {
                case 'template':
                    nf = nga.field(field.field, 'template')
                        .template(field.template)
                    ;
                    break;
                case 'boolean':
                    nf = nga.field(field.field, field.type)
                        .validation({required: true});
                    break;
                case 'json':
                case 'text':
                    nf = nga.field(field.field, field.type);
                    break;
                case 'number':
                    nf = nga.field(field.field, field.type)
                        .format(field.format)
                    break;
                case 'integer':
                    if (!editing) {
                        switch (field.format) {
                            case 'count':
                                nf = nga.field(field.field, 'template')
                                    .template('{{ entry.values.' + field.targetField + '.length }}')
                                ;
                                break;
                            case 'rating':
                                nf = nga.field(field.field, 'template')
                                    .template('<star-rating stars="{{ entry.values.rating }}"></star-rating>');
                                break;
                            default:
                                nf = nga.field(field.field);
                        }
                    } else {
                        nf = nga.field(field.field);
                    }
                    break;
                case 'reference':
                    nf = nga.field(field.field, field.type)
                        .targetEntity(entities[field.targetEntity])
                        .targetField(nga.field(field.targetField))
                        .detailLinkRoute('show')
                    ;
                    break;
                case 'referenced_list':
                    var tFields = [];
                    _.each(field.targetFields, function(value, key) {
                        tFields.push(nga.field(value).label(key));
                    });
                    nf = nga.field(field.field, field.type)
                        .targetEntity(entities[field.targetEntity])
                        .targetReferenceField(field.targetReferenceField)
                        .targetFields(tFields)
                    ;
                    if (field.sort) {
                        nf.sortField(field.sort.field);
                        nf.sortDir(field.sort.dir);
                    }
                    break;
                case 'reference_many':
                    nf = nga.field(field.field, field.type)
                        .targetEntity(entities[field.targetEntity])
                        .targetField(nga.field(field.targetField))
                        .perPage(0)
                    ;
                    if (field.sort) {
                        nf.sortField(field.sort.field);
                        nf.sortDir(field.sort.dir);
                    }
                    break;
                case 'id':
                case 'date':
                case 'datetime':
                case 'string':
                default:
                    nf = nga.field(field.field);
                    break;
            };
            // add field label
            if (field.label) {
                nf.label(field.label);
            }
            // set field pinned
            if (field.pinned) {
                nf.pinned(true);
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
ngAdmin.ngaFieldsFromModel = function(model, fields, editing) {
    // var modelFields = this.entityModelFields(model, fields);
    // return this.assembleFields(modelFields);

    var nlist = [];
    _.each(fields, function(field) {
        nlist.push(models[model][field]);
    });
    // console.log(model, nlist);
    return assembleFields(nlist, editing);
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
    // populate model definition and ui entity
    models = {};
    entities = {};
    _.each(opts, function(op, key) {
        var entityName = op.entity || key;
        // get model fields
        models[entityName] = fieldsFromModel(op.model);
        defaults2nd(models[entityName], op.fields);

        // create entity
        var id = op.id || 'id';
        var entity = nga.entity(entityName).identifier(nga.field(id));
        entities[entityName] = entity;
        admin.addEntity(entity);
    });

    // populate entity view and fields
    _.each(opts, function(op, key) {
        // skip inactive entity
        var disable = op.disable || false;
        if (disable) {
            return;
        }

        var entityName = op.entity || key;
        var id = op.id || 'id';
        var fields = op.fields;
        var defaultFields = op.default.fields;
        var listFields = op.list.fields || defaultFields;
        var showFields = op.show.fields || defaultFields;
        var creationFields = op.creation.fields || defaultFields;
        var searchFields = op.search.fields || id;

        var entity = entities[entityName];

        var listView = entity.listView()
            .fields(ngAdmin.ngaFieldsFromModel(entityName, listFields))
            .listActions(['show', 'edit'])
            // .filters(ngAdmin.assembleSearchFields(nga, searchFields))
            .filters(ngAdmin.ngaFieldsFromModel(entityName, searchFields))
        ;
        if (op.list.sort) {
            var sort = op.list.sort || '';
            listView.sortField(sort.field).sortDir(sort.dir);
        }
        if (op.list.title) {
            listView.title(op.list.title);
        }

        entity.creationView()
            .fields(ngAdmin.ngaFieldsFromModel(entityName, creationFields, true))
        ;

        entity.editionView()
            .fields(ngAdmin.ngaFieldsFromModel(entityName, creationFields, true))
            .title('Edit')
        ;

        var showView = entity.showView()
            .fields(ngAdmin.ngaFieldsFromModel(entityName, showFields))
        ;
        if (op.show.title) {
            showView.title('{{ entry.values.' + op.show.title + ' }}');
        }
    });
}

module.exports = ngAdmin;
