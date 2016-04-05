/**
 * NG Admin config module
 *
 * Use a script to define the setting for ng-admin
 *
 * @date 03/25/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    site: 'Proture',
    url: '/v1/',
    entities: {
        company: {
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
                createdAt: 'date',
                updatedAt: 'date'
            },
            id: '_id',
            fields: {
                rating: {
                    format: 'rating'
                },
                startYear: {
                    label: "Year"
                },
                revenueTotal: {
                    label: "Revenue"
                },
                projectCount: {
                    label: "Projects"
                }
            },
            default: {
                fields: [
                    'name', 'alias', 'slogan',
                    'active',
                    'startYear', 'revenueTotal', 'projectCount', 'rating'
                ],
            },
            list: {
                sort: {
                    field: 'name',
                    dir: 'ASC'
                }
            },
            creation: {},
            edition: {},
            show: {
                fields: [
                    '_id',
                    'name', 'alias', 'slogan', 'active',
                    'rating', 'startYear', 'revenueTotal', 'projectCount',
                    'createdAt', 'updatedAt'
                ]
            },
            search: {
                fields: [
                    'name'
                ]
            },
        },
        project: {
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
                rating: {
                    format: 'rating'
                },
                startYear: {
                    label: "Year"
                },
                durationMonth: {
                    label: "Duration"
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
                    'name', 'slogan',
                    'active',
                    'startYear', 'durationMonth', 'teamSize', 'rating'
                ],
            },
            list: {
                sort: {
                    field: 'name',
                    dir: 'ASC'
                }
            },
            creation: {
                fields: [
                    'companyId', 'name', 'alias', 'slogan', 'active',
                    'rating', 'startYear', 'durationMonth', 'teamSize',
                ]
            },
            edition: {},
            show: {
                fields: [
                    '_id',
                    'companyId', 'name', 'alias', 'slogan', 'active',
                    'rating', 'startYear', 'durationMonth', 'teamSize', 'updateCount',
                    'createdAt', 'updatedAt'
                ]
            },
            search: {
                fields: [
                    'companyId'
                ]
            },
        },
        update: {
            entity: 'update',
            model: {
                _id: { type: 'id' },
                projectId: {
                    type: 'id', ref: 'project',
                },
                title: { type: 'string', required: true },
                createdAt: 'date',
                updatedAt: 'date'
            },
            fields: {
                projectId: {
                    field: 'projectId',
                    type: 'reference',
                    targetEntity: 'project',
                    targetField: 'name'
                }
            },
            id: '_id',
            default: {
                fields: [
                    'projectId', 'title',
                ],
            },
            list: {},
            creation: {},
            edition: {},
            show: {
                fields: [
                    '_id',
                    'projectId', 'title',
                    'createdAt', 'updatedAt'
                ]
            },
            search: {
                fields: [
                    'title'
                ]
            },
        }
    },
};
