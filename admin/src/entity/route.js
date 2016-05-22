/**
 * Project route module
 *
 * @date 04/24/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

var common = require('./common');

module.exports = {
    entity: 'route',
    model: {
        _id: { type: 'id' },
        projectId: { type: 'id', ref: 'project'},
        entityId: { type: 'id', ref: 'entity'},
        action: { type: 'string', required: true },
        method: 'string',
        title: 'string',
        description: 'string',
        draft: 'boolean',
        createdAt: 'datetime',
        updatedAt: 'datetime'
    },
    fields: {
        action: {
            type: 'string',
            detailRoute: 'show'
        },
        method: {
            type: 'choice',
            choices: common.methods,
        },
        projectId: {
            field: 'projectId',
            type: 'reference',
            targetEntity: 'project',
            targetField: 'name',
            label: 'Project',
            perPage: 100,
            sort: {
                field: 'name',
                dir: 'ASC'
            },
            pinned: true
        },
        entityId: {
            field: 'entityId',
            type: 'reference',
            targetEntity: 'entity',
            targetField: 'name',
            targetFieldMap: function(value, entry) {
                return entry["project.name"] + " / " + value;
            },
            label: 'Entity',
            perPage: 100,
            sort: {
                field: 'projectId',
                dir: 'ASC'
            },
            pinned: true
        },
        description: {
            type: 'text',
        },
        createdAt: {
            label: 'Created',
            formatString: 'yyyy-MM-dd'
        }
    },
    id: '_id',
    default: {
        fields: [
            'entityId', 'action', 'method', 'title',
        ],
    },
    list: {
        title: 'Route',
        description: 'Project routes associating project entity and its actions.',
        actions: ['edit'],
        sort: {
            field: 'entityId',
            dir: 'ASC'
        }
    },
    creation: {
        fields: [
            'projectId', 'entityId', 'action', 'method', 'title', 'description',
            'draft', 'createdAt',
        ]
    },
    edition: {},
    show: {
        title: 'name',
        fields: [
            '_id',
            'projectId', 'entityId', 'action', 'method',
            'title', 'description', 'draft',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'projectId', 'entityId',
        ]
    },
};
