/**
 * Provider module
 *
 * @date 04/01/16
 * @author Fang Jin <fang-a.jin@db.com>
*/

var ngAdmin = require('../component/ng-admin');

var provider = {};

provider.ngAdminConfigurationProvider = function(NgAdminConfigurationProvider) {
    var nga = NgAdminConfigurationProvider;

    // create an admin application
    var admin = ngAdmin.create(nga);

    // create custom dashboard
    admin.dashboard().template('<dashboard-page></dashboard-page>');

    // attach the admin application to the DOM and run it
    ngAdmin.attach();
};

provider.restangularProvider = function(RestangularProvider) {
    RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {
        // console.log(params);
        var entity = ngAdmin.options.entities[what];
        // List view
        if (operation == 'getList') {
            // search field
            var searchField = '_id';
            if (entity.search.fields.length) {
                searchField = entity.search.fields[0];
            }
            if (("_filters" in params) && (searchField in params._filters)) {
                params.q = {};
                // params.q[searchField] = { $regex: params._filters[searchField] }
                params.q[searchField] = params._filters[searchField];
            }
            delete params._filters;

            // pagination
            params.pageSize = params._perPage;
            delete params._perPage;
            params.p = params._page - 1;
            delete params._page;

            // sort
            params.sort = params._sortField;
            if (params._sortDir !== 'ASC') {
                params.sort = '-' + params.sort;
            }
            delete params._sortField;
            delete params._sortDir;
        }
        return { params: params };
    });
};

module.exports = provider;
