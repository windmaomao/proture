/**
 * NG Admin config module
 *
 * Use a script to define the setting for ng-admin
 *
 * @date 03/25/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

var requireEntity = function(name) {
    return require('./entity/' + name);
}

module.exports = {
    site: 'Proture',
    url: '/v1/',
    auth: true,
    rest: {
        url: '/v1/',
        filter: 'q',
        page: {
            limit: 'pageSize',
            page: 'p',
        },
        sort: {
            field: 'sort',
            plus: true
        }
    },
    entities: {
        company: requireEntity('company'),
        project: requireEntity('project'),
        tech: requireEntity('tech'),
        update: requireEntity('update'),
        showcase: requireEntity('showcase'),
        entity: requireEntity('entity'),
        contact: requireEntity('contact'),
        member: requireEntity('member'),
        task: requireEntity('task'),
        route: requireEntity('route'),
        account: requireEntity('account'),
        transaction: requireEntity('transaction'),
        statement: requireEntity('statement'),
        user: requireEntity('user'),
    },
    routes: [
        {
            title: 'Entity',
            icon: 'tower',
            items: [
                'company',
                'contact',
                // 'stock',
                'tech',
                'user'
            ]
        },
        {
            title: 'Project',
            icon: 'briefcase',
            items: [
                'entity',
                'member',
                'project',
                'route',
                'showcase',
                'task',
                'update',
            ]
        },
        {
            title: 'Account',
            icon: 'piggy-bank',
            items: [
                'account',
                // 'price',
                'statement',
                'transaction'
            ]
        },
    ]
};
