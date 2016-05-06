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
