angular.module('core').directive('passwordVisibility', ['$timeout', function($timeout){
    return {
        restrict: 'C',
        link: function($scope, $elem){
            $timeout(function(){
                var $input = angular.element($elem).siblings("input[type=password]");
                var $icon = angular.element($elem).find('i.material-icons');

                angular.element($elem).click(function(){
                    if(angular.element($input).attr('type') == 'password'){
                        angular.element($input).prop("type", "text");
                        angular.element($icon).html('visibility_off');

                    } else if(angular.element($input).attr('type') == 'text'){
                        angular.element($input).prop("type", "password");
                        angular.element($icon).html('visibility');
                    }
                });
            }, 0);
        }
    }
}]);