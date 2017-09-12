
/*================================================================
=>                  App = iCareLife
==================================================================*/
/*global angular, $, window, navigator  --- */

var app = angular.module('iCareLife', ['ngCookies', 'ngResource', 'ngAnimate', 'ngRoute', 'ui.utils', 'ui.router', 'angularFileUpload', 'ngTouch', 'vr.directives.slider']);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
	'use strict';

	$stateProvider
		.state('landing', {
			url: '/landing',
			templateUrl: 'templates/landing.html',
			requireLogin: false
		})

		.state('aboutme', {
			url: '/aboutme',
			templateUrl: 'templates/aboutme2.html',
			//requireLogin: false
		})

		// Email conformation Route
		.state('landing.confirmEmail', {
			url: '/users/confirmation',
			templateUrl: 'templates/landing.html',
			requireLogin: false
		})


		//Change pwd conformation Route
		.state('landing.changePassword', {
			url: '/users/password/edit',
			templateUrl: 'templates/landing.html',
			requireLogin: false
		})

		.state('myReference', {
			url: '/myReference',
			templateUrl: 'templates/myReference.html'
		})

		.state('popular', {
			url: '/popular',
			templateUrl: 'templates/popular.html'
		})

		.state('content-library', {
			url: '/content-library',
			templateUrl: 'templates/content-library-learn.html'
		})
		.state('content-browse', {
			url: '/content-browse',
			templateUrl: 'templates/content-browse.html'
		});
		// $locationProvider.hashPrefix('!');
	$urlRouterProvider.otherwise('/landing');

		// This is required for Browser Sync to work poperly
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  iCareLife App Run()  
==================================================================*/

app.run(['$rootScope', '$state', '$location', '$route', '$filter', function ($rootScope, $state, $location, $route, $filter) {
	
	'use strict';

	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {


		//To check for login action
		if (toState.requireLogin !== false && !isLoggedIn()) {
			$state.transitionTo('landing');
		}
		else {
			$rootScope.currentState = toState.name;
		}

		// Location path reload or non reload
		var original = $location.path;
		$location.path = function (path, reload) {
			if (reload === false) {
				var lastRoute = $route.current;
				var un = $rootScope.$on('$locationChangeSuccess', function () {
					$route.current = lastRoute;
				});
			}

			return original.apply($location, [path]);
		};

	});

	//To check auth token
	var isLoggedIn = function () {

		//Get authTokens after successfull login for API calls
		$.cookie.json = true;
		var userDetails = $.cookie('userDetails');

		var domain = userDetails['domains'][0];

		var profile_types = userDetails['profile_types'][0];

		var access_reasons = userDetails['access_reasons'][0];

		//profile_types  domains
		$.cookie('domains', domain, { expires: 300, path: '/' }); /* Elder Care Baby Care Driver*/
		$.cookie('profile_types', profile_types, { expires: 300, path: '/' }); /* Service Seeker and Service Provider*/
		$.cookie('access_reasons', access_reasons, { expires: 300, path: '/' }); /* Learn or Hire or Job*/

		if (userDetails && userDetails['authentication_token'] != null) {
			$rootScope.authToken = userDetails['authentication_token'];
			$rootScope.profileType = profile_types;
			$rootScope.domainType = domain;
			$rootScope.userId = userDetails['id'];
			$rootScope.isLoginIn = true;
			console.log(userDetails);

			return (!$rootScope.authToken) ? false : true;
		}
	};

	/** SPINNER SHOW FUNCTION
	* The function takes a jQuery based element and show the loading Spinner on it.
	* The idea is to position the passed in element where ever we want to show the Spinner.
	* @param  {jQuery} $spin
	* @return {}
	*/
	
	$rootScope.showSpinner = function ($spin) {
		
		var loadingSpinner = $filter('spinner');
		$rootScope.hideSpinner($spin);

		$spin.css('z-index', 9999);
		loadingSpinner('show', {element: $spin});
	};


	/** SPINNER HIDE FUNCTION
	* The function takes a jQuery based element and hides the loading Spinner on it.
	* @param  {jQuery} $spin
	* @return {}
	*/
	
	$rootScope.hideSpinner = function ($spin) {
		$spin.css('z-index', -9999);
		
		var loadingSpinner = $filter('spinner');
		loadingSpinner('hide', {element: $spin});
	};

}]);


/* ---> Do not delete this comment (Values)<--- */
// App config


app.constant('appConfig', {

	// Dev
	//baseURL: 'http://54.169.63.144:3000',
	baseURL : 'http://icarelife-staging-ws.sourcebits.com:3000'
	// baseURL : 'http://192.168.10.125:3000'


	// Sales
	// wsURL: 'wss://64.77.63.30:8080/TouchLive/productionSocket',
	// baseURL: 'https://liveapi-test.ratetiger.com:7030/touch-rest-services/services/',
});

/* ---> Do not delete this comment (Constants) <--- */
