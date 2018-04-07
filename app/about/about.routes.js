(function () {
    'use strict';

    angular
        .module('app.about')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'about/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
    }

})();