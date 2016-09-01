(function() {
  'use strict';

  angular.module('app')
  .service('HostService', HostService)

  HostService.$inject = [

  ];

  function HostService () {
    this.api = 'https://crushroutesapi.herokuapp.com';
  }
}())
