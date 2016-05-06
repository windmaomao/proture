/**
 * Account statement module
 *
 * @date 5/5/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

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
        accountId: {
            field: 'accountId',
            label: 'Account',
            type: 'reference',
            targetEntity: 'account',
            targetField: 'name',
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
        createdAt: {
            label: 'Created',
            formatString: 'yyyy-MM-dd'
        }
    },
    id: '_id',
    default: {
        fields: [
            'title', 'net', 'balance', 'contribution', 'durationType', 'durationDate'
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
            'accountId', 'title', 'net', 'balance', 'contribution',
            'durationType', 'durationDate',
        ]
    },
    edition: {},
    show: {
        title: 'title',
        fields: [
            '_id',
            'accountId', 'title', 'net', 'balance', 'contribution',
            'durationType', 'durationDate',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'accountId',
        ]
    },
};
