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
                slogan: '',
                active: false,
                projects: [],
            },
            {
                title: 'PeopleDesigns',
                alias: 'pd',
                slogan: 'Health communications consulting firm.',
                active: true,
                projects: ['Prepare 2', 'SRCE', 'OBChat'],
            },
            {
                title: 'AlphaMedPress',
                alias: 'amp',
                slogan: '',
                active: false,
                projects: [],
            },
            {
                title: 'Duke',
                alias: 'duke',
                active: false,
                projects: [],
            },
            {
                title: 'Deutsche Bank',
                alias: 'db',
                slogan: 'German global banking and financial services company.',
                active: true,
                projects: [],
            },
            {
                title: 'RxAnte',
                alias: 'amp',
                active: false,
                projects: [],
            },
            {
                title: 'Metrostar',
                alias: 'amp',
                active: false,
                projects: [],
            },
            {
                title: 'TopFitPros',
                alias: 'tfp',
                slogan: 'Online Automated Personal Fitness Training.',
                active: true,
                projects: [],
            },
        ]
    })
;
