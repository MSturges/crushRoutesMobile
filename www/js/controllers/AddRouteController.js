angular.module('app')

.controller('addRouteCtrl', ['$scope', '$stateParams', 'TakePhotoService', 'TakeLocationService','s3Service',
function ($scope, $stateParams, TakePhotoService, TakeLocationService, s3Service) {

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




      // beginning
      s3Service.uploads3Image(data)
      .then(function(response) {
        console.log('RESPONSE S3', response);
      })
      .catch(function(err) {
        console.log('ERROR!!!!');
      })
      // end



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
