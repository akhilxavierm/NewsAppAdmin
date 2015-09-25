myModule.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

myModule.directive("dynamicMeta",function(dynamicMetaFactory){
    return {
        restrict: "A",
        template: '<meta name="apple-itunes-app" content="app-id={{dynamicMeta.appId}}, app-argument = {{dynamicMeta.appArgument}}"></meta>',
        replace: true,
        link: function(scope) {
            scope.dynamicMeta = dynamicMetaFactory;
        }
    } 

});

