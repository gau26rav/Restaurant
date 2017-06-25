/**
 * Created by Vikash1.Kumar on 23-06-2017.
 */
(function () {
    angular.module("restaurant.httpService", [])
        .factory('httpClient', ['$http', '$q', '$log', function ($http, $q, $log) {
            function getData(path, header) {
                var deferred = $q.defer();
                $http.get(path, header).then(
                    function (response) {
                        $log.debug("API call success");
                        deferred.resolve(response.data);
                    },
                    function (error) {
                        $log.error("API call failed ")
                        deferred.reject(error);
                    }
                )

                return deferred.promise;
            }

            function postData(path, data, header) {
                var deferred = $q.defer();
                $log.debug("payload of post service is ", data);
                $http.post(path, data, header).then(
                    function (response) {
                        deferred.resolve(response.data)
                    },
                    function (error) {
                        deferred.reject(error);
                    }
                );
            }
            function putData(path, data, header) {
                var deferred = $q.defer();
                $http.put(path, data, header).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (error) {
                        deferred.reject(error);
                    }
                );
                return deferred.promise;
            }

            return {
                getData: getData,
                postData: postData,
                putData :putData
            };
        }]);
})();
