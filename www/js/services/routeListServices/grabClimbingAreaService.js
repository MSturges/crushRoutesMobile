(function() {
  'use strict';

  angular.module('app')
  .service('GrabClimbingArea', GrabClimbingArea)

  GrabClimbingArea.$inject = [
    '$log',
    '$q',
    '$http',
    '$window',
    'HostService'

  ];

  function GrabClimbingArea ($log, $q, $http, $window, HostService) {

    this.grabAreas = function() {
    var deferred = $q.defer();
    $http.get('http://Max-Sturges.local:3000' + '/listClimbing')
    .then(function(success){
      deferred.resolve(success)
    })
    .catch(function(err) {
      deferred.reject(err);
    })
    return deferred.promise;
  }




  }
}())
