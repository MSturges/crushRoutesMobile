angular.module('app')


.controller('loginCtrl', ['$scope', '$stateParams', 'LoginService',

function ($scope, $stateParams, LoginService) {

  $scope.login = function () {
    LoginService.userLogin($scope.login)
    .then(function(res){
      $scope.login = {};
      $state.go('home');
    })
    .catch(function(err){
      $scope.loginError = err;
    })
  }


}])
