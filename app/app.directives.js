smartPAR.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
})

.directive('switchToggle', function() {
  return {
    template: '<div class="toggle-window"><div class="full"><div class="on-div inside-switch">ON</div><div class="switch-div inside-switch"></div><div class="off-div inside-switch">OFF</div></div></div>',
  link: function($scope, element, attrs) {
        element.bind('click', function() {
          if(element.hasClass("on")){
          	element.removeClass("on")
            element.addClass("off")
          }else{
          	element.addClass("on")
            element.removeClass("off")
          }
        });
   }
  }
});