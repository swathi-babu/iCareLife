/*================================================================
=>                  Directive = modalDialog
==================================================================*/
/*global app, Utility, $*/


app.directive('modalDialog', ['$rootScope', function ($rootScope) {
    'use strict';
    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function (scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width) {
                scope.dialogStyle.width = attrs.width;
            }
            if (attrs.height) {
                scope.dialogStyle.height = attrs.height;
            }
            scope.hideModal = function () {
                scope.show = false;
                Utility.removeCls($('body').find('.modal-dialog'), 'signup-dialog');
                Utility.removeCls($('body').find('.modal-dialog'), 'signup-form-dialog');
                //.removeClass('modal-dialog-width');//    .style.width = "85%";
                //reset form from controller
                $rootScope.$broadcast('resetForm');
            };
        },
        template: '<div class="modal" ng-show="show">' +
                '<div class="modal-overlay" ng-click="hideModal()"></div>' +
                '<div class="modal-dialog" ng-style="dialogStyle">' +
                '<div class="modal-close inl-blk" ng-click="hideModal()"></div>' +
                '<div class="modal-dialog-content clearfix" ng-transclude></div>' +
                '</div>' +
                '</div>'
    };
}]);


/*-----  End of Directive = modalDialog  ------*/
