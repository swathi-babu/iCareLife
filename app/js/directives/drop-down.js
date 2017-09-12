
/*=========================================================================================
=>                  Directive = dropdown

This directive will be added to link which will trigger the popup to appear,
There should be div (sibling) which has the class '.ddmenu'. On clicking on the element 
(which has the directive added), the pop up will appear.

Initiall the .ddmenu will have 'display:none' and we can customize it easily using CSS
===========================================================================================*/
/*global app, $, window*/

app.directive('dropdown', ['$rootScope', function ($rootScope) {
   
    'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			console.log('drop down directives');
			//var elements = elements;
			// var element = $('.arrowWrapper');
			element = $(element);
			var $menu = element.next();

			var hideMenu = function () {
				$menu.hide();
				element.removeClass('active');

				$(window).off('click', windowClickHandler);
			};

			var showMenu = function (event) {
				event.preventDefault();
				event.stopPropagation();
				$rootScope.$broadcast('hide::dropdown');

				$menu.show();
				element.addClass('active');

				$(window).on('click', windowClickHandler);
			};

			var windowClickHandler = function (e) {
				// if the target of the click isn't the container && nor a descendant of the container
				if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
			        hideMenu();
			    }
			};

			element.on('click', function (event) {

				var $arrow = element.find('.arrowSection');
				console.debug('$arrow ', $arrow, $arrow.length);
				if ($arrow.length) {
					if ($arrow.is(event.target) || $arrow.has(event.target).length > 0) {
						$menu.is(':visible') ? hideMenu() : showMenu(event);
					} else {
						showMenu(event);
					}
				} else {
					$menu.is(':visible') ? hideMenu() : showMenu(event);
				}
				showMenu(event);
				
			});

			element.siblings('.ddmenu').find('li').on('click', function (event) {
				// element.text($(this).text());
				$rootScope.$broadcast('hide::dropdown');
			});

			

			scope.$on('$destroy', function () {
				return $(window).off('click', windowClickHandler);
			});

			scope.$on('hide::dropdown', function () {
				hideMenu();
				return false;
			});
		}
	};
}]);


/*-----  End of Directive = dropdown  ------*/