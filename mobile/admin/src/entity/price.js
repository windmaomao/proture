/**
 * Stock price entity module
 *
 * @date 05/15/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

var common = require('./common');

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
