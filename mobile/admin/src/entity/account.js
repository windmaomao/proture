/**
 * Account entity module
 *
 * @date 5/5/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

var common = require('./common');

module.exports = {
    entity: 'account',
    model: {
        _id: { type: 'id' },
        companyId: { type: 'id', ref: 'company'},
        parentId: { type: 'id', ref: 'account'},
        name: { type: 'string', required: true },
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
            label: 'Parent',
            perPage: 1000,
            sort: {
                field: 'name',
                dir: 'ASC'
            },
            pinned: true
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
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'companyId', 'active', 'rating', 'type', 'parentId',
        ]
    },
};
