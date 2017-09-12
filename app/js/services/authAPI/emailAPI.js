
/*================================================================
=>                   Service = emailAPI
==================================================================*/
/*global app, $http*/

app.service('emailAPI', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	//To conform OTP
	this.resendEmail = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/confirmation';

		$http.post(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};


	//To conform EMAIL
	this.confirmEmail = function (confirmToken) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/confirmation?confirmation_token=' + confirmToken;
		console.log(serviceUrl);
		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = emailAPI  ------*/