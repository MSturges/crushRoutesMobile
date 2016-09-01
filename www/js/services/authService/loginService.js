(function() {
  'use strict';

  angular.module('app')
  .service('LoginService', LoginService)

  LoginService.$inject = [
    '$log',
    '$q',
    '$http',
    '$window'

  ];

  function LoginService ($log, $q, $http, $window) {

    this.login = function () {


    }




  }
}())
