(function () {
    'use strict';

    angular
        .module('appCore', [
            'ngAnimate',
            'ngSanitize',
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            'ui.router',
            'nvd3'
        ]);
})(angular);
