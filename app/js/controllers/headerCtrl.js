
/*=====================================================
=>                  Controller = headerCtrl
=======================================================*/

app.controller('headerCtrl', ['$http', '$scope', '$rootScope', '$timeout', '$location', function($http, $scope, $rootScope, $timeout, $location) {
	
	'use strict';

  $scope.mobileMenu = function() {
  	Utility.mobileMenu();
  };

  /* LOGOUT FUNCTION */
	$scope.logout = function() {
		$timeout(function () {
			$rootScope.authToken = '';
			$rootScope.apiToken = '';
			$.removeCookie('userDetails');
			$.removeCookie('domains');
			$.removeCookie('profile_types');
			$.removeCookie('access_reasons');
			$location.path('/landing');
		}, 1);
	};

	$scope.showcontent = function() {
		
  	$location.path('/content-library');
  };
}]);