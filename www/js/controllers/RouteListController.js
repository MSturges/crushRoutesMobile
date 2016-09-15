angular.module('app')

.controller('routeListCtrl', ['$scope', '$stateParams', 'GrabClimbingArea', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function($scope, $stateParams, GrabClimbingArea, $window) {

  GrabClimbingArea.grabAreas()
  .then(function(res) {
    $scope.climbingAreas = res.data;
  })
  .catch(function(err) {
    console.log(err);
  })

  $scope.test = $window.localStorage.getItem('token');
  $scope.test2 = $window.localStorage.getItem('user');


}
])
