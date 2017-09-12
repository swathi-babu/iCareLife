
/*================================================================
=>                   Service = loginAPI
==================================================================*/
/*global app, $http*/

app.service('setValue', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	this.emailId = null;
	this.countryList = null;

	this.setEmailId = function (value) {
		this.emailId = value;
	};

	this.getEmailId = function () {
		return this.emailId;
	};

	this.setCountryList = function (value) {
		this.countryList = value;
	};

	this.getCountryList = function () {
		return this.countryList;
	};

	this.setProfileType = function(value){
		 this.profileType = value;
		
	}

	this.getProfileType = function(){
		 //return this.profileType;
		  return $.cookie('profile_types');
        
	}

	this.setAccessReasons = function(value){
		 this.AccessReasons = value;
		 
	}

	this.getAccessReasons = function(){
		// return this.AccessReasons;
		 return $.cookie('access_reasons');
        
	}

	this.setDomains = function(value){
		 this.Domains = value;
		
	}

	this.getDomains = function(){
		// return this.Domains;domains
		return $.cookie('domains');
	}
	
}]);


/*-----  End of Service = loginAPI  ------*/