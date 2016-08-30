angular.module('app')

.controller('addRouteCtrl', ['$scope', '$stateParams', 'TakePhotoService', 'TakeLocationService',
function ($scope, $stateParams, TakePhotoService, TakeLocationService) {

  $scope.picTaken = false;
  $scope.locationTaken = false;
  $scope.pictureData = true;
  $scope.lng = 'hello';
  $scope.lat = 'hi';



  $scope.takePhoto = function () {
    TakePhotoService.takePhoto()
    .then(function(data){
      $scope.pictureData = "data:image/jpeg;base64," + data;
      $scope.picTaken = true;
    })
    .catch(function(err){
    })
  }



  $scope.takeLocation = function () {
    TakeLocationService.takeLocation()
    .then(function(data){
      $scope.lng = data.coords.longitude;
      $scope.lat = data.coords.latitude;

    })
    .catch(function(err){
    })
  }





}])
