'use strict';

/* Controllers */
var jobcostControllers = angular.module('jobcostControllers', []);

jobcostControllers.controller('JobListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('jobs/jobs.json').success(function(data) {
      $scope.jobs = data;
    });

    $scope.orderProp = 'jobName';

    $scope.getSumTotalPrice = function(jobs){
			var summedTotalPrices = 0;
			jobs.forEach(function (job){
				summedTotalPrices = summedTotalPrices + job.totalPrice;
			});
			return jobs.summedTotalPrices = summedTotalPrices;
		}

		$scope.getSumBudgetHrs = function(jobs){
			var summedBudgetHrs = 0;
			jobs.forEach(function (job){
				summedBudgetHrs = summedBudgetHrs + job.budgetHrs;
			});
			return jobs.summedBudgetHrs = summedBudgetHrs;
		}
}]);


