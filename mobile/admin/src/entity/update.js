/**
 * Update entity module
 *
 * @date 04/13/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'update',
    model: {
        _id: { type: 'id' },
        projectId: {
            type: 'id', ref: 'project',
        },
        title: { type: 'string', required: true },
        techId: {
            type: 'id', ref: 'tech',
        },
        description: 'string',
        rating: 'integer',
        createdAt: 'date',
        updatedAt: 'date'
    },
    fields: {
        projectId: {
            field: 'projectId',
            label: 'Project',
            type: 'reference',
            targetEntity: 'project',
            targetField: 'name'
        },
        techId: {
            field: 'techId',
            label: 'Tech',
            type: 'reference',
            targetEntity: 'tech',
            targetField: 'name'
        },
        rating: {
            format: 'rating'
        },
    },
    id: '_id',
    default: {
        fields: [
            'projectId', 'title', 'techId', 'rating'
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
            'projectId', 'title', 'techId', 'rating',
            'description'
        ]
    },
    edition: {},
    show: {
        title: 'title',
        fields: [
            '_id',
            'projectId', 'techId',
            'title', 'description', 'rating',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'title'
        ]
    },
};
