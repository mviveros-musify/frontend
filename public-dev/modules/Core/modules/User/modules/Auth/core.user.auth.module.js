var coreUserAuthModule = angular.module('core.user.auth', []);

//$translatePartialLoaderProvider
coreUserAuthModule.config(['$translatePartialLoaderProvider', function($translatePartialLoaderProvider){
    $translatePartialLoaderProvider.addPart('Core.User.Auth');
}]);

//$stateProvider
coreUserAuthModule.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('auth',{
        templateUrl:'./modules/Core/modules/User/modules/Auth/views/core.user.auth.view.html',
        resolve: { load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load(['./modules/Core/modules/User/modules/Auth/styles/core.user.auth.css']);
        }]}
    });
    $stateProvider.state('auth.login', {
        url:'/login',
        templateUrl: './modules/Core/modules/User/modules/Auth/partials/core.user.auth.login.partial.html'
    });
    $stateProvider.state('auth.register', {
        url:'/register',
        templateUrl: './modules/Core/modules/User/modules/Auth/partials/core.user.auth.register.partial.html'
    });
    $stateProvider.state('auth.forgot', {
        url:'/forgot',
        templateUrl: './modules/Core/modules/User/modules/Auth/partials/core.user.auth.forgot.partial.html'
    });
}]);