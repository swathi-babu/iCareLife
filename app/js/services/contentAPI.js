
/*================================================================
=>                   Service = aboutAPI
==================================================================*/
/*global app, $http*/

app.service('contentAPI', ['$rootScope', '$q', 'appConfig', '$http', function ($rootScope, $q, appConfig, $http) {

	'use strict';

	this.getcontentlibrary = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/user_contents/categories?authentication_token='+ $rootScope.authToken +'&categories=0' + categories;
		

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.getcontentFilter = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/user_contents/filter';
		

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


/*-----  End of Service = aboutAPI  ------*/


