/**
 * Stock entity module
 *
 * @date 5/15/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

var common = require('./common');

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
            'name', 'symbol', 'sector', 'category', 'slogan', 'startYear', 'rating',
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
