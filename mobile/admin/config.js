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
                }
            },
            project: {
                id: '_id',
                fields: [
                    '_id', 'name', 'alias', 'active',
                    'createdAt', 'updatedAt'
                ],
                list: {
                    fields: [
                        'name', 'alias', 'active',
                    ]
                },
                creation: {
                    fields: [
                        'name', 'alias', 'active',
                    ]
                },
                edition: {},
                show: {},
                search: {
                    fields: [
                        'name'
                    ]
                }
            },
        },
    })
;
