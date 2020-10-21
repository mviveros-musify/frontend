angular.module('core').directive('progressLoader', [function(){
    return {
        restrict  : 'E',
        template  : '<div class="progress"><div class="indeterminate"></div></div>'
    };
}]);

angular.module('core').directive('divider', [function(){
    return {
        restrict  : 'C',
        scope:{
            text : '@text'
        },
        link: function($scope, $elem,){
            angular.element($elem).html($scope.text);
        }
    };
}]);