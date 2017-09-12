
/*================================================================
=>                   Service = signUp
==================================================================*/
/*global app, $http*/

app.service('signUp', ['$rootScope', '$q', 'appConfig', '$http', function ($rootScope, $q, appConfig, $http) {

	'use strict';

	this.getUserType = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_up';

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	//SignUp

	this.registerUser = function (userData) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users';

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


/*-----  End of Service = signUp  ------*/