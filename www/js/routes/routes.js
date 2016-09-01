angular.module('app')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tab.addRoute', {
    url: '/addRoute',
    views: {
      'tab3': {
        templateUrl: 'templates/addRoute.html',
        controller: 'addRouteCtrl'
      }
    }
  })

  .state('tab.routeList', {
    url: '/routeList',
    views: {
      'tab2': {
        templateUrl: 'templates/routeList.html',
        controller: 'routeListCtrl'
      }
    }
  })

  .state('tab.map', {
    url: '/Map',
    views: {
      'tab1': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tab', {
    url: '/tab',
    templateUrl: 'templates/tab.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  $urlRouterProvider.otherwise('/login')



});
