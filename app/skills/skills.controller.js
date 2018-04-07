(function () {
    'use strict';

    angular
        .module('app.skills')
        .controller('SkillsCtrl', SkillsCtrl);

    SkillsCtrl.$inject = ['dataPrepareFunc'];

    function SkillsCtrl(dataPrepareFunc) {
        const vm = this;
        vm.data = dataPrepareFunc;
    }
})();