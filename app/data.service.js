(function () {

    angular
        .module('app')
        .factory('dataService', dataService);

    dataService.$inject = ['$http'];

    function dataService($http) {
        return {
            getSkills: getSkills,
            getExperience: getExperience
        };

        function getSkills() {
            return $http.get('db/skills-data.json').then(function success(res) {
                return res.data;
            });
        }

        function getExperience() {
            return $http.get('db/experience-data.json').then(function success(res) {
                return res.data;
            });
        }
    }

})();