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
        projectId: { type: 'id', ref: 'project' },
        techId: { type: 'id', ref: 'tech' },
        entityId: { type: 'id', ref: 'entity' },
        title: { type: 'string', required: true },
        description: 'string',
        url: 'string',
        rating: 'integer',
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
        entityId: {
            field: 'entityId',
            label: 'Entity',
            type: 'reference',
            targetEntity: 'entity',
            targetField: 'name',
            targetFieldMap: function(value, entry) {
                return entry["project.name"] + " / " + value;
            },
            sort: {
                field: 'name',
                dir: 'ASC'
            },
            perPage: 100
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
        },
        createdAt: {
            label: 'Created',
            formatString: 'yyyy-MM-dd'
        }
    },
    id: '_id',
    default: {
        fields: [
            'projectId', 'title', 'techId', 'rating', 'createdAt', 'url'
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
            'projectId', 'entityId', 'title', 'techId', 'rating', 'url',
            'description', 'createdAt'
        ]
    },
    edition: {},
    show: {
        title: 'title',
        fields: [
            '_id',
            'projectId', 'entityId', 'techId',
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
