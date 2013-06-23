/// <reference path="../../vendor/jasmine.js" />
describe("service tests", function () {
    var scope, httpBackend, rds;

    beforeEach(module('locationApp.services'));
    beforeEach(module('locationApp'));

    beforeEach(inject(function ($rootScope, $httpBackend, reportDataService) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        rds = reportDataService;
    }));

    describe('given that the user is navigating to report with ID 1', function () {
        it("should return the correct report content", function () {
            httpBackend.when('GET', '/api/reportsdata/1').respond({ "Id": "1", "Title": "Report 1", "Xhtml": "This is a very <b>simple report</b>. The ID of this report is 1" });

            var promiseResult;
            rds.getReport(1).then(function (result) {
                promiseResult = result;
            });
            httpBackend.flush();
            scope.$apply();

            httpBackend.expectGET('/api/reportsdata/1');
            expect(promiseResult.data.Id).toBe('1');
            expect(promiseResult.data.Title).toBe('Report 1');
            expect(promiseResult.data.Xhtml).toBe('This is a very <b>simple report</b>. The ID of this report is 1');
        });
    });
});