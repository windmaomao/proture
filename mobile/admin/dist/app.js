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
	var directive = __webpack_require__(9);

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
	        filter: 'q',
	        page: {
	            limit: 'pageSize',
	            page: 'p',
	        },
	        sort: {
	            field: 'sort',
	            plus: true
	        }
	    },
	    entities: {
	        company: requireEntity('company'),
	        project: requireEntity('project'),
	        tech: requireEntity('tech'),
	        update: requireEntity('update'),
	        showcase: requireEntity('showcase'),
	        entity: requireEntity('entity'),
	        contact: requireEntity('contact'),
	        member: requireEntity('member'),
	    },
	    routes: false
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./company": 3,
		"./company.js": 3,
		"./contact": 11,
		"./contact.js": 11,
		"./entity": 4,
		"./entity.js": 4,
		"./member": 12,
		"./member.js": 12,
		"./project": 5,
		"./project.js": 5,
		"./showcase": 6,
		"./showcase.js": 6,
		"./tech": 7,
		"./tech.js": 7,
		"./update": 8,
		"./update.js": 8
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
	        description: 'text',
	        url: 'string',
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
	        name: {
	            type: 'string',
	            detailRoute: 'show',
	            pinned: true
	        },
	        url: {
	            format: 'url',
	            caption: 'Go'
	        },
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
	            targetFields: ['name', 'slogan', 'startYear','rating'],
	            sort: {
	                field: 'startYear',
	                dir: 'DESC'
	            }
	        },
	    },
	    default: {
	        fields: [
	            'active',
	            'name', 'alias', 'slogan', 'url', 'description',
	            'startYear', 'revenueTotal', 'projectCount', 'rating'
	        ],
	    },
	    list: {
	        title: 'Company List',
	        actions: ['edit'],
	        fields: [
	            'active',
	            'name', 'alias', 'slogan',
	            'startYear', 'revenueTotal', 'rating', 'url'
	        ],
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
	            '_id', 'active',
	            'name', 'alias', 'slogan', 'description', 'url',
	            'rating', 'startYear', 'revenueTotal', 'projects',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'name', 'startYear',
	        ]
	    },
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Entity entity module
	 *
	 * @date 04/18/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'entity',
	    model: {
	        _id: { type: 'id' },
	        projectId: {
	            type: 'id', ref: 'project',
	        },
	        name: { type: 'string', required: true },
	        description: 'string',
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        name: {
	            type: 'string',
	            detailRoute: 'show'
	        },
	        projectId: {
	            field: 'projectId',
	            label: 'Project',
	            type: 'reference',
	            targetEntity: 'project',
	            targetField: 'name',
	            perPage: 100,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            pinned: true,
	        },
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'projectId', 'name', 'description', 'createdAt'
	        ],
	    },
	    list: {
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {},
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'projectId', 'name', 'description',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'projectId', 'name'
	        ]
	    },
	};


/***/ },
/* 5 */
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
	        url: 'string',
	        active: 'boolean',
	        rating: 'integer',
	        startYear: 'integer',
	        durationMonth: 'integer',
	        teamSize: 'integer',
	        updateCount: 'integer',
	        techIds: { type: 'reference_many' },
	        // techCount: { type: 'template' },
	        updates: { type: 'referenced_list' },
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        name: {
	            type: 'string',
	            detailRoute: 'show'
	        },
	        url: {
	            format: 'url',
	            caption: 'Go'
	        },
	        companyId: {
	            field: 'companyId',
	            type: 'reference',
	            targetEntity: 'company',
	            targetField: 'name',
	            label: 'Company',
	            perPage: 100,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
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
	        updates: {
	            type: 'referenced_list',
	            targetEntity: 'update',
	            targetReferenceField: 'projectId',
	            targetFields: ['title', 'techId', 'rating'],
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            }
	        },
	        // techCount: {
	        //     field: 'techCount',
	        //     label: 'Techs',
	        //     type: 'template',
	        //     template: '{{ entry.values.techIds.length }}'
	        // },
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
	            label: "Launched"
	        },
	        durationMonth: {
	            label: "Months"
	        },
	        teamSize: {
	            label: "Team"
	        },
	        updateCount: {
	            label: "Updates"
	        },
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'active',
	            'name', 'companyId', 'slogan', 'techIds',
	            'createdAt', 'startYear', 'rating', 'url'
	        ],
	    },
	    list: {
	        title: 'Project List',
	        actions: ['edit'],
	        sort: {
	            field: 'name',
	            dir: 'ASC'
	        }
	    },
	    creation: {
	        fields: [
	            'companyId', 'name', 'alias', 'slogan', 'url',
	            'description', 'active', 'techIds',
	            'rating', 'durationMonth', 'teamSize',
	            'createdAt', 'startYear'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'companyId', 'name', 'alias', 'slogan', 'description', 'active',
	            'techIds', 'updates',
	            'rating', 'startYear', 'durationMonth', 'teamSize', 'updateCount',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'companyId', 'startYear'
	        ]
	    },
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Showcase entity module
	 *
	 * @date 04/17/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'showcase',
	    model: {
	        _id: { type: 'id' },
	        projectId: {
	            type: 'id', ref: 'project',
	        },
	        name: { type: 'string', required: true },
	        caption: 'string',
	        rating: 'integer',
	        createdAt: 'date',
	        updatedAt: 'date'
	    },
	    fields: {
	        name: {
	            type: 'string',
	            detailRoute: 'show',
	            field: 'name',
	            format: 'image',
	            url: 'https://s3-us-west-1.amazonaws.com/qplot-showcase/',
	            width: 200
	        },
	        projectId: {
	            field: 'projectId',
	            label: 'Project',
	            type: 'reference',
	            targetEntity: 'project',
	            targetField: 'name',
	            perPage: 100,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            pinned: true,
	        },
	        rating: {
	            format: 'rating'
	        },
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'projectId', 'name', 'caption', 'rating'
	        ],
	    },
	    list: {
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {},
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'projectId',
	            'name', 'caption', 'rating',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'projectId', 'name'
	        ]
	    },
	};


/***/ },
/* 7 */
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
	        url: 'string',
	        parentId: 'string',
	        category: 'string',
	        rating: 'integer',
	        startYear: 'integer',
	        childTechs: { type: '' },
	        updates: { type: 'referenced_list' },
	        createdAt: 'date',
	        updatedAt: 'date'
	    },
	    id: '_id',
	    fields: {
	        name: {
	            type: 'string',
	            detailRoute: 'show'
	        },
	        url: {
	            format: 'url',
	            caption: 'Go'
	        },
	        parentId: {
	            field: 'parentId',
	            type: 'reference',
	            targetEntity: 'tech',
	            targetField: 'name',
	            label: 'Parent Tech',
	            perPage: 100,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            pinned: true
	        },
	        updates: {
	            type: 'referenced_list',
	            targetEntity: 'update',
	            targetReferenceField: 'techId',
	            targetFields: ['projectId', 'title', 'rating'],
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            }
	        },
	        childTechs: {
	            label: 'Child Techs',
	            type: 'referenced_list',
	            targetEntity: 'tech',
	            targetReferenceField: 'parentId',
	            targetFields: ['name', 'slogan', 'category', 'rating'],
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            }
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
	            'rating', 'url'
	        ],
	    },
	    list: {
	        title: 'Tech List',
	        actions: ['edit'],
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
	            'name', 'slogan', 'category', 'parentId', 'childTechs',
	            'startYear', 'rating', 'updates',
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
/* 8 */
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
	        url: 'string',
	        rating: 'integer',
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        title: {
	            type: 'string',
	            detailRoute: 'show'
	        },
	        description: {
	            type: 'text',
	        },
	        projectId: {
	            field: 'projectId',
	            label: 'Project',
	            type: 'reference',
	            targetEntity: 'project',
	            targetField: 'name',
	            perPage: 100,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            pinned: true,
	        },
	        techId: {
	            field: 'techId',
	            label: 'Tech',
	            type: 'reference',
	            targetEntity: 'tech',
	            targetField: 'name',
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            perPage: 100
	        },
	        rating: {
	            format: 'rating'
	        },
	        url: {
	            format: 'url',
	            caption: 'Go'
	        },
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'projectId', 'title', 'techId', 'rating', 'createdAt', 'url'
	        ],
	    },
	    list: {
	        actions: ['edit'],
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {
	        fields: [
	            'projectId', 'title', 'techId', 'rating', 'url',
	            'description', 'createdAt'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'title',
	        fields: [
	            '_id',
	            'projectId', 'techId',
	            'title', 'description', 'rating', 'url',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'projectId', 'techId'
	        ]
	    },
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Directive module
	 *
	 * @date 04/01/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var dashboardDirectiveTemplate = __webpack_require__(10);

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
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"page-header\">\n            <h1>Welcome to QPLOT Proture</h1>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <small>Company, Project and Update</small>\n\n        <h2>Todos</h2>\n        <p>\n            <ul>\n                <li>Add gross income field to company</li>\n                <li>Model payment</li>\n                <li>Add ratings field to company and project</li>\n                <li>Add slogan field to project</li>\n            </ul>\n        </p>\n\n        <h2>Company</h2>\n\n        <p>\n        List of companies in the past, including .\n        </p>\n\n        <p>\n        The rest service should be highly scalable and always available (meaning load balanced and likely running on a couple of machines).\n\n        </p>\n\n        <h2>Project</h2>\n\n        <p>\n        As a developer, I want to evaluate events, identifying start and end points, creating notifications when an end point is reached. The event evaluator will correlate events using the app/subsystem/event name /correlation id (key) by running a mongo aggregation script that will poll the database looking for sets of correlated events that are not 'complete'.\n        </p>\n        <p>\n        The standard evaluation process will be setup as a pipeline of evaluators (probably derived from a standard class). Each evaluator in the pipeline will look at event and optionally emit a notification and  pass the event on to the next evaluator if the event is not fully handed by this evaluator.\n        </p>\n        <p>\n        At the end of the pipeline, a default evaluator will handle any event not handled by an upstream evaluator. The default evaluator will look for end points and when found will emit a default notification (sample below) and mark all correlated events in mongo as 'complete'.\n        </p>\n\n        <h2>Update:</h2>\n\n        <p>\n        As a user I've used the subscription UI to subscribe to certain notifications and have specified way to deliver the notification.\n        </p>\n        <p>\n        To determine if a notification has subscriptions and needs to be published, the subscription process will scan for new notifications i.e. have been saved since the last scan. For each new notification found the subscription process will scan the subscriptions collection and if a match is found write the notification to a separate collection -  subscriptedNotifications so they can be shown on the UI and optionally published to a user's email, etc.\n        </p>\n        <p>\n        The docs in the subscriptedNotifications collection will contain the base notification information along with the user id of the subscribed user. (We might be able to save an array of subscribed user ids and save some inserts for popular notifications. It will depend on how we are able to search arrays).\n        </p>\n\n    </div>\n</div>\n"

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Contact entity module
	 *
	 * @date 04/23/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'contact',
	    model: {
	        _id: { type: 'id' },
	        fullname: { type: 'string', required: true },
	        title: 'string',
	        description: 'text',
	        email: 'string',
	        phone: 'string',
	        url: 'string',
	        rating: 'integer',
	        projects: { type: 'referenced_list' },
	        createdAt: 'date',
	        updatedAt: 'date'
	    },
	    id: '_id',
	    fields: {
	        name: {
	            type: 'string',
	            detailRoute: 'show',
	            pinned: true
	        },
	        url: {
	            format: 'url',
	            caption: 'Go'
	        },
	        rating: {
	            format: 'rating'
	        },
	        projects: {
	            type: 'referenced_list',
	            targetEntity: 'member',
	            targetReferenceField: 'projectId',
	            targetFields: ['projectId', 'title', 'rating', 'createdAt'],
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            }
	        },
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    default: {
	        fields: [
	            'fullname', 'title', 'phone', 'email', 'url', 'description',
	            'rating', 'createdAt',
	        ],
	    },
	    list: {
	        title: 'Company List',
	        actions: ['edit'],
	        fields: [
	            'fullname', 'title', 'phone', 'rating', 'url'
	        ],
	        sort: {
	            field: 'fullname',
	            dir: 'ASC'
	        }
	    },
	    creation: {},
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'fullname', 'title', 'phone', 'email', 'url', 'description', 'rating',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'projectId', 'fullname', 'title'
	        ]
	    },
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Project member module
	 *
	 * @date 04/23/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'member',
	    model: {
	        _id: { type: 'id' },
	        projectId: { type: 'id', ref: 'project'},
	        contactId: { type: 'id', ref: 'contact'},
	        title: { type: 'string', required: true },
	        description: 'string',
	        email: 'string',
	        rating: 'integer',
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        name: {
	            type: 'string',
	            detailRoute: 'show'
	        },
	        projectId: {
	            field: 'projectId',
	            type: 'reference',
	            targetEntity: 'project',
	            targetField: 'name',
	            label: 'Project',
	            perPage: 100,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            pinned: true
	        },
	        contactId: {
	            field: 'contactId',
	            type: 'reference',
	            targetEntity: 'contact',
	            targetField: 'fullname',
	            label: 'Contact',
	            perPage: 100,
	            sort: {
	                field: 'fullname',
	                dir: 'ASC'
	            },
	            pinned: true
	        },
	        description: {
	            type: 'text',
	        },
	        rating: {
	            format: 'rating'
	        },
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'projectId', 'contactId', 'title',
	            'rating', 'createdAt',
	        ],
	    },
	    list: {
	        actions: ['edit'],
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {
	        fields: [
	            'projectId', 'contactId', 'title', 'email', 'description',
	            'rating', 'createdAt',
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'projectId', 'contactId', 'title', 'description',
	            'email', 'rating',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'projectId', 'contactId', 'title'
	        ]
	    },
	};


/***/ }
/******/ ]);