
/*================================================================
=>                   Service = forgotPwdAPI
==================================================================*/
/*global app, $http*/

app.service('forgotPwdAPI', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	//To send forgot password email
	this.forgotPwd = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/password';

		var requestData = {
			'user' : {
				'email' : userData
			}
		};

		$http.post(serviceUrl, requestData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};


	//To change password
	this.changePWD = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/password';

		var requestBody = {
			'user' : userData
		};

		$http.put(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = forgotPwdAPI  ------*/