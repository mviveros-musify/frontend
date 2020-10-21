var coreModule = angular.module('core', ['core.user']);

// $ocLazyLoad
coreModule.run(['$ocLazyLoad', function($ocLazyLoad){
    $ocLazyLoad.load('./modules/Core/directives/core.directive.js');
    $ocLazyLoad.load('./modules/Core/directives/core.password-visibility.directive.js');
}]);

//$translatePartialLoaderProvider
coreModule.config(['$translatePartialLoaderProvider', function($translatePartialLoaderProvider){
    $translatePartialLoaderProvider.addPart('Core');
}]);

//$stateProvider
coreModule.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('index',{
        templateUrl:'./modules/Core/partials/core.index.partial.html',
        resolve: { load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load(['./modules/Core/styles/hearder.css']);
        }]}
    });
    $stateProvider.state('portal',{
        templateUrl:'./modules/Core/partials/core.index.partial.html',
        resolve: { load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
                './modules/Core/styles/hearder.css',
                './modules/Core/styles/portal.css'
            ]);
        }]}
    });

    $stateProvider.state('index.home',{
        url:'/',
        templateUrl:'./modules/Core/views/core.home.view.html',
    });

    $stateProvider.state("otherwise", { url : '/404', templateUrl:'./modules/Core/views/core.404.view.html' });
}]);

// $urlRouterProvider
coreModule.config(['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.otherwise('/404');
}]);

// $transitions
coreModule.run(['$transitions', function($transitions){
    $transitions.onSuccess({}, function() {
        console.log("statechange success");
    });
      $transitions.onStart({}, function(trans) {
        console.log("statechange start");
    });
}]);