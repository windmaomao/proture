angular
    .module('app.page', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/start');

        $stateProvider.state('start', {
            url: '/start',
            templateUrl: 'templates/start.html'
        });

        // $stateProvider.state('company', {
        //     url: '/company',
        //     abstract: true,
        //     templateUrl: 'templates/company.list.html'
        // });

        $stateProvider.state('companies', {
            url: '/companies',
            templateUrl: 'templates/company.list.html'
        });

    })
    .controller('CompanyListCtrl', function($scope) {
        $scope.companies = [
            {
                title: 'Plusdelta Technology',
                alias: 'plusdealt',
                active: false,
                projects: 2,
            },
            {
                title: 'PeopleDesigns',
                alias: 'pd',
                active: true,
                projects: 4,
            },
            {
                title: 'AlphaMedPress',
                alias: 'amp',
                active: false,
                projects: 2,
            },
            {
                title: 'Duke',
                alias: 'amp',
                active: false,
                projects: 2,
            },
            {
                title: 'RxAnte',
                alias: 'amp',
                active: false,
                projects: 2,
            },
            {
                title: 'Deutsche Bank',
                alias: 'amp',
                active: true,
                projects: 2,
            },
            {
                title: 'Metrostar',
                alias: 'amp',
                active: false,
                projects: 2,
            },
            {
                title: 'TopFitPros',
                alias: 'tfp',
                active: true,
                projects: 2,
            },
        ]
    })
;
