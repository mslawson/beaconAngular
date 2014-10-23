'use strict';

/* Controllers */
var jobcostApp = angular.module('jobcostControllers', []);

jobcostApp.controller("PanelController", function(){
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };

});

jobcostApp.controller("JobFormController", function(){
  this.job = {};

  this.addJob = function(jobs){
    jobs.push(this.job);
    this.job = {};  
  };

});

jobcostApp.controller('JobListCtrl', ['$scope', '$http',
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
		};

		$scope.getSumBudgetHrs = function(jobs){
			var summedBudgetHrs = 0;
			jobs.forEach(function (job){
				summedBudgetHrs = summedBudgetHrs + job.budgetHrs;
			});
			return jobs.summedBudgetHrs = summedBudgetHrs;
		};

    $scope.getBudYardsPerHr = function(jobs){
      var budYardsHr = 0;
      var jobCount = 0;
      jobs.forEach(function (job){
        budYardsHr = budYardsHr + (job.budYds/job.budgetHrs);
        jobCount = jobCount + 1;
      });
      return budYardsHr/jobCount;
    };
}]);

jobcostApp.controller('JobDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('jobs/' + $routeParams.jobId + '.json').success(function(data) {
      $scope.job = data;
    });

    $scope.getPricePerUnit = function(job){
    	var pricePer = 0;
    	pricePer = job.totalPrice / job.budUnits;
    	return job.pricePer = pricePer;
    }

    $scope.getBudYardsPerHr = function(job){
      var budYardsHr = job.budYds / job.budgetHrs;
      return budYardsHr;
    };
}]);




