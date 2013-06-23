var locationApp = angular.module('locationApp', ['locationApp.services', 'locationApp.controllers']);
angular.module('locationApp.controllers', ['locationApp.services']);
angular.module('locationApp.services', []);
var urlbase = '/areas/reports/Scripts/app';

// define routes
locationApp.config(function ($routeProvider, $locationProvider) {

    // if html5Mode were set to false, all of the when conditions (whose actions are the same) could be clubbed to just have one condition '/'
    $routeProvider
    .when('/reports/',
   {
       controller: 'reportController',
       templateUrl: urlbase + '/views/containerView.html'
   })
    .when('/reports/favorites/',
   {
       controller: 'reportController',
       templateUrl: urlbase + '/views/containerView.html'
   })

   .when('/reports/:reportId',
   {
       controller: 'reportController',
       templateUrl: urlbase + '/views/containerView.html'
   })
    .otherwise({ redirectTo: '/' });

     $locationProvider.html5Mode(true);
});