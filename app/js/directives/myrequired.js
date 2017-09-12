
/*================================================================
=>                  Directive = myRequired
==================================================================*/
/*global app*/

app.directive('myRequired', ['$rootScope', function ($rootScope) {
   
  'use strict';

	return {
	  restrict: 'AE',
	  scope: {},
	  require: 'ngModel',
	  link: function(scope, element, attrs) {
      if (element.val() == "") {
        return;
      }
  	},
	};

}]);


/*-----  End of Directive = myRequired  ------*/