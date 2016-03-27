/**
 * NG Admin config module
 *
 * Use a script to define the setting for ng-admin
 *
 * @date 03/25/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

angular
    .module('ng-admin.config', [])
    .constant('NgAdminOptions', {
        site: 'Proture Admin',
        url: '/v1/',
        entities: {
            company: {
                entity: 'company',
                model: {
                    _id: { type: 'id' },
                    name: { type: 'string', required: true },
                    alias: { type: 'string', required: true },
                    slogan: 'string',
                    active: 'boolean',
                    createdAt: 'date',
                    updatedAt: 'date'
                },
                id: '_id',
                fields: {},
                default: {
                    fields: [
                        'name', 'alias', 'slogan', 'active',
                    ],
                },
                list: {},
                creation: {},
                edition: {},
                show: {
                    fields: [
                        '_id',
                        'name', 'alias', 'slogan', 'active',
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
                    description: 'string',
                    active: 'boolean',
                    createdAt: 'date',
                    updatedAt: 'date'
                },
                fields: {
                    companyId: {
                        field: 'companyId',
                        type: 'reference',
                        targetEntity: 'company',
                        targetField: 'name'
                    }
                },
                id: '_id',
                default: {
                    fields: [
                        'companyId', 'name', 'alias', 'active',
                    ],
                },
                list: {},
                creation: {
                    fields: [
                        'companyId', 'name', 'alias', 'active',
                        'description',
                    ]
                },
                edition: {},
                show: {
                    fields: [
                        '_id',
                        'companyId', 'name', 'alias', 'active',
                        'description',
                        'createdAt', 'updatedAt'
                    ]
                },
                search: {
                    fields: [
                        'name'
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
    })
;
