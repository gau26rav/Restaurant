
angular.module('restaurantModule',[
    'indexContentModule',
    'ui.router'
])

.constant('RESTAURANT_CONFIG', {
    headerTitle : 'Cafe Duke'
})

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home',{
            url : '/',
            templateUrl :'./src/restaurant-home/read/restaurant-home-view.html'
        })

}])

.run(['$rootScope', 'RESTAURANT_CONFIG',function ($rootScope, RESTAURANT_CONFIG) {

    $rootScope.restaurantConfig = RESTAURANT_CONFIG;

}]);