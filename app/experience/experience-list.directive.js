(function () {
    'use strict';

    angular
        .module('app.experience')
        .directive('experienceList', experienceList);


    function experienceList() {
        return {
            restrict: 'EA',
            scope: {
                items: '='
            },
            link: function(scope) {
            },
            template: `<div ng-repeat="item in items">
                         <h3>{{item.title}}</h3>
                         <span>({{item.period}})</span>
                         <p>{{item.text}}</p>
                       </div>`
        };
    }

})();

