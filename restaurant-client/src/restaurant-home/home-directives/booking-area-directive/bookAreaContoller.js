/**
 * Created by Vikash1.Kumar on 22-06-2017.
 */
(function () {
    angular.module("indexContentModule" ).
        controller("bookAreaController",["$timeout", 'httpClient' ,'$rootScope', function($timeout, httpClient, $rootScope){
        var self =this;
        self.bookingDone = false;
        self.goToBookTable =function () {
            httpClient.getData($rootScope.serviceBaseUrl + $rootScope.url.tableStatus).then(function (response) {
                    self.tableConfiguration = response;
                    self.bookingDone = true;
                },
                function (error) {
                    console.log("API call failed", error);
                }
            );

        }
        self.bookTable =function (tableNo) {
            httpClient.putData($rootScope.serviceBaseUrl + $rootScope.url.bookTable+ "/" + tableNo ).then(function (response) {
                debugger;
                self.tableConfiguration = response;
                },
                function (error) {
                    console.log("API call failed", error);
                }
            );
        };

    }]);
})();
