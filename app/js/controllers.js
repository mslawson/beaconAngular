'use strict';

/* Controllers */
var jobcostApp = angular.module('jobcostApp', []);

jobcostApp.controller('JobListCtrl', function ($scope) {
	$scope.jobs = [
	{'jobName': 'Village at Lionsgate',
	'fileNumber': '414-10-1600',
	'billingDate': '08/10/2010',
	'age': 1},
	{'jobName': 'Creekwood Commons',
	'fileNumber': '441-10-1633',
	'age': 2},
	{'jobName': 'BOA Raytown',
	'fileNumber': '472-11-1816',
	'age':3},
	{'jobName': 'Village at Lionsgate',
	'fileNumber': '414-10-1600',
	'billingDate': '08/10/2010',
	'age': 4},
	{'jobName': 'Creekwood Commons',
	'fileNumber': '441-10-1633',
	'age': 5},
	{'jobName': 'BOA Raytown',
	'fileNumber': '472-11-1816',
	'age':6},
	{'jobName': 'Village at Lionsgate',
	'fileNumber': '414-10-1600',
	'billingDate': '08/10/2010',
	'age': 7},
	{'jobName': 'Creekwood Commons',
	'fileNumber': '441-10-1633',
	'age': 8},
	{'jobName': 'BOA Raytown',
	'fileNumber': '472-11-1816',
	'age':9},
	{'jobName': 'Village at Lionsgate',
	'fileNumber': '414-10-1600',
	'billingDate': '08/10/2010',
	'age': 7},
	{'jobName': 'Creekwood Commons',
	'fileNumber': '441-10-1633',
	'age': 8},
	{'jobName': 'BOA Raytown',
	'fileNumber': '472-11-1816',
	'age':9},
	{'jobName': 'Parkhill Offices',
	'fileNumber': '520-11-2109',
	'age':10}
	];
	$scope.orderProp = 'jobName';
});
