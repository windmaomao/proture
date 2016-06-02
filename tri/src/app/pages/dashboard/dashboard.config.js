(function() {
    'use strict';

    angular
        .module('app.pages.dashboard')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.dashboard-general', {
            url: '/dashboards/general',
            templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html'
        })
        .state('triangular.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/pages/dashboard/dashboard.tmpl.html',
            // controller: 'DashboardSocialController',
            // controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'Dashboard',
            icon: 'zmdi zmdi-home',
            type: 'link',
            priority: 1.1,
            state: 'triangular.dashboard'
        });

    }
})();
