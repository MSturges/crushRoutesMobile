(function() {
  'use strict';

  angular.module('app')
  .service('GrabClimbingArea', GrabClimbingArea)

  GrabClimbingArea.$inject = [
    '$log',
    '$q',
    '$http',
    '$window'

  ];

  function GrabClimbingArea ($log, $q, $http, $window) {

    this.grabClimbngArea = function () {


    }




  }
}())
