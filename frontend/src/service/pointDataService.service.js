(function(angular) {
    'use strict';

    angular.module('timegraph').service('pointDataService', pointDataService);

    function pointDataService($http) {
        var _service = {};
        _service.addPoint = function(value) {
            $http.post('//localhost:8080/', {value: value}).then(function(res) {
                console.log(res);
            });
        };

        _service.getPoints = function() {
           return $http.get('//localhost:8080/');
        };

        return _service;
    }

})(angular);
