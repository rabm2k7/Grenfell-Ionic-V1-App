angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope, $window) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //})

    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function() {
      $rootScope.$apply(function() {
        $rootScope.online = false;
      });
    }, false);

    $window.addEventListener("online", function() {
      $rootScope.$apply(function() {
        $rootScope.online = true;
      });
    }, false);

    $scope.$watch('online', function(newStatus) {
      console.log("online");
    });


    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PostCtrl', function($scope, $stateParams, $http) {
    console.log($stateParams.post);

    $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    success(function(data, status, headers, config) {
      $scope.post = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
      console.log("error");
    });

  })

  .controller('MoneyCtrl', function($scope, $stateParams, $http) {
    console.log($stateParams.post);

    $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    success(function(data, status, headers, config) {
      $scope.post = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
      console.log("error");
    });

  })
  .controller('CounselingCtrl', function($scope, $stateParams, $http) {
    console.log($stateParams.post);

    $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    success(function(data, status, headers, config) {
      $scope.post = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
      console.log("error");
    });

  })
  .controller('LegalCtrl', function($scope, $stateParams, $http) {
    console.log($stateParams.post);

    $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    success(function(data, status, headers, config) {
      $scope.post = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
      console.log("error");
    });

  })
  .controller('HousingCtrl', function($scope, $stateParams, $http) {
    console.log($stateParams.post);

    $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    success(function(data, status, headers, config) {
      $scope.post = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
      console.log("error");
    });

  })
  .controller('LocaleventsCtrl', function($scope, $stateParams, $http) {
    console.log($stateParams.post);

    $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    success(function(data, status, headers, config) {
      $scope.post = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
      console.log("error");
    });

  })
  .controller('MedicalCtrl', function($scope, $stateParams, $http) {
    console.log($stateParams.post);

    $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    success(function(data, status, headers, config) {
      $scope.post = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
      console.log("error");
    });

  })
  .controller('DonateCtrl', function($scope, $stateParams, $http) {
    console.log($stateParams.post);

    $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    success(function(data, status, headers, config) {
      $scope.post = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
      console.log("error");
    });

  })
  .controller('VolunteersCtrl', function($scope, $stateParams, $http) {
    console.log($stateParams.post);

    $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    success(function(data, status, headers, config) {
      $scope.post = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
      console.log("error");
    });

  })
    .controller('UsefullinksCtrl', function($scope, $stateParams, $http, $rootScope, $window) {
      console.log($stateParams.post);
      console.log($rootScope.articles);
    })

  .controller("PostsCtrl", function($scope, $http, $rootScope, $window) {

    // $http.get(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=ff02be62728749b786605b3ad405aeab').
    // success(function(data, status, headers, config) {
    //   $scope.posts = data;
    //   console.log(data);
    // }).
    // error(function(data, status, headers, config) {
    //   // log error
    //   console.log(data);
    //   console.log("error");
    // });

    if ($rootScope.online === true) {

      $http.get('https://newsapi.org/v1/articles?source=buzzfeed&apiKey=ff02be62728749b786605b3ad405aeab').
      success(function(data, status, headers, config) {
        $scope.posts = data;
        $window.localStorage.setItem("articles", JSON.stringify(data));
        $rootScope.articles = JSON.parse($window.localStorage.getItem("articles"));
        console.log(data);
        console.log("got from server");
        console.log($rootScope.articles);
      }).
      error(function(data, status, headers, config) {
        // log error
        console.log(data);
        console.log("error");
      });

    } else {
      $scope.posts = JSON.parse($window.localStorage.getItem("articles"));
      console.log("got from local");
      console.log($scope.posts);
      console.log($window.localStorage.getItem("articles"));
    }

  });
