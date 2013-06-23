angular.module('locationApp.controllers').controller('reportController', ['$scope', '$http', '$location', 'reportDataService', function ($scope, $http, $location, reportDataService) {
    $scope.reportId = "";
    $scope.viewNameEvaluator = function () {
        switch($location.path())
        {
            case '/reports/':
                return urlbase + '/views/landing.html';
            case '/reports/favorites/':
                return urlbase + '/views/favorites.html';
            default: {
                // handle if this is a request for a specific report
                var pathnames = $location.path().split('/');
                if (pathnames.length == 3) {
                    $scope.reportId = pathnames[2];
                    return urlbase + '/views/report.html';
                }
                else
                    // for everything else, return to the landing page
                    return urlbase + '/views/landing.html';
            }
        }
    }

    $scope.getReportData = function () {
        reportDataService.getReport($scope.reportId).then(function (promise) {
            $scope.reportContent = promise.data;
        });
    }
}]);