/*================================================================
=>                  Controller = loginCtrl
==================================================================*/
/*global app, Utility, $*/

app.controller('loginCtrl', ['$scope', '$rootScope', 'appConfig', 'loginAPI', 'forgotPwdAPI', '$timeout', '$location', 'setValue', '$route', function ($scope, $rootScope, appConfig, loginAPI, forgotPwdAPI, $timeout, $location, setValue, $route) {
	
	'use strict';

	/**
	  * ##LOGIN FLOW
	  * 1. Get data from login form, 
	  * 2. Send the data to loginAPI
	  * 3. If user selects remember me, store in cookies for 30 days else save for 1 day
	  * 4. Authentication will be success if email and phone number are confirmed and go to home page, else display error message
	  * 5. If login button is clicked more than twice, show captcha and follow step 1-3 
	*/

	//Initializing user objects and captcha
	$scope.user = {
		'remember_me': 0
	};
	$scope.resetForm = {};
	$scope.loginErrorMsg;
	$rootScope.isLoginIn = false;
	$scope.isCaptcha = false; //hide captcha by default
	$.removeCookie('captchaStatus'); //remove captche status in cookies
	var counter = 0;

	//Reset login form and setPristine to form
	var reset = function () {
		if ($scope.loginForm && $scope.forgotEmailForm) {
			$scope.user = angular.copy($scope.resetForm);
			$scope.loginForm.$setPristine(); //set form to initial pristine state
			$scope.loginErrorMsg = '';

			$scope.forgotEmailForm.$setPristine();
			$scope.forgotErrorMsg = '';
			$scope.forgotSuccessMsg = '';
			$scope.userEmail = '';
			counter = 0; //reset capcha counter
			$scope.isCaptcha = false;
			$.removeCookie('captchaStatus');
			$scope.$apply(); //apply scope value
		}

		else if ($scope.forgotEmailForm) {
			$scope.forgotEmailForm.$setPristine();
			$scope.userEmailId = '';
			$scope.forgotErrorMsg = '';
			$scope.forgotSuccessMsg = '';
			counter = 0; //reset capcha counter
			$.removeCookie('captchaStatus');
			$scope.isCaptcha = false;
			$scope.$apply(); //apply scope value
		}
		else if ($scope.loginForm) {
			$scope.user = angular.copy($scope.resetForm);
			$scope.loginForm.$setPristine(); //set form to initial pristine state
			$scope.loginErrorMsg = '';
			counter = 0; //reset capcha counter
			$.removeCookie('captchaStatus');
			$scope.isCaptcha = false;
			$scope.$apply(); //apply scope value
		}
	};

	//On popup close, reset form
	$('#myModal').on('click', '.closePopup, .modal-backdrop', function (event) {
		event.preventDefault();
		reset(); //reset form
	});

	//On hiding popup, reset form
	$('#myModal').on('hidden.bs.modal', function (event) {
  	event.preventDefault();
		reset(); //reset form
	});

	//Common login method
	var loginUser = function () {
		setValue.setEmailId($scope.user.email);
		
		//Login API
		loginAPI.userLogin($scope.user)
			.then(function (data) {
				console.log(data);
				$('.btn-popup-login').removeAttr('disabled'); //enable login btn
				
				if (data.confirmed_email == true && data.confirmed_phone_number == true && data.authentication_token != null) {
					$.removeCookie('userDetails'); //remove previous userDetails
					$rootScope.authToken = '';
					$.cookie.json = true;
					//If remember me selected, store in cookies for 30 days
					if (data.remember_me == '1') {
						$.cookie('userDetails', data, { expires: 300, path: '/' }); //store userDetails in cookies
						$rootScope.authToken = data.authentication_token;
						$rootScope.userId = data.id;
						$timeout(function () {
							$('#myModal').modal('hide');
							$location.path('/aboutme');
						}, 100);
					}
					else {
						$.cookie('userDetails', data, { expires: 300, path: '/' });
						$rootScope.authToken = data.authentication_token;
						$rootScope.userId = data.id;
						$timeout(function () {
							$('#myModal').modal('hide');
							$location.path('/aboutme');
						}, 100);
					}
				}
				else if (data.confirmed_email == false && data.confirmed_phone_number == false) {
					$('#otpModel').modal('show');
					$('#myModal').modal('hide');
				}
				else if (data.confirmed_email == true && data.confirmed_phone_number == false) {
					$('#otpModel').modal('show');
					$('#myModal').modal('hide');
				}
				else if (data.confirmed_email == false && data.confirmed_phone_number == true) {
					$scope.loginErrorMsg = 'Email is not confirmation. Check your email for confirmation.';	 //TODO change the message
				}
			},
			function (err) {
				$('.btn-popup-login').removeAttr('disabled'); //enable login btn 
				if (err.message) {
					$scope.loginErrorMsg = err.message;
				}
			});
	};
	
	//Login submit
	$scope.loginFormSubmit = function () {
		counter++;
		$scope.loginErrorMsg = '';

		//show captcha, if email/password is wrong for more than twice
		if (counter > 2) {
			$scope.isCaptcha = true;
			
			if ($.cookie('captchaStatus') === 'success') {
				$scope.loginErrorMsg = '';
				$('.btn-popup-login').attr('disabled', 'disabled'); //disabled the login btn
				loginUser(); //call login method
			}
			else {
				$scope.loginErrorMsg = 'Enter the captcha';
				$('.btn-popup-login').attr('disabled', 'disabled');
			}
		}	
		else if (counter <= 2) {
			$('.btn-popup-login').attr('disabled', 'disabled');
			loginUser(); //call login method
		}
	};



	/**
	  * ##Forgot password
	  * 1. Get data from login form, 
	  * 2. Send the data to forgotpwdAPI
	  * 3. If authentication success, email is sent to registered email, else display error message
	*/

	$scope.forgotPwdEmail = function () {
		$scope.forgotErrorMsg = '';
		$scope.forgotSuccessMsg = '';

		$('.otp-subbtn').attr('disabled', 'disabled');

		//Call forgotPwd API
		forgotPwdAPI.forgotPwd($scope.userEmailId)
			.then(function (data) {
				$('.otp-subbtn').removeAttr('disabled');
				if (data.success === true) {
					$scope.forgotSuccessMsg = 'Instruction is sent to your registered email address';
				}
			},
			function (err) {
				$('.otp-subbtn').removeAttr('disabled');
				if (err['errors'].email) {
					$scope.forgotErrorMsg = 'Email ' + err['errors'].email;
				}
				console.log('error==>', err);
			});
	};
	
	//Social networks login
	$scope.loginGoogle = function() {
        var clientId = "693593979546-crlru3n841g17hg23r13fsdgu412t3og.apps.googleusercontent.com";
        var scope = "email";
        var redirect_uri = "http://localhost:3000";
        var response_type = "token";
        var url = "https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+clientId+"&redirect_uri="+redirect_uri+
        "&response_type="+response_type;
        window.location.replace(url);
    };


    $scope.loginFacebook = function() {
        var clientId = "350562095126583";
        var scope = "email";
        var redirect_uri = "http://localhost:3000";
        var response_type = "token";
        
        var url = "https://www.facebook.com/dialog/oauth?scope="+scope+"&client_id="+clientId+"&redirect_uri="+redirect_uri+
        "&response_type="+response_type;
        window.location.replace(url);
    };

    
}]);

/*-----  End of Controller = loginCtrl  ------*/
