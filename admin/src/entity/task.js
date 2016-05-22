/**
 * Update task module
 *
 * @date 04/24/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'task',
    model: {
        _id: { type: 'id' },
        projectId: {
            type: 'id', ref: 'project',
        },
        contactId: {
            type: 'id', ref: 'contact',
        },
        title: { type: 'string', required: true },
        description: 'string',
        completed: 'boolean',
        postponed: 'boolean',
        promoted: 'boolean',
        duration: 'integer',
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
        contactId: {
            field: 'contactId',
            label: 'Author',
            type: 'reference',
            targetEntity: 'contact',
            targetField: 'fullname',
            sort: {
                field: 'fullname',
                dir: 'ASC'
            },
            perPage: 100
        },
        createdAt: {
            label: 'Created',
            formatString: 'yyyy-MM-dd'
        }
    },
    id: '_id',
    default: {
        fields: [
            'projectId', 'title', 'contactId', 'completed', 'duration', 'createdAt'
        ],
    },
    list: {
        title: 'Task',
        description: 'Project task with title and description etc.',
        actions: ['edit'],
        sort: {
            field: 'createdAt',
            dir: 'DESC'
        }
    },
    creation: {
        fields: [
            'projectId', 'contactId',
            'title', 'description', 'completed', 'postponed', 'promoted',
            'duration', 'createdAt'
        ]
    },
    edition: {},
    show: {
        title: 'title',
        fields: [
            '_id',
            'projectId', 'contactId',
            'title', 'description', 'completed', 'postponed', 'promoted', 'duration',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'projectId', 'contactId'
        ]
    },
};
