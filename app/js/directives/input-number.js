
/*================================================================
=>                  Directive = INPUT NUMBER
==================================================================*/
/*global app*/

app.directive('inputNumber', ['$rootScope', function ($rootScope) {
 
	'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			console.log('Directive === INPUT NUMBER');
		}
	};
}]);


/*-----  End of Directive = menuBar  ------*/