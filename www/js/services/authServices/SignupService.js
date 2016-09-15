(function() {
  'use strict';

  angular.module('app')
  .service('SignupService', SignupService)

  SignupService.$inject = [
    '$log',
    '$q',
    '$http',
    '$window',
    '$state'
  ];

  function SignupService ($log, $q, $http, $window, $state) {

    this.createUser = function(userObject) {
      console.log('create USER!!!!!');
      var deferred = $q.defer();
      $http.post('http://Max-Sturges.local:3000' + '/auth/signup', userObject)
      .then(function (response) {
        if (response.data.constraint) {
          deferred.reject('User of that name already exists');
        } else if(response.data.token && response.data.user){
          $window.localStorage.setItem('token', response.data.token);
          $window.localStorage.setItem('user', JSON.stringify(response.data.user));
          $state.go('tab.routeList');
        }
      })
      .catch(function(err){
        deferred.reject(err)
      })
      return deferred.promise
    }




  }
}())
