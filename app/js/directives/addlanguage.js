
/*================================================================
=>                  Directive = addLanguage
==================================================================*/
/*global app*/

app.directive('addLanguage', ['$rootScope', '$compile', function ($rootScope, $compile) {
   
    'use strict';

	return {
		require: 'ngModel',
    restrict: 'A',
    transclude: true,
		link: function (scope, element, attrs, model) {
			var counter = 0;
		
			scope.getSelectedLang = function () {		
				counter++;

			  var inputEle = $compile('<div class="form-container"><div class="form-left-container"><input type="text" class="custom-text-box" name=' + scope.selectedLanguage["id"] + ' value=' + scope.selectedLanguage["name"] + ' disabled></div>' + '<div class="form-center-container"><span class="slider-text">Proficiency</span><slider floor="0" ceiling="10" step="1" precision="0" ng-model="proficiencyVal'+counter+'"></slider></div>' + '<div class="form-right-container"> <button type="button" class="close closeLang">&times;</button></div></div>' )(scope);
        
        $('#languageSelector').append(inputEle);
      };

		}
	};
}]);


/*-----  End of Directive = addLanguage  ------*/