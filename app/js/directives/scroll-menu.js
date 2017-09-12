
/*================================================================
=>                  Directive = scrollMenu
==================================================================*/
/*global app, window, $*/

app.directive('scrollMenu', ['$rootScope', function ($rootScope) {

	'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			$(window).scroll(function () {
				var headerHeight = $('.main-header').height();
				var windowHeight = $(window).scrollTop();

				if (windowHeight > 1) {
					$('.main-header').addClass('has-scrolled');
				}
				else if (windowHeight === 0) {
					$('.main-header').removeClass('has-scrolled');
				}
			});
		}
	};
}]);


/*-----  End of Directive = scrollMenu  ------*/