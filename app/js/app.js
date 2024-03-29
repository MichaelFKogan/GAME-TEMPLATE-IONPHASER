// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'App' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('App', ['ionic', 'ngCordova', 'ngAnimate', 'ionic-pullup', 'ion-floating-menu', 'ionic-native-transitions'])


.run(['$ionicPlatform',
    


    function($ionicPlatform) {
    


    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
            return StatusBar.hide();
        }
        
        //Fullscreen
        ionic.Platform.isFullScreen = true;
    });
}])
.config(['$stateProvider',
    '$urlRouterProvider',
    '$ionicConfigProvider',
    '$compileProvider',
    '$ionicNativeTransitionsProvider',
    function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider, $ionicNativeTransitionsProvider) {

        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content|ms-appx|x-wmapp0):|data:image\/|img\//);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);

        if (window.cordova && !ionic.Platform.isIOS()) {
            //Native Scrolling
            $ionicConfigProvider.scrolling.jsScrolling(false);
        }else{
            $ionicConfigProvider.scrolling.jsScrolling(true);
        }
				
        $ionicConfigProvider.navBar.alignTitle('center');
        $ionicConfigProvider.backButton.previousTitleText(false).text('');
        $ionicConfigProvider.views.swipeBackEnabled(false);
        
        $ionicNativeTransitionsProvider.setDefaultTransition({
            type: 'slide',
            direction: 'left'
        });
        
        $ionicNativeTransitionsProvider.setDefaultBackTransition({
            type: 'slide',
            direction: 'right'
        });

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "templates/home.html",
                controller: 'HomeController'
            })
// DON'T KNOW HOW TO DELETE THIS, BUT NEED THIS TO TRANSITION TO GAME SCREEN
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/game.html',
                controller: 'gameController'
            })

                .state('app.game', {
                url: "/game",
                views: {
                    viewContent: {
                        templateUrl: "templates/game.html",
                        controller: 'gameController'
                    }
                }
            })


        $urlRouterProvider.otherwise(function($injector, $location) {
            var $state = $injector.get("$state");
            $state.go("home");
        });
}]);
