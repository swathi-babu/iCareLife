/*================================================================
=>                  Directive = MultiSelect List
==================================================================*/
/*global app, Utility*/


app.directive('multiSelect', ['$rootScope', function ($rootScope) {
    'use strict';
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var selectList = function () {
				var selecetdList = element.parent()[0];
				var selectedType = element[0].getAttribute('attr');
				if (element.hasClass('selected')) {

					Utility.removeCls(element, 'selected');

					/*ClassList name for list and broadcast name should be same*/
					$rootScope.$broadcast(selecetdList.classList[0], [selectedType, 'delete']);
				} else {
					
					Utility.addCls(element, 'selected');

					/*ClassList name for list and broadcast name should be same*/
					$rootScope.$broadcast(selecetdList.classList[0], [selectedType, 'add']);
				}
			};
			element.on('click', selectList);

        }
    };
}]);


/*-----  End of Directive = multi select list  ------*/