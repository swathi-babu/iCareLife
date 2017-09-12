app.controller('userDetailsCtrl',['$scope', '$http', '$rootScope', 'signUp', 'setValue', function($scope, $http, $rootScope, signUp, setValue){
		
	'use strict';	

	$scope.Request = {};
	$scope.user = {};
	//$scope.countryList = setValue.getCountryList();

	//console.log('countryList------------->',$scope.countryList);


	var	registerValidation = function (serverResponse) {
		$.each(serverResponse, function (key, value) {
			if (key == 'email') {
				$scope.emailErrMsg = serverResponse[key];
			}

			if (key == 'phone_number') {
				$scope.phoneErrMsg = serverResponse[key];
			}

			if (key == 'password_confirmation') {
				$scope.pwdErrMsg = serverResponse[key];
			}
		});
	};
	
	//localStorage.setItem('email',$scope.user.email); 
	$scope.processForm = function() {
		setValue.setEmailId($scope.user.email);
		$scope.Request['user'] = $scope.user;
		$scope.Request['domains'] = localStorage.getItem('domains');
		$scope.Request['profile_types'] = localStorage.getItem('profile_types');
		$scope.Request['access_reasons'] = localStorage.getItem('access_reasons');
		$rootScope.userEmailId = $scope.user.email;	 //TODO Remove later
		var addresses_attributes= {
            "0": {
                "country_id": "232"
            }
        };
        $scope.Request['addresses_attributes'] =  addresses_attributes;
        console.log($scope.Request);
		
		signUp.registerUser($scope.Request)
			.then(function(data) {
	      $('#userDetailsModal').modal('hide');
				$('#otpModel').modal('show');
    	},
    	function(data){
    		console.log('error==>', data);
    		
    		registerValidation(data);
    	});
	};

	localStorage.clear();	
	
	var clearSession = function () {
  		//localStorage.clear();
	};

	var reset = function () {
		if ($scope.userDetailsCtrl) {
			$scope.Request="";
			$scope.user="";
			$scope.emailErrMsg = "";
			$scope.phoneErrMsg = "";
			$scope.pwdErrMsg = "";


			$scope.$apply(); //apply scope value
		}}

	$('#userDetailsModal').on('click', '.closePopup, .modal-backdrop', function (event) {
        event.preventDefault();
        reset(); //reset form
    });

    $scope.showLoginPagePopup = function() {
        $('.signup-module').addClass('none');
        $('.login-module').removeClass('none');
    };
    $scope.showRegisterPagePopup = function() {
        
        
        $('.register-module').addClass('none');
        $('.setup-account').removeClass('none');
        
    };
   
}]);