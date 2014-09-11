'use strict';

/* Controllers */
var jobcostApp = angular.module('jobcostApp', []);

jobcostApp.controller('JobListCtrl', function ($scope) {
	$scope.jobs = [
	{'jobName': 'Village at Lionsgate',
	'fileNumber': '414-10-1600',
	'billingDate': '08/10/2010',
	'totalPrice': '$4,071'},
	{'jobName': 'Creekwood Commons',
	'fileNumber': '441-10-1633',
	'billingDate': '08/10/2010',
	'totalPrice': 1},
	{'jobName': 'BOA Raytown',
	'fileNumber': '472-11-1816',
	'billingDate': '08/10/2010',
	'totalPrice':300},
	{'jobName': 'Village at Lionsgate',
	'fileNumber': '414-10-1600',
	'billingDate': '08/10/2010',
	'totalPrice': '$4,071'},
	{'jobName': 'Creekwood Commons',
	'fileNumber': '441-10-1633',
	'billingDate': '08/10/2010',
	'totalPrice': 5},
	{'jobName': 'BOA Raytown',
	'fileNumber': '472-11-1816',
	'billingDate': '08/10/2010',
	'totalPrice':100},
	{'jobName': 'Village at Lionsgate',
	'fileNumber': '414-10-1600',
	'billingDate': '08/10/2010',
	'totalPrice': '$4,071'},
	{'jobName': 'Creekwood Commons',
	'fileNumber': '441-10-1633',
	'billingDate': '08/10/2010',
	'totalPrice': 8},
	{'jobName': 'BOA Raytown',
	'fileNumber': '472-11-1816',
	'billingDate': '08/10/2010',
	'totalPrice':200},
	{'jobName': 'Village at Lionsgate',
	'fileNumber': '414-10-1600',
	'billingDate': '08/10/2010',
	'totalPrice': '$4,071'},
	{'jobName': 'Creekwood Commons',
	'fileNumber': '441-10-1633',
	'billingDate': '08/10/2010',
	'totalPrice': 8},
	{'jobName': 'BOA Raytown',
	'fileNumber': '472-11-1816',
	'billingDate': '08/10/2010',
	'totalPrice':200},
	{'jobName': 'Parkhill Offices',
	'fileNumber': '520-11-2109',
	'billingDate': '08/10/2010',
	'totalPrice':10}
	];
	$scope.orderProp = 'jobName';

	$scope.$on(function getAvgTotalPrice(jobs) {
  // do something
  	var summedTotalPrices = 0;
		jobs.forEach(function (job){
			summedTotalPrices = summedTotalPrices + job.totalPrice;
		});
		return jobs.summedTotalPrices = summedTotalPrices;
	});

	
});
