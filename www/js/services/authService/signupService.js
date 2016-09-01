(function() {
  'use strict';

  angular.module('app')
  .service('SignupService', SignupService)

  SignupService.$inject = [
    '$log',
    '$q',
    '$http',
    '$window'

  ];

  function SignupService ($log, $q, $http, $window) {

    this.signup = function () {


    }




  }
}())
