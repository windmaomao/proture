angular
    .module('app.page', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/start');
        $stateProvider.state('start', {
            url: '/start',
            templateUrl: 'templates/start.html'
        });
    })
;
