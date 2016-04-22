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
