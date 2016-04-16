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
        url: 'string',
        rating: 'integer',
        createdAt: 'date',
        updatedAt: 'date'
    },
    fields: {
        title: {
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
        techId: {
            field: 'techId',
            label: 'Tech',
            type: 'reference',
            targetEntity: 'tech',
            targetField: 'name',
            sort: {
                field: 'name',
                dir: 'ASC'
            },
            perPage: 100
        },
        rating: {
            format: 'rating'
        },
        url: {
            format: 'url',
            caption: 'Go'
        }
    },
    id: '_id',
    default: {
        fields: [
            'projectId', 'title', 'techId', 'rating', 'url'
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
            'projectId', 'title', 'techId', 'rating', 'url',
            'description', 'createdAt'
        ]
    },
    edition: {},
    show: {
        title: 'title',
        fields: [
            '_id',
            'projectId', 'techId',
            'title', 'description', 'rating', 'url',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'projectId', 'techId'
        ]
    },
};
