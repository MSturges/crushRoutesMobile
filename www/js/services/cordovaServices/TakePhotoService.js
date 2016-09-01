(function() {
  'use strict';

  angular.module('app')
  .service('TakePhotoService', TakePhotoService)

  TakePhotoService.$inject = [
    '$log',
    '$q',
    '$http',
    '$window',
    '$cordovaCamera'
  ];

  function TakePhotoService ($log, $q, $http, $window, $cordovaCamera) {

    this.takePhoto = function() {

      var deferred = $q.defer();
      var options = {
        allowEdit : true,
        targetWidth: 500,
        targetHeight: 500,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        quality: 60
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
