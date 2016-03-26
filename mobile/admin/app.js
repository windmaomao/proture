/**
 * NG Admin module
 *
 * Use ng-admin to drive the admin website
 *
 * @date 03/25/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

angular
    .module('myApp', ['ng-admin', 'ng-admin.config'])
    .config(function(NgAdminConfigurationProvider, NgAdminOptions) {
        var nga = NgAdminConfigurationProvider;
        var opt = NgAdminOptions;
        var entities = {};
        var models = {};

        // assemble nga fields based on field array
        var assembleFields = function(fields) {
            var f = [];
            _.each(fields, function(field) {
                if (!(field === Object(field))) {
                    f.push(nga.field(field));
                } else {
                    switch (field.type) {
                        case 'string':
                            f.push(nga.field(field.field));
                            break;
                        case 'boolean':
                            f.push(nga.field(field.field, field.type));
                            break;
                        case 'reference':
                            f.push(
                                nga.field(field.field, field.type)
                                    .label('Company')
                                    .targetEntity(entities['company'])
                                    .targetField(nga.field('name'))
                            );
                            break;
                        default:

                    }
                }
            });
            return f;
        };

        // assemble nga search fields
        var assembleSearchFields = function(p, fields) {
            return [p.field(fields[0]).label(fields[0]).pinned(true)];
        };

        // convert model to nga fields
        var fieldsFromModel = function(model, fields) {
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

        // assemble entity fields from models,
        // givien entity name and fields
        var entityModelFields = function(entity, fields) {
            var nlist = [];
            _.each(fields, function(field) {
                var updated = {};
                if (!(field === Object(field))) {
                    updated = models[entity][field];
                } else {
                    updated = _.defaults(
                        field,
                        models[entity][field.field]
                    );
                }
                nlist.push(updated);
            });
            return nlist;
        };

        // Assemble NGA models straight from Model
        var ngaFieldsFromModel = function(model, fields) {
            return assembleFields(entityModelFields(model, fields));
        };

        // create an admin application
        var admin = nga.application(opt.site).baseApiUrl(opt.url);

        _.each(opt.entities, function(op, key) {
            // skip inactive entity
            var disable = op.disable || false;
            if (disable) {
                return;
            }

            var entityName = op.entity || key;
            // get model fields
            models[entityName] = fieldsFromModel(op.model, op.fields);

            var id = op.id || 'id';
            var fields = op.fields;
            var listFields = op.list.fields || fields;
            var showFields = op.show.fields || fields;
            var creationFields = op.creation.fields || fields;
            var searchFields = op.search.fields || id;

            var entity = nga.entity(entityName).identifier(nga.field(id));

            entity.listView()
                .fields(ngaFieldsFromModel(entityName, listFields))
                .listActions(['show', 'edit'])
                .filters(assembleSearchFields(nga, searchFields))
            ;
            entity.creationView()
                .fields(ngaFieldsFromModel(entityName, creationFields))
            ;
            entity.editionView()
                .fields(ngaFieldsFromModel(entityName, creationFields))
                .title('Edit')
            ;
            entity.showView()
                .fields(ngaFieldsFromModel(entityName, showFields))
                .title('Detail')
            ;

            entities[entityName] = entity;
            admin.addEntity(entity);
        });

        // attach the admin application to the DOM and run it
        nga.configure(admin);
    })
    .config(function(RestangularProvider, NgAdminOptions) {
        RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {
            // console.log(params);
            var entity = NgAdminOptions.entities[what];
            // List view
            if (operation == 'getList') {
                // search field
                var searchField = '_id';
                if (entity.search.fields.length) {
                    searchField = entity.search.fields[0];
                }
                if (("_filters" in params) && (searchField in params._filters)) {
                    params.q = {};
                    params.q[searchField] = { $regex: params._filters[searchField] }
                }
                // params.q = { NAME: { $regex: params._filters.NAME } };
                delete params._filters;

                // pagination
                params.pageSize = params._perPage;
                delete params._perPage;
                params.p = params._page - 1;
                delete params._page;
            }
            return { params: params };
        });
    });
;
