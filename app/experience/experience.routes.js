(function () {
    'use strict';

    angular
        .module('app.experience')
        .config(config);

    dataPrepareFunc.$inject = ['dataService'];

    function config($routeProvider) {
        $routeProvider
            .when('/experience', {
                templateUrl: 'experience/experience.html',
                controller: 'ExperienceCtrl',
                controllerAs: 'experience',
                resolve: {
                    dataPrepareFunc: dataPrepareFunc
                },
            });
    }

    function dataPrepareFunc(dataService) {
        return dataService.getExperience();
    }

})();