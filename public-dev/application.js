var app = angular.module('torneamentumchess', [
    'ui.materialize',
    'ui.router',
    'ngSanitize',
    'pascalprecht.translate',
    'oc.lazyLoad',
    'core'
]);

// $locationProvider
app.config(['$locationProvider', function ($locationProvider){
        $locationProvider.html5Mode(true); //IF WEB
}]);

// $translateProvider
app.config(['$translateProvider', function($translateProvider){

    //Config Translate Provider
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    $translateProvider.useLoader('$translatePartialLoader',{
        urlTemplate: './modules/{part}/i18n/{lang}.json'
    });
    $translateProvider.preferredLanguage('es');
}]);