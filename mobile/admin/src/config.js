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
    },
    routes: false
};
