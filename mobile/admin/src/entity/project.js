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
        description: 'string',
        active: 'boolean',
        rating: 'integer',
        startYear: 'integer',
        durationMonth: 'integer',
        teamSize: 'integer',
        updateCount: 'integer',
        techIds: { type: 'reference_many' },
        // techCount: { type: 'template' },
        updates: { type: 'referenced_list' },
        createdAt: 'date',
        updatedAt: 'date'
    },
    fields: {
        name: {
            type: 'string',
            detailRoute: 'show'
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
            targetEntity: 'update',
            targetReferenceField: 'projectId',
            targetFields: ['title', 'techId', 'rating'],
            sort: {
                field: 'createdAt',
                dir: 'DESC'
            }
        },
        // techCount: {
        //     field: 'techCount',
        //     label: 'Techs',
        //     type: 'template',
        //     template: '{{ entry.values.techIds.length }}'
        // },
        description: {
            type: 'text',
        },
        rating: {
            format: 'rating'
        },
        active: {
            label: 'On'
        },
        startYear: {
            label: "Year"
        },
        durationMonth: {
            label: "Months"
        },
        teamSize: {
            label: "Team"
        },
        updateCount: {
            label: "Updates"
        }
    },
    id: '_id',
    default: {
        fields: [
            'active',
            'name', 'companyId', 'slogan', 'techIds',
            'startYear', 'rating',
        ],
    },
    list: {
        title: 'Project List',
        sort: {
            field: 'name',
            dir: 'ASC'
        }
    },
    creation: {
        fields: [
            'companyId', 'name', 'alias', 'slogan', 'description', 'active', 'techIds',
            'rating', 'startYear', 'durationMonth', 'teamSize',
        ]
    },
    edition: {},
    show: {
        title: 'name',
        fields: [
            '_id',
            'companyId', 'name', 'alias', 'slogan', 'description', 'active',
            'techIds', 'updates',
            'rating', 'startYear', 'durationMonth', 'teamSize', 'updateCount',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'companyId'
        ]
    },
};
