/**
 * Created by gt250075 on 6/22/2017.
 */
(function () {
    angular.module("indexContentModule" ,[]).
        directive("restaurantHeader" ,[function(){
        return{
            templateUrl :"src/header/read/header-view.html",
            link :function(scope, element, attrs, parentController){
                console.log(arguments);
            }
        }
    }]);
})();
