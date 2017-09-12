
/*================================================================
=>                   Service = otpAPI
==================================================================*/
/*global app, $http*/

app.service('otpAPI', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	//To conform OTP
	this.twoFactorAuth = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/two_factor_authentication';

		$http.put(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	//To resend OTP
	this.twoFactorResend = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/two_factor_authentication';

		$http.post(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = otpAPI  ------*/