
/*================================================================
=>                   Service = mySkillsAPI
==================================================================*/
/*global app*/

app.service('mySkillsAPI', ['$rootScope', '$q', '$http', 'appConfig', function ($rootScope, $q, $http, appConfig) {

	'use strict';

	//getting myskill details
	this.getDetails = function (serviceType) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/mySkills?authentication_token=' + $rootScope.authToken + '&service_type=' + serviceType;
		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	//saving the myskill for the first time after login if no myskill data is not present
	this.saveDetails = function (userDetails) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/mySkills';
		
		$http.post(serviceUrl, userDetails)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				nsole.log('mySkills error',data);
				deferred.reject(err);
			});

		return deferred.promise;
	};


}]);


/*-----  End of Service = mySkillsAPI  ------*/