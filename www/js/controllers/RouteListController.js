angular.module('app')

.controller('routeListCtrl', ['$scope', '$stateParams', 'GrabClimbingArea', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, GrabClimbingArea) {
    GrabClimbingArea.grabAreas()
      .then(function(res) {
        $scope.climbingAreas = res.data;
      })
      .catch(function(err) {
        console.log(err);
      })
  }
])