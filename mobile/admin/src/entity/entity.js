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
            'projectId', 'name', 'slogan', 'createdAt'
        ],
    },
    list: {
        sort: {
            field: 'createdAt',
            dir: 'DESC'
        }
    },
    creation: {
        fields: [
            'projectId', 'name', 'slogan', 'description', 'createdAt'
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
            'projectId', 'name'
        ]
    },
};
