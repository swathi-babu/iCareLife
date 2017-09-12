
// /*================================================================
// =>                  Directive = slider
// ==================================================================*/
// /*global app*/

// app.directive('slidePrev', ['$rootScope', function ($rootScope) {
   
//     'use strict';

// 	return {
// 		restrict: 'A',
// 		link: function (scope, element, attrs) {

// 			var slideLength = scope.slides.length; //slides length
// 			element.on('click', function () {
// 				console.log('Prev');
// 				var current = scope.slide;
// 				if (current === 1) {
// 					scope.slide = slideLength;
// 				}
// 				else {
// 					scope.slide = current - 1;
// 					console.log(scope.slide)
// 				}
// 			});
// 		}
// 	};
// }]);


// app.directive('slideNext', ['$rootScope', function ($rootScope) {
   
//     'use strict';

// 	return {
// 		restrict: 'A',
// 		link: function (scope, element, attrs) {

// 			var slideLength = scope.slides.length; //slides length
// 			element.on('click', function () {
// 				console.log('Next');
// 				var current = scope.slide;
// 				if (current === slideLength) {
// 					scope.slide = 1;
// 				}
// 				else {
// 					scope.slide = current + 1;
// 					console.log(scope.slide)
// 				}
// 			});
// 		}
// 	};
// }]);


// /*-----  End of Directive = slider  ------*/