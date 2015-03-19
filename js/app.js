'use strict'; 

var myApp = angular.module( 'myApp' , [ 
    'ngRoute',
    'my-multi-select'
])
.config([ '$routeProvider', function( $routeProvider ) {          
    $routeProvider.when( '/main' , {
        templateUrl: 'views/multiselectdir.html', 
        controller: 'demoMinimum'
    });  
    $routeProvider.otherwise( {
        redirectTo: '/main'
    });
}]);

