/// <reference path="../../vendor/jasmine.js" />
describe("controller tests", function () {
    var scope, location, reportTestController, httpBackend, rds;

    beforeEach(module('locationApp.services'));
    beforeEach(module('locationApp.controllers'));
    beforeEach(module('locationApp'));

    beforeEach(inject(function ($rootScope, $httpBackend, $controller, $location, reportDataService) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        rds = reportDataService;
        location = $location;

        reportTestController = $controller('reportController', { $scope: scope, $http: httpBackend, $location: location, reportServiceData: rds });
    }));

    describe('given that the user is navigating to reports', function () {
        it("should return the correct relative html path", function () {
            location.path('/reports/');
            scope.$apply();

            expect(scope.reportId).toBe('');
            expect(scope.viewNameEvaluator()).toBe(urlbase + '/views/landing.html');
        });
    });

    describe('given that the user is navigating to favorites', function () {
        it("should return the correct relative html path", function () {
            location.path('/reports/favorites/');
            scope.$apply();

            expect(scope.reportId).toBe('');
            expect(scope.viewNameEvaluator()).toBe(urlbase + '/views/favorites.html');
        });
    });

    describe('given that the user is navigating to report 1', function () {
        it("should return the correct relative html path", function () {
            location.path('/reports/1');
            scope.$apply();
            expect(scope.viewNameEvaluator()).toBe(urlbase + '/views/report.html');
            expect(scope.reportId).toBe('1');
        });
    });

    describe('given that the user is navigating to a url that goes beyong 2 levels', function () {
        it("should return to the landing page", function () {
            location.path('/reports/1/1');
            scope.$apply();
            expect(scope.viewNameEvaluator()).toBe(urlbase + '/views/landing.html');
        });
    });

    describe('given that the user is navigating to report with ID 1', function () {
        it("should return the correct report content", function () {
            scope.reportId = '1';
            scope.$apply();
            httpBackend.when('GET', '/api/reportsdata/1').respond({ "Id": "1", "Title": "Report 1", "Xhtml": "This is a very <b>simple report</b>. The ID of this report is 1" });

            scope.getReportData();
            httpBackend.flush();
            scope.$apply();

            expect(scope.reportId).toBe('1');
            httpBackend.expectGET('/api/reportsdata/1');
            expect(scope.reportContent.Id).toBe('1');
            expect(scope.reportContent.Title).toBe('Report 1');
            expect(scope.reportContent.Xhtml).toBe('This is a very <b>simple report</b>. The ID of this report is 1');
        });
    });
});