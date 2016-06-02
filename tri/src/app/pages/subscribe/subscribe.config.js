(function() {
    'use strict';

    angular
        .module('app.pages.subscribe')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.subscribe', {
            url: '/subscribe',
            templateUrl: 'app/pages/subscribe/subscribe.tmpl.html',
            controller: 'SubscribeController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column full-image-background mb-bg-fb-01 background-overlay-static',
                    innerContentClass: 'overlay-gradient-20'
                }
            }
        });

        triMenuProvider.addMenu({
            name: 'Subscription',
            state: 'triangular.subscribe',
            type: 'link',
            icon: 'zmdi zmdi-view-list-alt',
            priority: 2.2
            // permission: 'viewGitHub'
        });
    }
})();
