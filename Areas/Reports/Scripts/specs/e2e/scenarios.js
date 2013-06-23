'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('reports - e2e tests', function () {
    describe('when a user navigates to the reports page', function () {
        beforeEach(function () {
            browser().navigateTo('/reports/');
        });

        it('the url should be reports', function () {
            expect(browser().location().url()).toBe("/reports/");
        });

        it('should have a title', function () {
            expect(element('h3').text()).toBe('This is the reports landing page');
        });
    });

    describe('when a user navigates to the favorites page', function () {
        beforeEach(function () {
            browser().navigateTo('/reports/favorites/');
        });

        it('the url should be favorites', function () {
            expect(browser().location().url()).toBe("/reports/favorites/");
        });

        it('should have a title', function () {
            expect(element('h3').text()).toContain('This is the favorites page');
        });
    });

    describe('when a user navigates to report 1', function () {
        beforeEach(function () {
            browser().navigateTo('/reports/1/');
        });

        it('should show report with title Report 1', function () {
            expect(element('h3').text()).toBe("Report 1");
        });

        it('should have report content', function () {
            expect(element('div#displayReport').text()).toContain("This is a very simple report. The ID of this report is 1");
        });
    });

  });
