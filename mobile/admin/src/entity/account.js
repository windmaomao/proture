/**
 * Account entity module
 *
 * @date 5/5/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'account',
    model: {
        _id: { type: 'id' },
        companyId: { type: 'id', ref: 'company'},
        name: { type: 'string', required: true },
        number: 'string',
        type: 'string',
        description: 'text',
        active: 'boolean',
        rating: 'integer',
        // techIds: { type: 'reference_many' },
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
        // techIds: {
        //     field: 'techIds',
        //     type: 'reference_many',
        //     label: 'Techs',
        //     targetEntity: 'tech',
        //     targetField: 'name',
        //     sort: {
        //         field: 'name',
        //         dir: 'ASC'
        //     }
        // },
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
            format: 'rating'
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
            'companyId', 'name', 'type', 'number', 'rating',
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
            'companyId', 'name', 'number', 'type',
            'description', 'active',
            'rating', 'createdAt'
        ]
    },
    edition: {},
    show: {
        title: 'name',
        fields: [
            '_id',
            'companyId', 'name', 'number', 'type', 'description',
            'active', 'rating', 'transactions',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'companyId', 'active', 'rating', 'type'
        ]
    },
};
