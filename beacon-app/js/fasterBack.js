var faster = angular.module('fasterApp', []);

faster.service('fasterService', function() {


  var formElements = [];
  var i;

  this.setBox = function(formElement) {
    formElements.push(formElement);
  };

  this.getBox = function() {
    return formElements;
  };

})

.directive('fasterForm', function() {
  return {
    restrict: 'E',
    controller: function($scope, fasterService) {

      $scope.onClick = function() {
        fasterService.setBox($scope.formModel);
        $scope.formModel = {};
      };
    },
    //link:function(scope,element,ctrl){
    //},
    templateUrl: 'fasterForm.html'
  };
})


.directive('fasterDisplay', function() {
  return {
    restrict: 'E',
    controller: function($scope, fasterService) {

      $scope.formElements = fasterService.getBox($scope.formModel);
      
      $scope.byRange = function (fieldName, minValue, maxValue) {
        if (minValue === undefined) minValue = Number.MIN_VALUE;
        if (maxValue === undefined) maxValue = Number.MAX_VALUE;
        
        return function predicateFunc(item) {
          return minValue <= item[fieldName] && item[fieldName] <= maxValue;
        };
      };

      //this.deleteBox = function(id)
      //{
      //     for (i in formElements) {
      // if (formElements[i].id === id) {
      //   formElements.splice(i, 1);
      ///   }
      //  }
      // }

      //       $scope.remove = function(index){
      //alert($scope.checked);
      //  $scope.students.splice(index, 1);
      // };
    },


    //      $scope.onDelete = function (i) 
    //     {
    //if ($scope.newFormElement.id === id) $scope.newFormElement = {};
    //          $scope.formElements = fasterService.deleteBox();
    //        $scope.formModel = {};
    //     };
    //     },





    // link:function(scope,element,ctrl1){
    //},
    templateUrl: 'fasterDisplay.html'
  };
});