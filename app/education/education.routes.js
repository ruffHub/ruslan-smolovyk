(function () {
    'use strict';

    angular
        .module('app.education')
        .config(config);


    function config($routeProvider) {
        $routeProvider
            .when('/education', {
                templateUrl: 'education/education.html',
                controller: 'EducationCtrl',
                controllerAs: 'education'
            })
    }

})();