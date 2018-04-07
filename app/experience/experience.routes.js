(function () {
    'use strict';

    angular
        .module('app.experience')
        .config(config);


    function config($routeProvider) {
        $routeProvider
            .when('/experience', {
                templateUrl: 'experience/experience.html',
                controller: 'ExperienceCtrl',
                controllerAs: 'experience'
            });
    }

})();