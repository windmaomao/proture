/**
 * Project member module
 *
 * @date 04/23/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'member',
    model: {
        _id: { type: 'id' },
        projectId: { type: 'id', ref: 'project'},
        contactId: { type: 'id', ref: 'contact'},
        title: { type: 'string', required: true },
        description: 'string',
        email: 'string',
        rating: 'integer',
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
        contactId: {
            field: 'contactId',
            type: 'reference',
            targetEntity: 'contact',
            targetField: 'fullname',
            label: 'Contact',
            perPage: 100,
            sort: {
                field: 'fullname',
                dir: 'ASC'
            },
            pinned: true
        },
        description: {
            type: 'text',
        },
        rating: {
            format: 'rating'
        },
        createdAt: {
            label: 'Created',
            formatString: 'yyyy-MM-dd'
        }
    },
    id: '_id',
    default: {
        fields: [
            'projectId', 'contactId', 'title',
            'rating', 'createdAt',
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
            'projectId', 'contactId', 'title', 'email', 'description',
            'rating', 'createdAt',
        ]
    },
    edition: {},
    show: {
        title: 'name',
        fields: [
            '_id',
            'projectId', 'contactId', 'title', 'description',
            'email', 'rating',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'projectId', 'contactId', 'title'
        ]
    },
};
