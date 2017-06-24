/**
 * Created by Vikash1.Kumar on 22-06-2017.
 */
(function () {
    angular.module("indexContentModule" ).
        controller("bookAreaController",["$timeout", 'httpClient' ,'$rootScope', function($timeout, httpClient, $rootScope){
        var self =this;
        self.bookingDone = false;
        self.goToBookTable =function () {
            $timeout(function () {
                self.bookingDone = true;
            }, 1000);
        }
        self.bookTable =function (tableNo) {
            // index of array starts from 0
            //tableConfiguration[tableNo -1].booked =true;
        }
        httpClient.getData($rootScope.serviceBaseUrl + $rootScope.url.tableStatus).then(function (response) {
            self.tableConfiguration = response
        },
        function (error) {
            console.log("API call failed", error);
        }
        );

    }])
})();
