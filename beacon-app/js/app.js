'use strict';

/* App Module */
var jobcostApp = angular.module('jobcostApp', [
'ngRoute',
'jobcostControllers'
]);

jobcostApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/jobs', {
        templateUrl: 'partials/job-list.html',
        controller: 'JobListCtrl'
      }).
      when('/jobs/:jobName', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/jobs'
      });
  }]);