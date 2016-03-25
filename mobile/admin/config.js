angular
    .module('ng-admin.config', [])
    .constant('NgAdminOptions', {
        site: 'Proture Admin',
        url: '/v1/',
        entities: {
            project: {
                id: '_id',
                fields: [
                    'name', 'alias', 'active',
                ],
                list: {
                    fields: [
                        'name', 'alias', 'active',
                    ]
                },
                creation: {},
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
