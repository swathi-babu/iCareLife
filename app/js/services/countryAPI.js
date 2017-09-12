
/*================================================================
=>                   Service = countryapi
==================================================================*/
/*global app*/

app.service('countryAPI', ['$rootScope', '$q', '$http', 'appConfig', function ($rootScope, $q, $http, appConfig) {

	'use strict';

	this.getCountry = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/countries';

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.getStates = function (countryID) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/countries/' + countryID + '/states';	

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


/*-----  End of Service = countryapi  ------*/