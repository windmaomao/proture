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
        entity: 'string',
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
            'entity', 'total', 'newTotal', 'createdAt'
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
            'entity', 'total', 'newTotal',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'name'
        ]
    },
};
