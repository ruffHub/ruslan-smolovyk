(function () {
    'use strict';

    angular
        .module('app.skills')
        .directive('skillsList', skillsList);


    function skillsList() {
        return {
            restrict: 'EA',
            scope: {
                title: '=',
                items: '='
            },
            link: function(scope) {
            },
            template: `<div>
                         <h3>{{title}}:</h3>
                         <ul>
                           <li ng-repeat="item in items">{{item}}</li>
                         </ul>
                       </div>`
        };
    }

})();

