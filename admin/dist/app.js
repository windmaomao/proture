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
	var directive = __webpack_require__(21);

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
	    auth: true,
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
	        task: requireEntity('task'),
	        route: requireEntity('route'),
	        account: requireEntity('account'),
	        transaction: requireEntity('transaction'),
	        statement: requireEntity('statement'),
	        user: requireEntity('user'),
	        stock: requireEntity('stock'),
	        price: requireEntity('price'),
	        stat: requireEntity('stat'),
	    },
	    routes: [
	        {
	            title: 'Entity',
	            icon: 'tower',
	            items: [
	                'company',
	                'contact',
	                'stock',
	                'tech',
	                'user',
	                'stat'
	            ]
	        },
	        {
	            title: 'Project',
	            icon: 'briefcase',
	            items: [
	                'entity',
	                'member',
	                'project',
	                'route',
	                'showcase',
	                'task',
	                'update',
	            ]
	        },
	        {
	            title: 'Account',
	            icon: 'piggy-bank',
	            items: [
	                'account',
	                'price',
	                'statement',
	                'transaction'
	            ]
	        },
	    ],
	    dashboard: [
	        {
	            title: 'Site updates',
	            name: 'stat_latest',
	            entity: 'stat',
	            fields: ['name', 'total'],
	            perPage: 5,
	            sort: {
	                field: 'total',
	                dir: 'DESC'
	            },
	            actions: [],
	            order: 0
	        }
	    ]
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./account": 3,
		"./account.js": 3,
		"./common": 4,
		"./common.js": 4,
		"./company": 5,
		"./company.js": 5,
		"./contact": 6,
		"./contact.js": 6,
		"./entity": 7,
		"./entity.js": 7,
		"./member": 8,
		"./member.js": 8,
		"./price": 9,
		"./price.js": 9,
		"./project": 10,
		"./project.js": 10,
		"./route": 11,
		"./route.js": 11,
		"./showcase": 12,
		"./showcase.js": 12,
		"./stat": 13,
		"./stat.js": 13,
		"./statement": 14,
		"./statement.js": 14,
		"./stock": 15,
		"./stock.js": 15,
		"./task": 16,
		"./task.js": 16,
		"./tech": 17,
		"./tech.js": 17,
		"./transaction": 18,
		"./transaction.js": 18,
		"./update": 19,
		"./update.js": 19,
		"./user": 20,
		"./user.js": 20
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
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Account entity module
	 *
	 * @date 5/5/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var common = __webpack_require__(4);

	module.exports = {
	    entity: 'account',
	    model: {
	        _id: { type: 'id' },
	        companyId: { type: 'id', ref: 'company'},
	        'company.name': 'string',
	        parentId: { type: 'id', ref: 'account'},
	        name: { type: 'string', required: true },
	        // referenceName: 'string',
	        number: 'string',
	        type: 'string',
	        description: 'text',
	        active: 'boolean',
	        rating: 'integer',
	        subAccounts: { type: 'referenced_list' },
	        transactions: { type: 'referenced_list' },
	        statements: { type: 'referenced_list' },
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        name: {
	            type: 'string',
	            detailRoute: 'show'
	        },
	        'company.name': {
	            label: 'Company',
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
	        parentId: {
	            field: 'parentId',
	            type: 'reference',
	            targetEntity: 'account',
	            targetField: 'name',
	            targetFieldMap: function(value, entry) {
	                return entry["company.name"] + " / " + value;
	            },
	            label: 'Parent',
	            perPage: 1000,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	        },
	        subAccounts: {
	            type: 'referenced_list',
	            label: 'Sub Accounts',
	            targetEntity: 'account',
	            targetReferenceField: 'parentId',
	            targetFields: ['name', 'number', 'rating'],
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            perPage: 100,
	        },
	        transactions: {
	            type: 'referenced_list',
	            label: 'Transactions',
	            targetEntity: 'transaction',
	            targetReferenceField: 'accountId',
	            targetFields: ['amount', 'title', 'createdAt'],
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            },
	            perPage: 5,
	        },
	        statements: {
	            type: 'referenced_list',
	            targetEntity: 'statement',
	            targetReferenceField: 'accountId',
	            targetFields: ['title', 'net', 'balance', 'durationType', 'durationDate'],
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            }
	        },
	        rating: {
	            format: 'rating',
	            // type: 'choice',
	            // choices: common.ratings,
	        },
	        active: {
	            label: 'On'
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
	            'companyId', 'parentId', 'name', 'type', 'number', 'rating',
	        ],
	    },
	    list: {
	        actions: ['edit'],
	        sort: {
	            field: 'name',
	            dir: 'ASC'
	        }
	    },
	    creation: {
	        fields: [
	            'companyId', 'parentId',
	            'name', 'number', 'type',
	            'description', 'active',
	            'rating', 'createdAt'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'companyId', 'parentId', 'name', 'number', 'type', 'description',
	            'active', 'rating', 'subAccounts', 'transactions', 'statements',
	            // 'referenceName',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'companyId', 'active', 'rating', 'type', 'parentId',
	        ]
	    },
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Constants settings
	 *
	 * @module config
	 *
	 * @date 5/6/16
	 * @author Fang Jin <windmaomao@gmail.com>
	 */

	module.exports = {
	    durationTypes: [
	        { label: 'Monthly', value: 'monthly' },
	        { label: 'Annually', value: 'annually' },
	    ],
	    durationDates: [
	        { label: '2016', value: '2016' },
	        { label: '2015', value: '2015' },
	        { label: '2014', value: '2014' },
	        { label: '2013', value: '2013' },
	        { label: '2012', value: '2012' },
	        { label: 'January', value: 'Jan' },
	        { label: 'February', value: 'Feb' },
	        { label: 'March', value: 'Mar' },
	        { label: 'April', value: 'Apr' },
	        { label: 'May', value: 'May' },
	        { label: 'June', value: 'Jun' },
	        { label: 'July', value: 'Jul' },
	        { label: 'August', value: 'Aug' },
	        { label: 'September', value: 'Sep' },
	        { label: 'October', value: 'Oct' },
	        { label: 'November', value: 'Nov' },
	        { label: 'December', value: 'Dec' },
	    ],
	    ratings: [
	        { label: 'Awesome', value: '5' },
	        { label: 'Great', value: '4' },
	        { label: 'Good', value: '3' },
	        { label: 'OK', value: '2' },
	        { label: 'Not Good', value: '1' },
	        { label: 'Dislike', value: '0' },
	        { label: 'No take', value: '-1' },
	    ],
	    methods: [
	        { label: 'GET', value: 'GET' },
	        { label: 'POST', value: 'POST' },
	        { label: 'PUT', value: 'PUT' },
	        { label: 'PATCH', value: 'PATCH' },
	        { label: 'DELETE', value: 'DEL' },
	    ],
	    priceStatus: [
	        { label: 'Bull ^', value: 'bull' },
	        { label: 'Bear V', value: 'bear' },
	        { label: 'Flat -', value: 'flat' },
	    ]
	};


/***/ },
/* 5 */
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
	        accounts: { type: 'referenced_list' },
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
	        accounts: {
	            type: 'referenced_list',
	            targetEntity: 'account',
	            targetReferenceField: 'companyId',
	            targetFields: ['parentId', 'name', 'number','type', 'rating'],
	            sort: {
	                field: 'parentId',
	                dir: 'ASC'
	            }
	        },
	    },
	    default: {
	        fields: [
	            'active',
	            'name', 'alias', 'slogan', 'url', 'description',
	            'startYear', 'revenueTotal', 'rating'
	        ],
	    },
	    list: {
	        title: 'Company',
	        description: 'Company basic info, such as name, rating, revenue and start year.',
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
	            'rating', 'startYear', 'revenueTotal', 'projects', 'accounts',
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
/* 6 */
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
	        fullname: {
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
	            targetReferenceField: 'contactId',
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
	        title: 'Contact',
	        description: 'Contact people info, position, phone and rating etc.',
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
	            '_id', 'fullname', 'title',
	            'phone', 'email', 'url', 'description', 'rating', 'projects',
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
/* 7 */
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
	        projectId: { type: 'id', ref: 'project' },
	        parentId: { type: 'id', ref: 'entity' },
	        name: { type: 'string', required: true },
	        slogan: 'string',
	        description: 'text',
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        name: {
	            type: 'string',
	            detailRoute: 'show',
	        },
	        projectId: {
	            label: 'Project',
	            type: 'reference',
	            targetEntity: 'project',
	            targetField: 'name',
	            perPage: 1000,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            pinned: true,
	        },
	        parentId: {
	            label: 'Parent',
	            type: 'reference',
	            targetEntity: 'entity',
	            targetField: 'name',
	            targetFieldMap: function(value, entry) {
	                return entry['project.name'] + ': ' + entry.name;
	            },
	            perPage: 1000,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            // pinned: true,
	        },
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'projectId', 'name', 'slogan', 'createdAt'
	        ],
	    },
	    list: {
	        title: 'Entity',
	        description: 'Project entity for each project area with short description.',
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {
	        fields: [
	            'projectId', 'parentId', 'name', 'slogan', 'description', 'createdAt'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'projectId', 'name', 'slogan', 'description',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'projectId', 'name', 'parentId'
	        ]
	    },
	};


/***/ },
/* 8 */
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
	        title: {
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
	        title: 'Member',
	        description: 'Members of project with their titles and ratings.',
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Stock price entity module
	 *
	 * @date 05/15/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var common = __webpack_require__(4);

	module.exports = {
	    entity: 'price',
	    model: {
	        _id: { type: 'id' },
	        stockId: { type: 'id', ref: 'stock'},
	        price: { type: 'number', format: '$0,0.00' },
	        title: { type: 'string', detailRoute: 'show' },
	        status: 'string',
	        createdAt: { type: 'datetime', formatString: 'yyyy-MM-dd' },
	        updatedAt: 'datetime'
	    },
	    fields: {
	        stockId: {
	            field: 'stockId',
	            type: 'reference',
	            targetEntity: 'stock',
	            targetField: 'name',
	            label: 'Stock',
	            perPage: 1000,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            pinned: true
	        },
	        status: {
	            type: 'choice',
	            choices: common.priceStatus,
	        },
	        title: {
	            label: 'Notes'
	        },
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'stockId', 'price', 'status', 'title', 'createdAt',
	        ],
	    },
	    list: {
	        title: 'Price',
	        description: 'Stock price with price and note.',
	        actions: ['edit'],
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {},
	    edition: {},
	    show: {
	        title: 'title',
	        fields: [
	            '_id',
	            'stockId', 'price', 'status', 'title', 'createdAt',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'stockId', 'status',
	        ]
	    },
	};


/***/ },
/* 10 */
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
	        description: 'text',
	        url: 'string',
	        active: 'boolean',
	        rating: 'integer',
	        startYear: 'integer',
	        durationMonth: 'integer',
	        teamSize: 'integer',
	        techIds: { type: 'reference_many' },
	        updates: { type: 'referenced_list' },
	        members: { type: 'referenced_list' },
	        entities: { type: 'referenced_list' },
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
	            label: 'Updates',
	            targetEntity: 'update',
	            targetReferenceField: 'projectId',
	            targetFields: ['title', 'techId', 'rating', 'createdAt'],
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            },
	            perPage: 5,
	        },
	        members: {
	            type: 'referenced_list',
	            targetEntity: 'member',
	            targetReferenceField: 'projectId',
	            targetFields: ['contactId', 'title', 'rating', 'createdAt'],
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            }
	        },
	        entities: {
	            type: 'referenced_list',
	            targetEntity: 'entity',
	            targetReferenceField: 'projectId',
	            targetFields: ['parentId', 'name', 'slogan', 'createdAt'],
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            }
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
	        title: 'Project',
	        description: 'Company project with name, techs and website info etc.',
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
	            'rating', 'durationMonth',
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
	            'rating', 'startYear', 'durationMonth', 'members', 'entities',
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Project route module
	 *
	 * @date 04/24/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var common = __webpack_require__(4);

	module.exports = {
	    entity: 'route',
	    model: {
	        _id: { type: 'id' },
	        projectId: { type: 'id', ref: 'project'},
	        entityId: { type: 'id', ref: 'entity'},
	        action: { type: 'string', required: true },
	        method: 'string',
	        title: 'string',
	        description: 'string',
	        draft: 'boolean',
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        action: {
	            type: 'string',
	            detailRoute: 'show'
	        },
	        method: {
	            type: 'choice',
	            choices: common.methods,
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
	        entityId: {
	            field: 'entityId',
	            type: 'reference',
	            targetEntity: 'entity',
	            targetField: 'name',
	            targetFieldMap: function(value, entry) {
	                return entry["project.name"] + " " + value;
	            },
	            label: 'Entity',
	            perPage: 100,
	            sort: {
	                field: 'projectId',
	                dir: 'ASC'
	            },
	            pinned: true
	        },
	        description: {
	            type: 'text',
	        },
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'entityId', 'action', 'method', 'title',
	        ],
	    },
	    list: {
	        title: 'Route',
	        description: 'Project routes associating project entity and its actions.',
	        actions: ['edit'],
	        sort: {
	            field: 'entityId',
	            dir: 'ASC'
	        }
	    },
	    creation: {
	        fields: [
	            'projectId', 'entityId', 'action', 'method', 'title', 'description',
	            'draft', 'createdAt',
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'projectId', 'entityId', 'action', 'method',
	            'title', 'description', 'draft',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'projectId', 'entityId',
	        ]
	    },
	};


/***/ },
/* 12 */
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
	        title: 'Showcase',
	        description: 'Project showcase pictures.',
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
/* 13 */
/***/ function(module, exports) {

	/**
	 * Stat entity module
	 *
	 * @date 05/21/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'stat',
	    model: {
	        _id: { type: 'id' },
	        name: 'string',
	        total: 'integer',
	        newTotal: 'integer',
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'name', 'total', 'newTotal', 'createdAt'
	        ],
	    },
	    list: {
	        title: 'Stat',
	        description: 'Stats for all entities.',
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {},
	    edition: {},
	    show: {
	        fields: [
	            '_id',
	            'name', 'total', 'newTotal',
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Account statement module
	 *
	 * @date 5/5/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var common = __webpack_require__(4);

	module.exports = {
	    entity: 'statement',
	    model: {
	        _id: { type: 'id' },
	        accountId: { type: 'id', ref: 'account' },
	        transactionIds: { type: 'reference_many' },
	        previousId: { type: 'id', ref: 'statement' },
	        title: 'string',
	        net: 'number',
	        balance: 'number',
	        contribution: 'number',
	        description: 'string',
	        durationType: 'string',
	        durationDate: 'string',
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
	        net: {
	            format: '$0,0',
	        },
	        balance: {
	            format: '$0,0',
	        },
	        contribution: {
	            format: '$0,0',
	        },
	        accountId: {
	            field: 'accountId',
	            label: 'Account',
	            type: 'reference',
	            targetEntity: 'account',
	            targetField: 'name',
	            targetFieldMap: function(value, entry) {
	                return entry['company.name'] + ': ' +
	                    entry.name + ' (' + entry.type + ')';
	            },
	            perPage: 100,
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            pinned: true,
	        },
	        transactionIds: {
	            field: 'transactionIds',
	            type: 'reference_many',
	            label: 'Transactions',
	            targetEntity: 'transaction',
	            targetField: '_id',
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            }
	        },
	        previousId: {
	            field: 'previousId',
	            label: 'Previous',
	            type: 'reference',
	            targetEntity: 'statement',
	            targetField: 'durationDate',
	            sort: {
	                field: 'createdAt',
	                dir: 'DESC'
	            },
	            perPage: 1000
	        },
	        durationType: {
	            label: 'Duration',
	            type: 'choice',
	            choices: common.durationTypes,
	        },
	        durationDate: {
	            label: 'Date',
	            type: 'choice',
	            choices: common.durationDates,
	        },
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'accountId', 'durationType', 'durationDate',
	            'net', 'contribution', 'balance',
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
	            'accountId',
	            'durationType', 'durationDate',
	            'net', 'contribution', 'balance', 'title'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'title',
	        fields: [
	            '_id',
	            'accountId',
	            'durationType', 'durationDate',
	            'net', 'contribution', 'balance', 'title',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'accountId', 'durationType', 'durationDate'
	        ]
	    },
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Stock entity module
	 *
	 * @date 5/15/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var common = __webpack_require__(4);

	module.exports = {
	    entity: 'stock',
	    model: {
	        _id: { type: 'id' },
	        name: { type: 'string', detailRoute: 'show' },
	        symbol: 'string',
	        sector: 'string',
	        category: 'string',
	        slogan: 'string',
	        description: 'string',
	        startYear: 'integer',
	        rating: { type: 'integer', format: 'rating' },
	        createdAt: { type: 'datetime', formatString: 'yyyy-MM-dd' },
	        updatedAt: 'datetime'
	    },
	    fields: {
	        createdAt: {
	            label: 'Created',
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'name', 'symbol', 'sector', 'category', 'rating',
	        ],
	    },
	    list: {
	        title: 'Stock',
	        description: 'Stock in collection with name, sector and category etc.',
	        actions: ['edit'],
	        sort: {
	            field: 'name',
	            dir: 'ASC'
	        }
	    },
	    creation: {
	        fields: [
	            'name', 'symbol', 'sector', 'category',
	            'slogan', 'description',
	            'startYear', 'rating',
	            'createdAt'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'name',
	        fields: [
	            '_id',
	            'name', 'symbol', 'sector', 'category',
	            'slogan', 'description',
	            'startYear', 'rating',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'name', 'symbol', 'sector', 'category',
	            'startYear', 'rating',
	        ]
	    },
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Update task module
	 *
	 * @date 04/24/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'task',
	    model: {
	        _id: { type: 'id' },
	        projectId: {
	            type: 'id', ref: 'project',
	        },
	        contactId: {
	            type: 'id', ref: 'contact',
	        },
	        title: { type: 'string', required: true },
	        description: 'string',
	        completed: 'boolean',
	        postponed: 'boolean',
	        promoted: 'boolean',
	        duration: 'integer',
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
	        contactId: {
	            field: 'contactId',
	            label: 'Author',
	            type: 'reference',
	            targetEntity: 'contact',
	            targetField: 'fullname',
	            sort: {
	                field: 'fullname',
	                dir: 'ASC'
	            },
	            perPage: 100
	        },
	        createdAt: {
	            label: 'Created',
	            formatString: 'yyyy-MM-dd'
	        }
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'projectId', 'title', 'contactId', 'completed', 'duration', 'createdAt'
	        ],
	    },
	    list: {
	        title: 'Task',
	        description: 'Project task with title and description etc.',
	        actions: ['edit'],
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {
	        fields: [
	            'projectId', 'contactId',
	            'title', 'description', 'completed', 'postponed', 'promoted',
	            'duration', 'createdAt'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'title',
	        fields: [
	            '_id',
	            'projectId', 'contactId',
	            'title', 'description', 'completed', 'postponed', 'promoted', 'duration',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'projectId', 'contactId'
	        ]
	    },
	};


/***/ },
/* 17 */
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
	        subTechs: { type: '' },
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
	            perPage: 1000,
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
	        subTechs: {
	            label: 'Sub Techs',
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
	        title: 'Tech',
	        description: 'Technology software or tool, with name, category and rating etc.',
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
	            'name', 'slogan', 'category', 'parentId', 'subTechs',
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
/* 18 */
/***/ function(module, exports) {

	/**
	 * Account transaction module
	 *
	 * @date 5/5/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'transaction',
	    model: {
	        _id: { type: 'id' },
	        accountId: { type: 'id', ref: 'account' },
	        amount: 'number',
	        title: 'string',
	        description: 'string',
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        amount: {
	            type: 'number',
	            format: '$0,0',
	        },
	        title: {
	            detailRoute: 'show'
	        },
	        description: {
	            type: 'text',
	        },
	        accountId: {
	            field: 'accountId',
	            label: 'Account',
	            type: 'reference',
	            targetEntity: 'account',
	            targetField: 'name',
	            targetFieldMap: function(value, entry) {
	                return entry["company.name"] + " " + value;
	            },
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
	            'accountId', 'title', 'amount', 'createdAt'
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
	            'accountId', 'amount', 'title', 'description', 'createdAt'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'title',
	        fields: [
	            '_id',
	            'accountId', 'amount', 'title', 'description',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'accountId',
	        ]
	    },
	};


/***/ },
/* 19 */
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
	        projectId: { type: 'id', ref: 'project' },
	        techId: { type: 'id', ref: 'tech' },
	        entityId: { type: 'id', ref: 'entity' },
	        title: { type: 'string', required: true },
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
	        entityId: {
	            field: 'entityId',
	            label: 'Entity',
	            type: 'reference',
	            targetEntity: 'entity',
	            targetField: 'name',
	            targetFieldMap: function(value, entry) {
	                return entry["project.name"] + " / " + value;
	            },
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	            perPage: 100
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
	            perPage: 1000
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
	        title: 'Update',
	        description: 'Project updates on tech, entity or general notes etc.',
	        actions: ['edit'],
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {
	        fields: [
	            'projectId', 'entityId', 'title', 'techId', 'rating', 'url',
	            'description', 'createdAt'
	        ]
	    },
	    edition: {},
	    show: {
	        title: 'title',
	        fields: [
	            '_id',
	            'projectId', 'entityId', 'techId',
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
/* 20 */
/***/ function(module, exports) {

	/**
	 * User entity module
	 *
	 * @date 05/14/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	module.exports = {
	    entity: 'user',
	    model: {
	        _id: { type: 'id' },
	        username: { type: 'string', required: true },
	        // password: { type: String, required: true },
	        firstname: 'string',
	        lastname: 'string',
	        type: 'string',
	        active: 'boolean',
	        companyIds: { type: 'reference_many' },
	        createdAt: 'datetime',
	        updatedAt: 'datetime'
	    },
	    fields: {
	        companyIds: {
	            field: 'companyIds',
	            type: 'reference_many',
	            label: 'Companies',
	            targetEntity: 'company',
	            targetField: 'name',
	            sort: {
	                field: 'name',
	                dir: 'ASC'
	            },
	        },
	    },
	    id: '_id',
	    default: {
	        fields: [
	            'username', 'firstname', 'lastname', 'type', 'active'
	        ]
	    },
	    list: {
	        title: 'User',
	        description: "Registered users. User belongs to companies.",
	        sort: {
	            field: 'createdAt',
	            dir: 'DESC'
	        }
	    },
	    creation: {},
	    edition: {},
	    show: {
	        title: 'username',
	        fields: [
	            '_id',
	            'username', 'firstname', 'lastname', 'type', 'active',
	            'createdAt', 'updatedAt'
	        ]
	    },
	    search: {
	        fields: [
	            'username', 'active', 'type'
	        ]
	    }
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Directive module
	 *
	 * @date 04/01/16
	 * @author Fang Jin <windmaomao@gmail.com>
	*/

	var dashboardDirectiveTemplate = __webpack_require__(22);

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
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"page-header\">\n            <h1>Proture <small>QPLOT Knowledgebase</small> </h1>\n            <p class=\"lead\">\n                <span>\n                    Centralize company information in organized way.\n                </span>\n            </p>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"col-lg-4 col-md-6\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  <b>New item this week</b>\n              </div>\n              <div class=\"panel-body list-group\">\n                    <li class=\"list-group-item\">\n                      <span class=\"badge\">2</span>\n                      Company\n                    </li>\n\n                    <li class=\"list-group-item\">\n                      <span class=\"badge\">8</span>\n                      Contact\n                    </li>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  <b>Total items</b>\n              </div>\n              <div class=\"panel-body list-group\">\n                    <li class=\"list-group-item\">\n                      <span class=\"badge\">2</span>\n                      Company\n                    </li>\n\n                    <li class=\"list-group-item\">\n                      <span class=\"badge\">8</span>\n                      Contact\n                    </li>\n\n                    <li class=\"list-group-item\">\n                      <span class=\"badge\">2</span>\n                      Stock\n                    </li>\n\n              </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  <b>Top items</b>\n              </div>\n              <div class=\"panel-body\">\n                  <table class=\"table table-hover\">\n                      <!-- <thead>\n                        <tr>\n                          <th></th>\n                          <th>Items</th>\n                        </tr>\n                      </thead> -->\n                      <tbody>\n                        <tr>\n                          <td>Company</td>\n                          <td>\n                              <span class=\"label label-default\">QPLOT</span>\n                              <span class=\"label label-default\">PeopleDesigns</span>\n                              <span class=\"label label-default\">Design Hammer</span>\n                          </td>\n                        </tr>\n                        <tr>\n                            <td>Contact</td>\n                            <td>\n                                <span class=\"label label-default\">Fang Jin</span>\n                                <span class=\"label label-default\">Zhengzheng Hu</span>\n                                <span class=\"label label-default\">Design Hammer</span>\n                            </td>\n                        </tr>\n                        <tr>\n                          <td>July</td>\n                          <td>Dooley</td>\n                        </tr>\n                      </tbody>\n                    </table>\n\n              </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-12\">\n    </div>\n</div>\n"

/***/ }
/******/ ]);