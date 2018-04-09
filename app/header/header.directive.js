(function () {
    'use strict';

    angular
        .module('app')
        .directive('appHeader', header);

    function header() {
        return {
            restrict: 'EA',
            templateUrl: 'header/header.directive.html',
            controller: HeaderCtrl,
            controllerAs: 'header'
        };
    }

    function HeaderCtrl() {
    }

})();

