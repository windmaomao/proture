/**
 * Company entity module
 *
 * @date 04/13/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'company',
    model: {
        _id: { type: 'id' },
        name: { type: 'string', required: true },
        alias: { type: 'string', required: true },
        slogan: 'string',
        description: 'string',
        active: 'boolean',
        rating: 'integer',
        startYear: 'integer',
        revenueTotal: 'integer',
        projectCount: 'integer',
        projects: { type: 'referenced_list' },
        createdAt: 'date',
        updatedAt: 'date'
    },
    id: '_id',
    fields: {
        name: {
            type: 'string',
            detailRoute: 'show'
        },
        rating: {
            format: 'rating'
        },
        startYear: {
            label: "Year"
        },
        revenueTotal: {
            type: 'number',
            format: '$0,0',
            label: "Revenue",
        },
        projectCount: {
            label: "Projects",
        },
        projects: {
            type: 'referenced_list',
            targetEntity: 'project',
            targetReferenceField: 'companyId',
            targetFields: ['name', 'slogan', 'startYear','rating'],
            sort: {
                field: 'startYear',
                dir: 'DESC'
            }
        }
    },
    default: {
        fields: [
            'active',
            'name', 'alias', 'slogan',
            'startYear', 'revenueTotal', 'projectCount', 'rating'
        ],
    },
    list: {
        title: 'Company List',
        actions: ['show', 'edit'],
        sort: {
            field: 'revenue',
            dir: 'DESC'
        }
    },
    creation: {},
    edition: {},
    show: {
        title: 'name',
        fields: [
            '_id',
            'name', 'alias', 'slogan', 'active',
            'rating', 'startYear', 'revenueTotal', 'projects',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'name'
        ]
    },
};
