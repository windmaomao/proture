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
                disable: true,
                id: '_id',
                fields: [
                    '_id', 'name', 'alias', 'slogan', 'active',
                    'createdAt', 'updatedAt'
                ],
                list: {
                    fields: [
                        'name', 'slogan', 'alias', 'active',
                    ]
                },
                creation: {
                    fields: [
                        'name', 'alias', 'slogan', 'active',
                    ]
                },
                edition: {},
                show: {},
                search: {
                    fields: [
                        'name'
                    ]
                },
                model: {
                    _id: { type: 'id' },
                    name: { type: 'string', required: true },
                    alias: { type: 'string', required: true },
                    slogan: 'string',
                    active: 'boolean',
                    createdAt: 'date',
                    updatedAt: 'date'
                },
            },
            project: {
                disable: true,
                id: '_id',
                fields: [
                    '_id', 'companyId', 'name', 'alias', 'active',
                    'createdAt', 'updatedAt'
                ],
                list: {
                    fields: [
                        // 'companyId',
                        {
                            field: 'companyId',
                            type: 'reference',
                            targetEntity: 'company',
                            targetField: 'name'
                        },
                        'name', 'alias',
                        // 'active',
                        {
                            field: 'active',
                            type: 'boolean'
                        }
                    ]
                },
                creation: {
                    fields: [
                        'companyId', 'name', 'alias', 'active',
                    ]
                },
                edition: {},
                show: {},
                search: {
                    fields: [
                        'name'
                    ]
                },
                model: {
                    _id: { type: 'id' },
                    companyId: { type: 'id', ref: 'company'},
                    name: { type: 'string', required: true },
                    alias: { type: 'string', required: true },
                    description: 'string',
                    active: 'boolean',
                    createdAt: 'date',
                    updatedAt: 'date'
                }
            },
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
                    '_id', 'name', 'alias', 'slogan', 'active',
                    'createdAt', 'updatedAt'
                ],
                list: {
                    fields: [
                        'name', 'slogan', 'alias', 'active',
                    ]
                },
                creation: {
                    fields: [
                        'name', 'alias', 'slogan', 'active',
                    ]
                },
                edition: {},
                show: {},
                search: {
                    fields: [
                        'name'
                    ]
                },
            },
            // project: {
            //     entity: 'project',
            //     model: {
            //         _id: { type: 'id' },
            //         companyId: { type: 'id', ref: 'company'},
            //         name: { type: 'string', required: true },
            //         alias: { type: 'string', required: true },
            //         description: 'string',
            //         active: 'boolean',
            //         createdAt: 'date',
            //         updatedAt: 'date'
            //     },
            //     id: '_id',
            //     fields: [
            //         '_id',
            //         {
            //             field: 'companyId',
            //             type: 'reference',
            //             targetEntity: 'company',
            //             targetField: 'name'
            //         },
            //         'name', 'alias', 'active',
            //         'createdAt', 'updatedAt'
            //     ],
            //     list: {
            //         fields: [
            //             'companyId', 'name', 'alias', 'active'
            //         ]
            //     },
            //     creation: {
            //         fields: [
            //             'companyId', 'name', 'alias', 'active',
            //         ]
            //     },
            //     edition: {},
            //     show: {},
            //     search: {
            //         fields: [
            //             'name'
            //         ]
            //     },
            // },
        },
    })
;
