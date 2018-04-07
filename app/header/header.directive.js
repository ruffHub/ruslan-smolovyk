(function () {
    'use strict';

    angular
        .module('app')
        .directive('appHeader', header);


    function header() {
        return {
            templateUrl: 'header/header.directive.html',
            restrict: 'EA',
            controller: HeaderCtrl,
            controllerAs: 'header'
        };
    }

    function HeaderCtrl() {
    }

})();

