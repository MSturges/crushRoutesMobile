(function() {
  'use strict';

  angular.module('app')
  .service('ValidityService', ValidityService)

  ValidityService.$inject = [
    '$log',
    '$q',
    '$http',
    '$window'

  ];

  function ValidityService ($log, $q, $http, $window) {

    this.validateUser = function () {


    }




  }
}())
