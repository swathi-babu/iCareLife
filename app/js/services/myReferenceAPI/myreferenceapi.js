
/*================================================================
=>                   Service = myReferenceAPI
==================================================================*/
/*global app*/

app.service('myReferenceAPI', ['$rootScope', '$q', '$http', 'appConfig', function ($rootScope, $q, $http, appConfig) {

	'use strict';

	this.getDetails = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/myReferences?authentication_token=' + $rootScope.authToken;
		// console.log(serviceUrl);

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.updateDetails = function (userDetails) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/myReferences';
		
		$http.put(serviceUrl, userDetails)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = myReferenceAPI  ------*/