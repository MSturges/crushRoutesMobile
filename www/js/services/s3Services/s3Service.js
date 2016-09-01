(function() {
  'use strict';

  angular.module('app')
  .service('s3Service', s3Service)

  s3Service.$inject = [
    'HostService',
    '$q',
    '$http'
  ];

  function s3Service (HostService,$q,$http) {
    this.uploads3Image = function(base64) {
      console.log('hi!!!!!!!!!');
      return $http.post('http://Max-Sturges.local:3000' + '/s3/uploads3Image', {image: base64})
    }
  }

}())
