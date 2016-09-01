(function() {
  'use strict';

  angular.module('app')
  .service('TakeLocationService', TakeLocationService)

  TakeLocationService.$inject = [
    '$log',
    '$q',
    '$http',
    '$window',
    '$cordovaCamera',
    '$cordovaGeolocation'
  ];

  function TakeLocationService ($log, $q, $http, $window, $cordovaCamera, $cordovaGeolocation) {

    this.takeLocation = function () {

      var deferred = $q.defer();
      var watchOptions = {
        timeout: 1000,
        enableHighAccuracy: true
      };

      $cordovaGeolocation.getCurrentPosition(watchOptions)
      .then(function(data){
        deferred.resolve(data);
      })
      .catch(function(err){
        deferred.reject(err)
      })
      return deferred.promise
    }




  }
}())
