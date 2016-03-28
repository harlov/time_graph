(function(angular) {
    'use strict';

    angular.module('timegraph').controller('MainGraphCtrl', MainGraphCtrl);

    function MainGraphCtrl(pointDataService) {
        var mainGraphCtrl = this;
        mainGraphCtrl.addPoint = addPoint;

        /* put bindable members here like
         mainGraphCtrl.buttonClick = buttonClick;
          */

        init();


        function init() {

        }

        function addPoint() {
            console.log('lol');
            pointDataService.addPoint(mainGraphCtrl.newPoint);
            mainGraphCtrl.newPoint = 0.0;
        }
    }
})(angular);
