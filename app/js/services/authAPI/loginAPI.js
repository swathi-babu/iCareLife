
/*================================================================
=>                   Service = loginAPI
==================================================================*/
/*global app, $http*/

app.service('loginAPI', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	this.userLogin = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_in';

		var requestBody = {
			'user' : userData //user data from the login form
		};
		
		$http.post(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};


	this.googleLogin = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_in/google';

		var requestBody = {
			'user' : userData //user data from the login form
		};
		
		$http.post(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};	

	this.facebookLogin = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_in/facebook';

		var requestBody = {
			'user' : userData //user data from the login form
		};
		
		$http.post(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};	
}]);


/*-----  End of Service = loginAPI  ------*/