angular.module('app')

.controller('loginCtrl', ['$scope', '$stateParams', 'LoginService', '$state',

function ($scope, $stateParams, LoginService, $state) {

$scope.login = {
  name: null,
  password: null,
};

  $scope.userLogin = function () {
    LoginService.userLogin($scope.login)
    .then(function(res){
      $scope.login = {};
      $state.go('tab.addRoute');
    })
    .catch(function(err){
      $scope.loginError = err;
    })
  }


}])
