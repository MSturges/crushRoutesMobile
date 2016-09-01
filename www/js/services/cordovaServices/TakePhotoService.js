(function() {
  'use strict';

  angular.module('app')
  .service('TakePhotoService', TakePhotoService)

  TakePhotoService.$inject = [
    '$log',
    '$q',
    '$http',
    '$window',
    '$cordovaCamera',
    'HostService'
  ];

  function TakePhotoService ($log, $q, $http, $window, $cordovaCamera, HostService) {



    this.takePhoto = function() {

      var deferred = $q.defer();
      var options = {
        allowEdit : true,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        quality: 100
      };

      $cordovaCamera.getPicture(options)
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
