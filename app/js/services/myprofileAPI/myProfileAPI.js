
/*================================================================
=>                   Service = myProfileAPI
==================================================================*/
/*global app, $http*/

app.service('myProfileAPI', ['$rootScope', '$q', 'appConfig', '$http', function ($rootScope, $q, appConfig, $http) {

	'use strict';

	this.getProfileDetails = function () {
		
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/my_profile?authentication_token=' + $rootScope.authToken;
		
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

	this.postProfileDetails = function (userData) {
		
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/my_profile';

		$http.post(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
				console.log('error',err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = aboutAPI  ------*/



