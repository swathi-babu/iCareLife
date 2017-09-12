
	/*================================================================
	=>                  Controller = Home
	==================================================================*/
	/*global app, $, Utility */

app.controller('landingCtrl', ['$scope', '$rootScope','$http', '$location', '$routeParams', 'emailAPI', 'forgotPwdAPI', 'signUp', 'notifyManager', '$timeout', function ($scope, $rootScope, $http, $location, $routeParams, emailAPI, forgotPwdAPI, signUp, notifyManager, $timeout) {

	'use strict';
	
	$(document).ready(function() {

		$rootScope.selectHeader = function (value) {
			switch(value) {
        case 1 : 
        $('.firstDiv').addClass('selecteddivContent');
        $rootScope.checkSelectedClassStatus(1);
        break;
        case 2 :
        $('.secondDiv').addClass('selecteddivContent');
        $rootScope.checkSelectedClassStatus(2);
        break;
        case 3 :
        $('.thirdDiv').addClass('selecteddivContent');
        $rootScope.checkSelectedClassStatus(3);
        break;
    	}
		};

		$rootScope.checkSelectedClassStatus = function (value) {
	    switch(value){
        case 1 : 
        	$('.secondDiv').removeClass("selecteddivContent");
        	$('.thirdDiv').removeClass("selecteddivContent");
        
        break;
        case 2 :
       		$('.firstDiv').removeClass("selecteddivContent");
       		$('.thirdDiv').removeClass("selecteddivContent");
        break;
        case 3 :
        	$('.secondDiv').removeClass("selecteddivContent");
        	$('.firstDiv').removeClass("selecteddivContent");
        break;
    	}
		};


		$('.open-modal').click(function() {
			$('#userDetailsModal').modal('hide');
			$('#usersignupModel').modal('hide');
			
			$('#myModal').modal('show');
			$scope.secondList = true;
			$scope.thirdList = true;
		});

		$('.otp-modal').click(function() {
			$('#otpModel').modal('show');
		});
		
		$('.fgtPassword-modal').click(function() {
			$('#fwspasswordModel').modal('show');

			$('#myModal').modal('hide');

		});
		
		$('.userDetails-modal').click(function() {
			$('#usersignupModel').modal('hide');
			$('#userDetailsModal').modal('show');
			$('#myModal').modal('hide');
		});
		
		// $('.usersignup-modal').click(function() {
		// 	$('#usersignupModel').modal('show');
		// 	$('#myModal').modal('hide');

		// });
		
		$rootScope.selectHeader(1);
	});

	var getThumbNailData = function () {

		

		if ($rootScope.currentState === "aboutme") {
			return true;
		}


		$http.get("../json/thumbnails.json").success(function(response) {
		
	 	$scope.data = response;
	 	
	 	$scope.arrayLength = $scope.data.length;
	 	$scope.displayData = function(value){
	 		//var classId = 'content'+value;
	 		$("div.tab-pane.active").removeClass("active");
	 		switch(value) {
	 			case 101 :
	 			var imageArray = $scope.data[0].content.items;
	 			var length = $scope.data[0].content.items.length;
	 			if(!count) {
	 		$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			count = false;
	 			}
	 			var data = '<ul class="slides">'
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
     			document.getElementById('carousel').innerHTML = data;
     			carsouelCalling();
                break;
	 			case 102 :
	 			var imageArray = $scope.data[1].content.items;
	 			var length = $scope.data[1].content.items.length;
	 			$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			var data = '<ul class="slides">'
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
	 			document.getElementById('carousel').innerHTML = data;
	 			carsouelCalling();
	 			count = false;
	 			 break;
	 			case 103 :
	 			var imageArray = $scope.data[2].content.items;
	 			var length = $scope.data[2].content.items.length;
	 			$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			var data = '<ul class="slides">';
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
	 			document.getElementById('carousel').innerHTML = data;
	 			 carsouelCalling();
      			count = false;
	 			 break;
	 			 case 104 :
	 			var imageArray = $scope.data[2].content.items;
	 			var length = $scope.data[2].content.items.length;
	 			$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			var data = '<ul class="slides">';
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
	 			document.getElementById('carousel').innerHTML = data;
	 			 carsouelCalling();
      			count = false;
	 			 break;
	 			  case 105 :
	 			var imageArray = $scope.data[2].content.items;
	 			var length = $scope.data[2].content.items.length;
	 			$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			var data = '<ul class="slides">';
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
	 			document.getElementById('carousel').innerHTML = data;
	 			 carsouelCalling();
      			count = false;
	 			 break;
	 			
	 		}
	 	}
	 	$scope.displayData(101);
	 	
	 	
		}).error(function(e) {
				
		});
	};	
	getThumbNailData ();

	/**
	  * ##User Email Conformation
	  * 1. Watch the URL for users/confirmation
	  * 2. Get conformation token from URL params,
	  * 3. Make API call and show notification to user
	*/

	$scope.confirmPwdToken = '';
	var userData = {};
	
	$rootScope.$watch('$routeChangeStart', function (current, previous) { 
		
		var currentURL = $location.path(); //will get current URL
		
		//To conform Email address
		if (currentURL === '/landing/users/confirmation') {
			
			var confirmToken = $location.search()['confirmation_token']; //gets #token from URL

			//Make API call to conform Email
			emailAPI.confirmEmail(confirmToken)
				.then(function (data) {
					console.log(data);
					notifyManager.show('Email has been confirmed', 'success'); //default timeout 3s					
					$timeout(function () {
						$location.url($location.path('/landing'));
					}, 3000);
				}, 
				function (err) {
					console.log(err);
					if (err.confirmation_token) {
						var status = 'Confirmation token ' + err.confirmation_token;
						notifyManager.show(status, 'error');
						$timeout(function () {
							$location.url($location.path('/landing'));
						}, 3000);
					}
				});
		}
		//To Change password
		else if (currentURL === '/landing/users/password/edit') {
			$scope.confirmPwdToken = $location.search()['reset_password_token']; //gets #token from URL
			$('#changePwdModel').modal('show');
		}
	});

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

	//Reset change password form and setPristine to form
	var reset = function () {
		if ($scope.changePwdForm) {
			$scope.changePwdForm.$setPristine(); //set form to initial pristine state
			$scope.changePwdFormMsg = '';
			$scope.changeSuccessMsg = '';
			$scope.changeFailedMsg = '';
			$scope.newPassword = '';
			$scope.confirmPassword = '';
			$scope.user = {
				'password': '',
				'password_confirmation': '',
				'reset_password_token': ''
			};
			$scope.$apply(); //apply scope value
		}
	};

	$scope.changePassword = function () {
		
		$scope.changeSuccessMsg = '';
		$scope.changeFailedMsg = '';

		userData = {
			'password': $scope.newPassword,
			'password_confirmation': $scope.confirmPassword,
			'reset_password_token': $scope.confirmPwdToken
		};

		//Make API call to conform Email
		forgotPwdAPI.changePWD(userData)
			.then(function (data) {
				if (data.status == 'success') {
					$location.url($location.path('/landing'));
					$('.changepwd-module').removeClass('none');
					$('#myModal').modal('show');
				}
			}, 
			function (err) {
				console.log(err);
				if (err.message['reset_password_token']) {
					$scope.changeFailedMsg = 'Reset token ' + err.message['reset_password_token'];
				}
			});
	};

	$scope.showLoginPopup = function() {
		
		if ( $('.popup-module')[0].className.match('none') ) {
			$('.popup-module').removeClass('none');
		}
		$('.login-module').removeClass('none');
		
		
	};

	$scope.showRegisterPopup = function() {

		if ( $('.popup-module')[0].className.match('none') ) {
			$('.popup-module').removeClass('none');
		}
		$('.login-module').addClass('none');
		$('.signup-module').removeClass('none');

	};

	$scope.showforgotpwd = function() {
		$('.forgotpwd-module').removeClass('none');
		$('.login-module').addClass('none');
	};

	$scope.showotppopup = function() {
		$('.otp-popup-module').removeClass('none');
		$('.signup-module').addClass('none');
		
	};

	$scope.closePopup = function() {
		$('.popup-module').addClass('none');
		$('.login-module').addClass('none');
		$('.signup-module').addClass('none');
		$('.forgotpwd-module').addClass('none');
		$('.otp-popup-module').addClass('none');
	};
	$scope.showcontent = function() {
		$('.content-learn-module').removeClass('none');
		$('.landing-module').addClass('none');
	};

	var carsouelCalling = function () {
		var gridSize;
		function getGridSize() {
		    return (window.innerWidth < 600) ? 1 : 3;
		};
		$('.flexslider').flexslider({
			animation: "slide",
			animationLoop: true,
			itemWidth: 210,
			itemMargin: 5,
			pausePlay: false,
			maxItems: getGridSize(),
		});
		$(window).resize(function() {
		    gridSize = getGridSize();
		    if ($('.discover-courses #carousel')[0]) {
		    	$('.discover-courses #carousel').data('flexslider').varsz.maxItems = gridSize;
		    }
		});
	};


}]);
