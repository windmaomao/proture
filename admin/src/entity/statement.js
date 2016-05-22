/**
 * Account statement module
 *
 * @date 5/5/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

var common = require('./common');

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
