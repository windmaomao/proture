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
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var options = __webpack_require__(1);
	var directive = __webpack_require__(7);

	angular
	    .module('myApp', ['ng-admin-restify'])
	    .directive('dashboardPage', directive.dashboardDirective)
	    .directive('starRating', directive.starRating)
	    .config(function(ngAdminRestifyProvider) {
	        var app = ngAdminRestifyProvider.configure(options);
	    })
	;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * NG Admin config module
	 *
	 * Use a script to define the setting for ng-admin
	 *
	 * @date 03/25/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var requireEntity = function(name) {
	    return __webpack_require__(2)("./" + name);
	}

	module.exports = {
	    site: 'Proture',
	    url: '/v1/',
	    rest: {
	        url: '/v1/',
	        filter: 'q'
	    },
	    entities: {
	        company: requireEntity('company'),
	        project: requireEntity('project'),
	        tech: requireEntity('tech'),
	        update: requireEntity('update'),
	    },
	    routes: false
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./company": 3,
		"./company.js": 3,
		"./project": 4,
		"./project.js": 4,
		"./tech": 5,
		"./tech.js": 5,
		"./update": 6,
		"./update.js": 6
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Company entity module
	 *
	 * @date 04/13/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
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
	        projects: { type: 'referenced_list' },
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
	            type: 'number',
	            format: '$0,0',
	            label: "Revenue",
	        },
	        projectCount: {
	            label: "Projects",
	        },
	        projects: {
	            type: 'referenced_list',
	            targetEntity: 'project',
	            targetReferenceField: 'companyId',
	            targetFields: {
	                'Name': 'name',
	                'Slogan': 'slogan',
	                'Year': 'startYear'
	            },
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            }
	        }
	    },
	    default: {
	        fields: [
	            'active',
	            'name', 'alias', 'slogan',
	            'startYear', 'revenueTotal', 'projectCount', 'rating'
	        ],
	    },
	    list: {
	        title: 'Company List',
	        actions: [],
	        sort: {
	            field: 'name',
	            dir: 'ASC'
	        }
	    },
	    creation: {},
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'name', 'alias', 'slogan', 'active',
	            'rating', 'startYear', 'revenueTotal', 'projects',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'name'
	        ]
	    },
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Project entity module
	 *
	 * @date 04/13/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
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
	        techIds: { type: 'reference_many' },
	        techCount: { type: 'template' },
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
	        techIds: {
	            field: 'techIds',
	            type: 'reference_many',
	            label: 'Techs',
	            targetEntity: 'tech',
	            targetField: 'name',
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            }
	        },
	        techCount: {
	            field: 'techCount',
	            label: 'Techs',
	            type: 'template',
	            template: '{{ entry.values.techIds.length }}'
	        },
	        description: {
	            type: 'text',
	        },
	        rating: {
	            format: 'rating'
	        },
	        active: {
	            label: 'On'
	        },
	        startYear: {
	            label: "Year"
	        },
	        durationMonth: {
	            label: "Months"
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
	            'active',
	            'name', 'companyId', 'slogan', 'techIds',
	            'startYear', 'rating',
	        ],
	    },
	    list: {
	        title: 'Project List',
	        sort: {
	            field: 'rating',
	            dir: 'DESC'
	        }
	    },
	    creation: {
	        fields: [
	            'companyId', 'name', 'alias', 'slogan', 'description', 'active', 'techIds',
	            'rating', 'startYear', 'durationMonth', 'teamSize',
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'companyId', 'name', 'alias', 'slogan', 'description', 'active',
	            'techIds',
	            'rating', 'startYear', 'durationMonth', 'teamSize', 'updateCount',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'companyId'
	        ]
	    },
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Tech entity module
	 *
	 * @date 04/13/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'tech',
	    model: {
	        _id: { type: 'id' },
	        name: { type: 'string', required: true },
	        slogan: 'string',
	        parentId: 'string',
	        category: 'string',
	        rating: 'integer',
	        startYear: 'integer',
	        projectCount: 'integer',
	        createdAt: 'date',
	        updatedAt: 'date'
	    },
	    id: '_id',
	    fields: {
	        parentId: {
	            field: 'parentId',
	            type: 'reference',
	            targetEntity: 'tech',
	            targetField: 'name',
	            label: 'Parent',
	            pinned: true
	        },
	        rating: {
	            format: 'rating'
	        },
	        startYear: {
	            label: "Year"
	        },
	        projectCount: {
	            label: "Projects"
	        }
	    },
	    default: {
	        fields: [
	            'parentId',
	            'name', 'slogan', 'category',
	            'startYear', 'projectCount', 'rating'
	        ],
	    },
	    list: {
	        title: 'Tech List',
	        sort: {
	            field: 'name',
	            dir: 'ASC'
	        }
	    },
	    creation: {},
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'name', 'slogan', 'category',
	            'startYear', 'projectCount', 'rating',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'name', 'category', 'parentId'
	        ]
	    },
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Update entity module
	 *
	 * @date 04/13/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'update',
	    model: {
	        _id: { type: 'id' },
	        projectId: {
	            type: 'id', ref: 'project',
	        },
	        title: { type: 'string', required: true },
	        techId: {
	            type: 'id', ref: 'tech',
	        },
	        description: 'string',
	        rating: 'integer',
	        createdAt: 'date',
	        updatedAt: 'date'
	    },
	    fields: {
	        projectId: {
	            field: 'projectId',
	            label: 'Project',
	            type: 'reference',
	            targetEntity: 'project',
	            targetField: 'name'
	        },
	        techId: {
	            field: 'techId',
	            label: 'Tech',
	            type: 'reference',
	            targetEntity: 'tech',
	            targetField: 'name'
	        },
	        rating: {
	            format: 'rating'
	        },
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'projectId', 'title', 'techId', 'rating'
	        ],
	    },
	    list: {
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {
	        fields: [
	            'projectId', 'title', 'techId', 'rating',
	            'description'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'title',
	        fields: [
	            '_id',
	            'projectId', 'techId',
	            'title', 'description', 'rating',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'title'
	        ]
	    },
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Directive module
	 *
	 * @date 04/01/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var dashboardDirectiveTemplate = __webpack_require__(8);

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
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"page-header\">\n            <h1>Welcome to QPLOT Proture</h1>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <small>Company, Project and Update</small>\n\n        <h2>Todos</h2>\n        <p>\n            <ul>\n                <li>Add gross income field to company</li>\n                <li>Model payment</li>\n                <li>Add ratings field to company and project</li>\n                <li>Add slogan field to project</li>\n            </ul>\n        </p>\n\n        <h2>Company</h2>\n\n        <p>\n        List of companies in the past, including .\n        </p>\n\n        <p>\n        The rest service should be highly scalable and always available (meaning load balanced and likely running on a couple of machines).\n\n        </p>\n\n        <h2>Project</h2>\n\n        <p>\n        As a developer, I want to evaluate events, identifying start and end points, creating notifications when an end point is reached. The event evaluator will correlate events using the app/subsystem/event name /correlation id (key) by running a mongo aggregation script that will poll the database looking for sets of correlated events that are not 'complete'.\n        </p>\n        <p>\n        The standard evaluation process will be setup as a pipeline of evaluators (probably derived from a standard class). Each evaluator in the pipeline will look at event and optionally emit a notification and  pass the event on to the next evaluator if the event is not fully handed by this evaluator.\n        </p>\n        <p>\n        At the end of the pipeline, a default evaluator will handle any event not handled by an upstream evaluator. The default evaluator will look for end points and when found will emit a default notification (sample below) and mark all correlated events in mongo as 'complete'.\n        </p>\n\n        <h2>Update:</h2>\n\n        <p>\n        As a user I've used the subscription UI to subscribe to certain notifications and have specified way to deliver the notification.\n        </p>\n        <p>\n        To determine if a notification has subscriptions and needs to be published, the subscription process will scan for new notifications i.e. have been saved since the last scan. For each new notification found the subscription process will scan the subscriptions collection and if a match is found write the notification to a separate collection -  subscriptedNotifications so they can be shown on the UI and optionally published to a user's email, etc.\n        </p>\n        <p>\n        The docs in the subscriptedNotifications collection will contain the base notification information along with the user id of the subscribed user. (We might be able to save an array of subscribed user ids and save some inserts for popular notifications. It will depend on how we are able to search arrays).\n        </p>\n\n    </div>\n</div>\n"

/***/ }
/******/ ]);