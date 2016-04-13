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
        techCount: { type: 'template' },
        createdAt: 'date',
        updatedAt: 'date'
    },
    fields: {
        companyId: {
            field: 'companyId',
            type: 'reference',
            targetEntity: 'company',
            targetField: 'name',
            label: 'Company',
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
        techCount: {
            field: 'techCount',
            label: 'Techs',
            type: 'template',
            template: '{{ entry.values.techIds.length }}'
        },
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
            'startYear', 'durationMonth', 'rating',
        ],
    },
    list: {
        title: 'Project List',
        sort: {
            field: 'rating',
            dir: 'DESC'
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
            'techIds',
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
