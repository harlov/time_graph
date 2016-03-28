(function(angular) {
    'use strict';

    angular.module('timegraph').directive('graphPlot', function($interval, $filter, pointDataService, $window) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {},
            templateUrl: 'directive/graphPlot/graphPlot.directive.html',
            link: function(scope, elem, attrs, fn) {
                scope.graphOptions = {
                    chart: {
                        type: 'lineChart',
                        height: 450,
                        x: function(d){
                            return new Date(d.time/1000000);
                         },
                        y: function(d){ return d.value; },
                        xAxis: {
                            axisLabel: 'event time',
                            tickFormat: function(d) {
                                console.log(d);
                                return $window.d3.time.format('%H:%M')(
                                    new Date(d)
                                );
                            },
                            showMaxMin: false
                        },
                    },
                    useInteractiveGuideline: true
                };

                scope.graphData = [
                    {
                        key: 'values',
                        values: []
                    }
                ];

                var currMock = 3;


                function updateData () {
                    pointDataService.getPoints().then(function(res){
                        scope.graphData[0].values = res.data;
                        console.log(scope.graphData[0].values);
                        scope.d3api.update();
                    });
                }

                $interval(updateData, 1000);

                /*setInterval(function() {
                    scope.graphData[0].values.push({
                        time: currMock++,
                        value: currMock,
                    });
                    console.log(scope.graphData[0].values);
                    scope.d3api.update();
                }, 1000);*/
            }
        };
    });
})(angular);

