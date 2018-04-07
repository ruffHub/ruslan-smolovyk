(function () {
    'use strict';

    angular
        .module('app.skills')
        .config(config);

    dataPrepareFunc.$inject = ['dataService'];

    function config($routeProvider) {
        $routeProvider
            .when('/skills', {
                templateUrl: 'skills/skills.html',
                controller: 'SkillsCtrl',
                controllerAs: 'skills',
                resolve: {
                    dataPrepareFunc: dataPrepareFunc
                },
            });
    };

    function dataPrepareFunc(dataService) {
        return dataService.getSkills();
    }

})();