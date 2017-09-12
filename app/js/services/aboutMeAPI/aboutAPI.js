
/*================================================================
=>                   Service = aboutAPI
==================================================================*/
/*global app, $http*/

app.service('aboutAPI', ['$rootScope', '$q', 'appConfig', '$http', function ($rootScope, $q, appConfig, $http) {

	'use strict';

	this.getAboutDetails = function (serviceType) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/about_me?authentication_token=' + $rootScope.authToken + '&service_type=' + serviceType;
		

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.postDetails = function (userData) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/about_me';

		$http.post(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.getProfile = function (serviceType) {
		
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/profile?authentication_token=' + $rootScope.authToken + '&service_type=' + serviceType;
		
		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
				console.log('error',err);
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


/*-----  End of Service = aboutAPI  ------*/