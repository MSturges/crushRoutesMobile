angular.module('app')


.controller('signupCtrl', ['$scope', '$stateParams', '$state', 'SignupService',

function ($scope, $stateParams, $state, SignupService) {

  $scope.user = {
    user_name: null,
    password: null,
  };

  $scope.createUser = function () {
    console.log('user', $scope.user);
    SignupService.createUser($scope.user)
    .then(function(){
      console.log('jisfdsf');
      $state.go('tab.routeList');
    })
    .catch(function(err){
      console.log('hi');
      $scope.signupError = err;
    })
  }


}])
