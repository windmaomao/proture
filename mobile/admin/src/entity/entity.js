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
        projectId: { type: 'id', ref: 'project' },
        parentId: { type: 'id', ref: 'entity' },
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
            label: 'Project',
            type: 'reference',
            targetEntity: 'project',
            targetField: 'name',
            perPage: 1000,
            sort: {
                field: 'name',
                dir: 'ASC'
            },
            pinned: true,
        },
        parentId: {
            label: 'Parent',
            type: 'reference',
            targetEntity: 'entity',
            targetField: 'name',
            targetFieldMap: function(value, entry) {
                return entry['project.name'] + ': ' + entry.name;
            },
            perPage: 1000,
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
            'projectId', 'name', 'slogan',
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
            'projectId', 'parentId', 'name', 'slogan', 'description', 'createdAt'
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
            'projectId', 'name', 'parentId'
        ]
    },
};
