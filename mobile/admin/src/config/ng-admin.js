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
                projects: { type: 'referenced_list' },
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
                    format: 'amount',
                    label: "Revenue"
                },
                projectCount: {
                    label: "Projects",
                },
                projects: {
                    type: 'referenced_list',
                    targetEntity: 'project',
                    targetReferenceField: 'companyId',
                    targetFields: {
                        'Name': 'name',
                        'Slogan': 'slogan',
                        'Year': 'startYear'
                    },
                    sort: {
                        field: 'createdAt',
                        dir: 'DESC'
                    }
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
                title: 'Company List',
                actions: [],
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
                    'rating', 'startYear', 'revenueTotal', 'projects',
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
        },
        tech: {
            entity: 'tech',
            model: {
                _id: { type: 'id' },
                name: { type: 'string', required: true },
                slogan: 'string',
                parentId: 'string',
                category: 'string',
                rating: 'integer',
                startYear: 'integer',
                projectCount: 'integer',
                createdAt: 'date',
                updatedAt: 'date'
            },
            id: '_id',
            fields: {
                parentId: {
                    field: 'parentId',
                    type: 'reference',
                    targetEntity: 'tech',
                    targetField: 'name',
                    label: 'Parent',
                    pinned: true
                },
                rating: {
                    format: 'rating'
                },
                startYear: {
                    label: "Year"
                },
                projectCount: {
                    label: "Projects"
                }
            },
            default: {
                fields: [
                    'parentId',
                    'name', 'slogan', 'category',
                    'startYear', 'projectCount', 'rating'
                ],
            },
            list: {
                title: 'Tech List',
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
                    'name', 'slogan', 'category',
                    'startYear', 'projectCount', 'rating',
                    'createdAt', 'updatedAt'
                ]
            },
            search: {
                fields: [
                    'name', 'category', 'parentId'
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
                techId: {
                    type: 'id', ref: 'tech',
                },
                description: 'string',
                rating: 'integer',
                createdAt: 'date',
                updatedAt: 'date'
            },
            fields: {
                projectId: {
                    field: 'projectId',
                    label: 'Project',
                    type: 'reference',
                    targetEntity: 'project',
                    targetField: 'name'
                },
                techId: {
                    field: 'techId',
                    label: 'Tech',
                    type: 'reference',
                    targetEntity: 'tech',
                    targetField: 'name'
                },
                rating: {
                    format: 'rating'
                },
            },
            id: '_id',
            default: {
                fields: [
                    'projectId', 'title', 'techId', 'rating'
                ],
            },
            list: {},
            creation: {
                fields: [
                    'projectId', 'title', 'techId', 'rating',
                    'description'
                ]
            },
            edition: {},
            show: {
                fields: [
                    '_id',
                    'projectId', 'techId',
                    'title', 'description', 'rating',
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
