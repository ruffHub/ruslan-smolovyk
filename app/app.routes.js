(function () {

    angular
        .module('app')
        .config(config)
        .run(watchActiveLink);

    config.$inject = ['$locationProvider', '$routeProvider'];
    watchActiveLink.$inject = ['$rootScope', '$location'];

    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .otherwise({redirectTo: '/about'});
    }

    function watchActiveLink($rootScope, $location) {
        let path = function () {
            return $location.path();
        };

        $rootScope.$watch(path, function (newVal) {
            $rootScope.activeLink = newVal;
        });
    }

})();