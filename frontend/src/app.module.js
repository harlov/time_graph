(function(angular) {
    'use strict';

    /*
     * here is the right place to configure shared modules like app.appCore and feature-module
     * app.appCore defines the dependencies to angular and third party modules
     * any feature module should depend on app.appCore and possible other shared modules
     */

    /**
     * @ngdoc: overview
     * @name: timegraph
     *
     */
    angular.module('timegraph', ['appCore']);
    angular.module('timegraph').run(timegraphRun);

    /* @ngInject */
    function timegraphRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [

               {
               state: 'mainGraph',
               config: {
                       url: '/main_graph',
                       templateUrl: 'partial/mainGraph/mainGraph.html',
                       controller: 'MainGraphCtrl',
                       controllerAs: 'mainGraphCtrl',
                       title: 'Main Graph'
              }
        },
               {
               state: 'about',
               config: {
                       url: '/about',
                       templateUrl: 'partial/about/about.html',
                       controller: 'AboutCtrl',
                       controllerAs: 'aboutCtrl',
                       title: 'About'
              }
        },
            /* Add New States Above */
        ];
    }

})(angular);
