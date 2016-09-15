angular.module('app')

.controller('addRouteCtrl', ['$scope', '$stateParams', 'TakePhotoService', 'TakeLocationService','s3Service', '$model',
function ($scope, $stateParams, TakePhotoService, TakeLocationService, s3Service, $model) {

  $scope.picTaken = false;
  $scope.locationTaken = false;
  $scope.pictureData = true;
  $scope.lng = 'hello';
  $scope.lat = 'hi';


  // Filter Start
  $scope.types = ('Rock Boulder Ice').split(' ').map(function (type) { return { abbrev: type }; });
  $scope.values = {};
  $scope.grade = '';
  var boulder = 'v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16';
  var rock = '5.0 5.1 5.2 5.3 5.4 5.5 5.6 5.7 5.8 5.9 5.10a 5.10b 5.10c 5.10d 5.11a 5.11b 5.11c 5.11d 5.12a 5.12b 5.12c 5.12d 5.13a 5.13b 5.13c 5.13d 5.14a 5.14b 5.14c 5.14d 5.15a 5.15b 5.15c 5.15d';
  var ice = 'WI1 WI2 WI3 WI4 WI5 WI6 WI7 WI8 AI1 AI2 AI3 AI4 AI5 AI6';
  $scope.values.climb_type = 'Rock'
  // End


  $scope.updateGrades = function(type) {

    console.log(type);

    if(type === 'Rock') {
      $scope.grade = rock;
      $scope.values.climb_grade = '5.0';
    } else if(type === 'Boulder') {
      $scope.grade = boulder;
      $scope.values.climb_grade = 'v0';
    } else if (type === 'Ice') {
      $scope.grade = ice;
      $scope.values.climb_grade = 'WI1';
    } else {
      $scope.grade = rock;
      $scope.values.climb_grade = '5.0';
    }
    $scope.grades = ($scope.grade).split(' ').map(function (type) { return { abbrev: type }; });
  }

  $scope.updateGrades('Rock');









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
