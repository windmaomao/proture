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
                fields: [
                    'name', 'alias', 'slogan', 'active',
                ],
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
                id: '_id',
                fields: [
                    {
                        field: 'companyId',
                        type: 'reference',
                        targetEntity: 'company',
                        targetField: 'name'
                    },
                    'name', 'alias', 'active',
                ],
                list: {},
                creation: {},
                edition: {},
                show: {},
                search: {
                    fields: [
                        'name'
                    ]
                },
            },
        },
    })
;
