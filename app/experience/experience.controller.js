(function () {
    'use strict';

    angular
        .module('app.experience')
        .controller('ExperienceCtrl', ExperienceCtrl);

    ExperienceCtrl.$inject = ['dataPrepareFunc'];
    
    function ExperienceCtrl(dataPrepareFunc) {
        const vm = this;
        vm.data = dataPrepareFunc;
    }

})();