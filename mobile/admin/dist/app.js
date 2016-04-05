/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * NG Admin module
	 *
	 * Use ng-admin to drive the admin website
	 *
	 * @date 03/25/16
	 * @author Fang Jin <fang-a.jin@db.com>
	*/

	var provider = __webpack_require__(1);
	var directive = __webpack_require__(4);

	angular
	    .module('myApp', ['ng-admin'])
	    .config(provider.ngAdminConfigurationProvider)
	    .config(provider.restangularProvider)
	    .directive('dashboardPage', directive.dashboardDirective)
	    .directive('starRating', directive.starRating)
	;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Provider module
	 *
	 * @date 04/01/16
	 * @author Fang Jin <fang-a.jin@db.com>
	*/

	var ngAdmin = __webpack_require__(2);

	var provider = {};

	provider.ngAdminConfigurationProvider = function(NgAdminConfigurationProvider) {
	    var nga = NgAdminConfigurationProvider;

	    // create an admin application
	    var admin = ngAdmin.create(nga);

	    // create custom dashboard
	    admin.dashboard().template('<dashboard-page></dashboard-page>');

	    // attach the admin application to the DOM and run it
	    ngAdmin.attach();
	};

	provider.restangularProvider = function(RestangularProvider) {
	    RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {
	        // console.log(params);
	        var entity = ngAdmin.options.entities[what];
	        // List view
	        if (operation == 'getList') {
	            // search field
	            var searchField = '_id';
	            if (entity.search.fields.length) {
	                searchField = entity.search.fields[0];
	            }
	            if (("_filters" in params) && (searchField in params._filters)) {
	                params.q = {};
	                // params.q[searchField] = { $regex: params._filters[searchField] }
	                params.q[searchField] = params._filters[searchField];
	            }
	            delete params._filters;

	            // pagination
	            params.pageSize = params._perPage;
	            delete params._perPage;
	            params.p = params._page - 1;
	            delete params._page;

	            // sort
	            params.sort = params._sortField;
	            if (params._sortDir !== 'ASC') {
	                params.sort = '-' + params.sort;
	            }
	            delete params._sortField;
	            delete params._sortDir;
	        }
	        return { params: params };
	    });
	};

	module.exports = provider;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * NG Admin model module
	 *
	 * Handles setup of ng admin
	 *
	 * @date 03/29/16
	 * @author Fang Jin <fang-a.jin@db.com>
	*/

	var ngAdmin = {};

	var options = __webpack_require__(3);
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
	                case 'integer':
	                    if (!editing) {
	                        if (field.format) {
	                            nf = nga.field(field.field, 'template')
	                                .template('<star-rating stars="{{ entry.values.rating }}"></star-rating>');
	                        } else {
	                            nf = nga.field(field.field);
	                        }
	                    } else {
	                        nf = nga.field(field.field);
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
	            // .filters(ngAdmin.assembleSearchFields(nga, searchFields))
	            .filters(ngAdmin.ngaFieldsFromModel(entityName, searchFields))
	        ;
	        if (sort) {
	            listView.sortField(sort.field).sortDir(sort.dir);
	        }
	        entity.creationView()
	            .fields(ngAdmin.ngaFieldsFromModel(entityName, creationFields, true))
	        ;
	        entity.editionView()
	            .fields(ngAdmin.ngaFieldsFromModel(entityName, creationFields, true))
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * NG Admin config module
	 *
	 * Use a script to define the setting for ng-admin
	 *
	 * @date 03/25/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    site: 'Proture',
	    url: '/v1/',
	    entities: {
	        company: {
	            entity: 'company',
	            model: {
	                _id: { type: 'id' },
	                name: { type: 'string', required: true },
	                alias: { type: 'string', required: true },
	                slogan: 'string',
	                description: 'string',
	                active: 'boolean',
	                rating: 'integer',
	                startYear: 'integer',
	                revenueTotal: 'integer',
	                projectCount: 'integer',
	                createdAt: 'date',
	                updatedAt: 'date'
	            },
	            id: '_id',
	            fields: {
	                rating: {
	                    format: 'rating'
	                },
	                startYear: {
	                    label: "Year"
	                },
	                revenueTotal: {
	                    label: "Revenue"
	                },
	                projectCount: {
	                    label: "Projects"
	                }
	            },
	            default: {
	                fields: [
	                    'name', 'alias', 'slogan',
	                    'active',
	                    'startYear', 'revenueTotal', 'projectCount', 'rating'
	                ],
	            },
	            list: {
	                sort: {
	                    field: 'name',
	                    dir: 'ASC'
	                }
	            },
	            creation: {},
	            edition: {},
	            show: {
	                fields: [
	                    '_id',
	                    'name', 'alias', 'slogan', 'active',
	                    'rating', 'startYear', 'revenueTotal', 'projectCount',
	                    'createdAt', 'updatedAt'
	                ]
	            },
	            search: {
	                fields: [
	                    'name'
	                ]
	            },
	        },
	        project: {
	            entity: 'project',
	            model: {
	                _id: { type: 'id' },
	                companyId: { type: 'id', ref: 'company'},
	                name: { type: 'string', required: true },
	                alias: { type: 'string', required: true },
	                slogan: 'string',
	                description: 'string',
	                active: 'boolean',
	                rating: 'integer',
	                startYear: 'integer',
	                durationMonth: 'integer',
	                teamSize: 'integer',
	                updateCount: 'integer',
	                createdAt: 'date',
	                updatedAt: 'date'
	            },
	            fields: {
	                companyId: {
	                    field: 'companyId',
	                    type: 'reference',
	                    targetEntity: 'company',
	                    targetField: 'name',
	                    label: 'Company',
	                    pinned: true
	                },
	                rating: {
	                    format: 'rating'
	                },
	                startYear: {
	                    label: "Year"
	                },
	                durationMonth: {
	                    label: "Duration"
	                },
	                teamSize: {
	                    label: "Team"
	                },
	                updateCount: {
	                    label: "Updates"
	                }
	            },
	            id: '_id',
	            default: {
	                fields: [
	                    'name', 'slogan',
	                    'active',
	                    'startYear', 'durationMonth', 'teamSize', 'rating'
	                ],
	            },
	            list: {
	                sort: {
	                    field: 'name',
	                    dir: 'ASC'
	                }
	            },
	            creation: {
	                fields: [
	                    'companyId', 'name', 'alias', 'slogan', 'active',
	                    'rating', 'startYear', 'durationMonth', 'teamSize',
	                ]
	            },
	            edition: {},
	            show: {
	                fields: [
	                    '_id',
	                    'companyId', 'name', 'alias', 'slogan', 'active',
	                    'rating', 'startYear', 'durationMonth', 'teamSize', 'updateCount',
	                    'createdAt', 'updatedAt'
	                ]
	            },
	            search: {
	                fields: [
	                    'companyId'
	                ]
	            },
	        },
	        update: {
	            entity: 'update',
	            model: {
	                _id: { type: 'id' },
	                projectId: {
	                    type: 'id', ref: 'project',
	                },
	                title: { type: 'string', required: true },
	                createdAt: 'date',
	                updatedAt: 'date'
	            },
	            fields: {
	                projectId: {
	                    field: 'projectId',
	                    type: 'reference',
	                    targetEntity: 'project',
	                    targetField: 'name'
	                }
	            },
	            id: '_id',
	            default: {
	                fields: [
	                    'projectId', 'title',
	                ],
	            },
	            list: {},
	            creation: {},
	            edition: {},
	            show: {
	                fields: [
	                    '_id',
	                    'projectId', 'title',
	                    'createdAt', 'updatedAt'
	                ]
	            },
	            search: {
	                fields: [
	                    'title'
	                ]
	            },
	        }
	    },
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Directive module
	 *
	 * @date 04/01/16
	 * @author Fang Jin <fang-a.jin@db.com>
	*/

	var dashboardDirectiveTemplate = __webpack_require__(5);

	var directive = {};

	directive.dashboardDirective = function() {
	    return {
	        restrict: 'AE',
	        template: dashboardDirectiveTemplate,
	        replace: false,
	    };
	};

	directive.starRating = function() {
	    return {
	        restrict: 'E',
	        scope: {
	        	stars: '@'
	        },
	        link: function(scope, elm, attrs, ctrl) {
	        	scope.starsArray = Array.apply(null, { length: parseInt(scope.stars) }).map(Number.call, Number);
	        },
	        template: `<i ng-repeat="star in starsArray" class="glyphicon glyphicon-star"></i>`
	    };
	};

	module.exports = directive;


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"page-header\">\n            <h1>Welcome to QPLOT Proture</h1>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <small>Company, Project and Update</small>\n\n        <h2>Todos</h2>\n        <p>\n            <ul>\n                <li>Add gross income field to company</li>\n                <li>Model payment</li>\n                <li>Add ratings field to company and project</li>\n                <li>Add slogan field to project</li>\n            </ul>\n        </p>\n\n        <h2>Company</h2>\n\n        <p>\n        List of companies in the past, including .\n        </p>\n\n        <p>\n        The rest service should be highly scalable and always available (meaning load balanced and likely running on a couple of machines).\n\n        </p>\n\n        <h2>Project</h2>\n\n        <p>\n        As a developer, I want to evaluate events, identifying start and end points, creating notifications when an end point is reached. The event evaluator will correlate events using the app/subsystem/event name /correlation id (key) by running a mongo aggregation script that will poll the database looking for sets of correlated events that are not 'complete'.\n        </p>\n        <p>\n        The standard evaluation process will be setup as a pipeline of evaluators (probably derived from a standard class). Each evaluator in the pipeline will look at event and optionally emit a notification and  pass the event on to the next evaluator if the event is not fully handed by this evaluator.\n        </p>\n        <p>\n        At the end of the pipeline, a default evaluator will handle any event not handled by an upstream evaluator. The default evaluator will look for end points and when found will emit a default notification (sample below) and mark all correlated events in mongo as 'complete'.\n        </p>\n\n        <h2>Update:</h2>\n\n        <p>\n        As a user I've used the subscription UI to subscribe to certain notifications and have specified way to deliver the notification.\n        </p>\n        <p>\n        To determine if a notification has subscriptions and needs to be published, the subscription process will scan for new notifications i.e. have been saved since the last scan. For each new notification found the subscription process will scan the subscriptions collection and if a match is found write the notification to a separate collection -  subscriptedNotifications so they can be shown on the UI and optionally published to a user's email, etc.\n        </p>\n        <p>\n        The docs in the subscriptedNotifications collection will contain the base notification information along with the user id of the subscribed user. (We might be able to save an array of subscribed user ids and save some inserts for popular notifications. It will depend on how we are able to search arrays).\n        </p>\n\n    </div>\n</div>\n"

/***/ }
/******/ ]);