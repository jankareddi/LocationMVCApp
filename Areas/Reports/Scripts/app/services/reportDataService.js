angular.module('locationApp.services').factory('reportDataService', function ($http) {
    return {
        getReport: function (reportId) {
            var url = '/api/reportsdata/' + reportId;
            var promise = $http.get(url).
                  success(function (data, status) {
                      console.log(data);
                  }).
                  error(function (data, status) {
                      console.log("getReport api failed");
                  });
            return promise;
        }
    };
});