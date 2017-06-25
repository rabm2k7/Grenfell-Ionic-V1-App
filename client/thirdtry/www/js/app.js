// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      var push = new Ionic.Push({
        "debug": true
      });

      push.register(function(token) {
        console.log("Device token:", token.token);
      });
    });
  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.money', {
        url: '/money',
        views: {
          'menuContent': {
            templateUrl: 'templates/money.html',
            controller: 'MoneyCtrl'
          }
        }
      })

      .state('app.counseling', {
        url: '/counseling',
        views: {
          'menuContent': {
            templateUrl: 'templates/counseling.html',
            controller: 'CounselingCtrl'
          }
        }
      })

      .state('app.legal', {
        url: '/legal',
        views: {
          'menuContent': {
            templateUrl: 'templates/legal.html',
            controller: 'LegalCtrl'
          }
        }
      })

      .state('app.housing', {
        url: '/housing',
        views: {
          'menuContent': {
            templateUrl: 'templates/housing.html',
            controller: 'HousingCtrl'
          }
        }
      })

      .state('app.localevents', {
        url: '/localevents',
        views: {
          'menuContent': {
            templateUrl: 'templates/events.html',
            controller: 'LocaleventsCtrl'
          }
        }
      })

      .state('app.medical', {
        url: '/medical',
        views: {
          'menuContent': {
            templateUrl: 'templates/medical.html',
            controller: 'MedicalCtrl'
          }
        }
      })

      .state('app.donate', {
        url: '/donate',
        views: {
          'menuContent': {
            templateUrl: 'templates/donate.html',
            controller: 'DonateCtrl'
          }
        }
      })

      .state('app.volunteers', {
        url: '/volunteers',
        views: {
          'menuContent': {
            templateUrl: 'templates/volunteers.html',
            controller: 'VolunteersCtrl'
          }
        }
      })

      .state('app.usefullinks', {
        url: '/usefullinks',
        views: {
          'menuContent': {
            templateUrl: 'templates/usefullinks.html',
            controller: 'UsefullinksCtrl'
          }
        }
      }).state('app.about', {
        url: '/about',
        views: {
          'menuContent': {
            templateUrl: 'templates/about.html',
            controller: 'UsefullinksCtrl'
          }
        }
      })

      .state('app.main', {
        url: '/posts',
        views: {
          'menuContent': {
            templateUrl: 'templates/mainposts.html',
            controller: 'PostsCtrl'
          }
        }
      })

      .state('app.singlepost', {
        url: '/main/:post',
        views: {
          'menuContent': {
            templateUrl: 'templates/singlepost.html',
            controller: 'PostCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/posts');

    $httpProvider.defaults.useXDomain = true;

  });
