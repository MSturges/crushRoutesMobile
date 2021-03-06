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
        templateUrl: 'templates/tabsTemplates/addRoute.html',
        controller: 'addRouteCtrl'
      }
    }
  })

  // .state('tab.routeList', {
  //   url: '/routeList',
  //   views: {
  //     'tab2': {
  //       templateUrl: 'templates/tabsTemplates/routeList.html',
  //       controller: 'routeListCtrl'
  //     }
  //   }
  // })

  .state('tab.map', {
    url: '/Map',
    views: {
      'tab1': {
        templateUrl: 'templates/tabsTemplates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tab.routeList', {
    url: '/routeList',
    views: {
      'tab2': {
        templateUrl: 'templates/tabsTemplates/routeList.html',
        controller: 'routeListCtrl'
      }
    }
  })

  .state('tab', {
    url: '/tab',
    templateUrl: 'templates/tabsTemplates/tab.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/authTemplates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/authTemplates/signup.html',
    controller: 'signupCtrl'
  })

  $urlRouterProvider.otherwise('/login')



});
