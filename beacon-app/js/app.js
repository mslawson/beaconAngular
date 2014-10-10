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
      when('/jobs/:jobId', {
        templateUrl: 'partials/job-detail.html',
        controller: 'JobDetailCtrl'
      }).
      otherwise({
        redirectTo: '/jobs'
      });
  }]);

jobcostApp.controller("PanelController", function(){
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };


});

