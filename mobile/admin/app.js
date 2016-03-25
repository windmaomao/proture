/**
 * NG Admin module
 *
 * Use ng-admin to drive the admin website
 *
 * @date 03/25/16
 * @author Fang Jin <windmaomao@gmail.com>
*/
*
angular
    .module('myApp', ['ng-admin', 'ng-admin.config'])
    .config(function(NgAdminConfigurationProvider, NgAdminOptions) {
        var nga = NgAdminConfigurationProvider;
        var opt = NgAdminOptions;

        // assemble nga fields based on field array
        var assembleFields = function(p, fields) {
            var f = [];
            _.each(fields, function(field) {
                f.push(p.field(field));
            });
            return f;
        };

        // assemble nga search fields
        var assembleSearchFields = function(p, fields) {
            return [p.field(fields[0]).label(fields[0]).pinned(true)];
        };

        // create an admin application
        var admin = nga.application(opt.site).baseApiUrl(opt.url);

        _.each(opt.entities, function(op, key) {
            var id = op.id || 'id';
            var fields = op.fields;
            var listFields = op.list.fields || fields;
            var searchFields = op.search.fields || id;

            var entity = nga.entity(key).identifier(nga.field(id));

            entity.listView()
                .fields(assembleFields(nga, listFields))
                .listActions(['show'])
                .filters(assembleSearchFields(nga, searchFields))
            ;
            entity.creationView()
                .fields(assembleFields(nga, fields))
            ;
            entity.showView()
                .fields(assembleFields(nga, fields))
                .title('Detail')
            ;

            admin.addEntity(entity);
        });

        // attach the admin application to the DOM and run it
        nga.configure(admin);
    })
    .config(function(RestangularProvider, NgAdminOptions) {
        RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {
            // console.log(params);
            var entity = NgAdminOptions.entities[what];
            // List view
            if (operation == 'getList') {
                // search field
                var searchField = '_id';
                if (entity.search.fields.length) {
                    searchField = entity.search.fields[0];
                }
                if (("_filters" in params) && (searchField in params._filters)) {
                    params.q = {};
                    params.q[searchField] = { $regex: params._filters[searchField] }
                }
                // params.q = { NAME: { $regex: params._filters.NAME } };
                delete params._filters;

                // pagination
                params.pageSize = params._perPage;
                delete params._perPage;
                params.p = params._page - 1;
                delete params._page;
            }
            return { params: params };
        });
    });
;
