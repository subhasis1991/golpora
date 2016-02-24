angular.module('app')
.directive('gpPlayer', ['$window', 'viewportValue', '$timeout', function($window, viewportValue, $timeout){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        templateUrl: 'views/gp-player.html',
        link: function($scope, iElm, iAttrs, controller) {

          var progressBarWrapper = angular.element('.progress-bar-wrapper');
          var progressBarBackground = angular.element('.progress-bar-background');
          var currentProgress = angular.element('.current-progress');
          var barHover = angular.element('.bar-hover');
          var progressBarOn = angular.element('.progress-bar-on');
          var progressBarChange = angular.element('.progress-bar-change');

          var width = $window.innerWidth;
          var marginLeft = progressBarBackground.css('margin-left');

          var setWidth = progressBarWrapper.width() - 2 * currentProgress.width();
          progressBarBackground.css({
            width: setWidth +'px',
          });

          var timer;
          barHover.bind('mousemove', function(e) {
            e.preventDefault();
            var mouseX = e.offsetX;

            if (mouseX > progressBarOn.width()) {
              progressBarChange.css({
                width: mouseX + 'px'
              });
            };


          });

          barHover.bind('mouseout', function(e){
            e.preventDefault();
            progressBarChange.css({
                width: progressBarOn.width() + 'px'
              });
          })

          barHover.bind('click', function(e){
            e.preventDefault();
            var mouseX = e.offsetX;
            progressBarOn.css({
                width: mouseX + 'px'
              });
          })

          //response on window resize
          angular.element($window).bind('resize', function(){
            var width = $window.innerWidth;

            var marginLeft = progressBarBackground.css('margin-left');
            var setWidth = progressBarWrapper.width() - 2 * currentProgress.width();
            progressBarBackground.css({
              width: setWidth +'px',
            });
          });


        
        }//end link
    };
}]);