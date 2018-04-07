(function () {

    angular
        .module('app')
        .factory('dataService', dataService);

    dataService.$inject = ['$http'];

    function dataService($http) {
        return {
            getSkills: getSkills,
        };

        function getSkills() {
            return $http.get('data.json').then(function success(res) {
                return res.data;
            });
        }
    }

})();