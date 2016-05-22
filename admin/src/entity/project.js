/**
 * Project entity module
 *
 * @date 04/13/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'project',
    model: {
        _id: { type: 'id' },
        companyId: { type: 'id', ref: 'company'},
        name: { type: 'string', required: true },
        alias: { type: 'string', required: true },
        slogan: 'string',
        description: 'text',
        url: 'string',
        active: 'boolean',
        rating: 'integer',
        startYear: 'integer',
        durationMonth: 'integer',
        teamSize: 'integer',
        techIds: { type: 'reference_many' },
        updates: { type: 'referenced_list' },
        members: { type: 'referenced_list' },
        entities: { type: 'referenced_list' },
        createdAt: 'datetime',
        updatedAt: 'datetime'
    },
    fields: {
        name: {
            type: 'string',
            detailRoute: 'show'
        },
        url: {
            format: 'url',
            caption: 'Go'
        },
        companyId: {
            field: 'companyId',
            type: 'reference',
            targetEntity: 'company',
            targetField: 'name',
            label: 'Company',
            perPage: 100,
            sort: {
                field: 'name',
                dir: 'ASC'
            },
            pinned: true
        },
        techIds: {
            field: 'techIds',
            type: 'reference_many',
            label: 'Techs',
            targetEntity: 'tech',
            targetField: 'name',
            sort: {
                field: 'name',
                dir: 'ASC'
            }
        },
        updates: {
            type: 'referenced_list',
            label: 'Updates',
            targetEntity: 'update',
            targetReferenceField: 'projectId',
            targetFields: ['title', 'techId', 'rating', 'createdAt'],
            sort: {
                field: 'createdAt',
                dir: 'DESC'
            },
            perPage: 5,
        },
        members: {
            type: 'referenced_list',
            targetEntity: 'member',
            targetReferenceField: 'projectId',
            targetFields: ['contactId', 'title', 'rating', 'createdAt'],
            sort: {
                field: 'createdAt',
                dir: 'DESC'
            }
        },
        entities: {
            type: 'referenced_list',
            targetEntity: 'entity',
            targetReferenceField: 'projectId',
            targetFields: ['parentId', 'name', 'slogan', 'createdAt'],
            sort: {
                field: 'createdAt',
                dir: 'DESC'
            }
        },
        rating: {
            format: 'rating'
        },
        active: {
            label: 'On'
        },
        startYear: {
            label: "Launched"
        },
        durationMonth: {
            label: "Months"
        },
        teamSize: {
            label: "Team"
        },
        createdAt: {
            label: 'Created',
            formatString: 'yyyy-MM-dd'
        }
    },
    id: '_id',
    default: {
        fields: [
            'active',
            'name', 'companyId', 'slogan', 'techIds',
            'createdAt', 'startYear', 'rating', 'url'
        ],
    },
    list: {
        title: 'Project',
        description: 'Company project with name, techs and website info etc.',
        actions: ['edit'],
        sort: {
            field: 'name',
            dir: 'ASC'
        }
    },
    creation: {
        fields: [
            'companyId', 'name', 'alias', 'slogan', 'url',
            'description', 'active', 'techIds',
            'rating', 'durationMonth',
            'createdAt', 'startYear'
        ]
    },
    edition: {},
    show: {
        title: 'name',
        fields: [
            '_id',
            'companyId', 'name', 'alias', 'slogan', 'description', 'active',
            'techIds', 'updates',
            'rating', 'startYear', 'durationMonth', 'members', 'entities',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'companyId', 'startYear'
        ]
    },
};
