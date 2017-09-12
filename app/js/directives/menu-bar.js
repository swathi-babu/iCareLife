	
/*================================================================
=>                  Directive = menuBar
==================================================================*/
/*global app*/

app.directive('menuBar', ['$rootScope', function ($rootScope) {
 
	'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			console.log('Directive === menuBar');
		}
	};
}]);


/*-----  End of Directive = menuBar  ------*/