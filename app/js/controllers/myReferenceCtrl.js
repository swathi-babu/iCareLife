
/*================================================================
  =>                  Controller = Myreference
  ==================================================================*/
/*global app*/

app.controller('myReferenceCtrl', ['$scope', '$rootScope', 'myReferenceAPI', 'notifyManager', 'setValue', '$filter', function ($scope, $rootScope, myReferenceAPI, notifyManager, setValue, $filter) {

    'use strict';

    //Initializing
    var userDetails = {};
    
    /* To stop input type='number' mouse scroll */
    $('form').on('focus', 'input[type=number]', function (e) {
	$(this).on('mousewheel.disableScroll', function (e) {
	    e.preventDefault()
	});
    });

    $('form').on('blur', 'input[type=number]', function (e) {
	$(this).off('mousewheel.disableScroll')
    });


    /* Get my reference details to populate in form
     * 1. Get from token after login
     * 2. Make API call
     * 3. Populate data in form
     */

    myReferenceAPI.getDetails()
	.then(function (data) {
	    if (data != null) {
		$scope.relationships = data.drop_down_keys.relationships;
		$scope.verificationType = data.drop_down_keys.verification_types;
	    }
	},
	      function (err) {
		  console.log('failed get -->', err);
	      });

    $scope.getSelectedHeader = function(selectedTab) {
	Utility.carsouelCalling();
	Utility.getSelectedHeader(selectedTab);
    };

    $scope.elderCareContentMyReference = false;
    $scope.driverCotentMyReference = false;
    $scope.childCareContentMyReference = false;
    $scope.sschildCareContent = false;
    $scope.sselderCareContent = false;

    if(setValue.getProfileType() == "Service Provider" && (setValue.getDomains() == "Elder Caregiver Job" || setValue.getDomains() == "Elder Caregiver" ) && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
	$scope.elderCareContentMyReference = false;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = true;
	$scope.sschildCareContent = true;
	$scope.sselderCareContent = true;

    }  else if(setValue.getProfileType() == "Service Provider" && (setValue.getDomains() == "Child Caregiver Job" || setValue.getDomains() == "Baby Caregiver Job" || setValue.getDomains() == "Child Caregiver" || setValue.getDomains() == "Baby Caregiver") && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
	$scope.elderCareContentMyReference = true;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = false;
	$scope.sschildCareContent = true;
	$scope.sselderCareContent = true;
    }  else if(setValue.getProfileType() == "Service Seeker" && (setValue.getDomains() == "Baby Care" || setValue.getDomains() == "Child Care" || setValue.getDomains() == "Baby Caregiver" || setValue.getDomains() == "Child Caregiver") && (setValue.getAccessReasons() == "Learn" || setValue.getAccessReasons() == "Hire")) 
    {
	$scope.sschildCareContent = false;
	$scope.elderCareContentMyReference = true;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = true;	
	$scope.sselderCareContent = true;
    }  else if(setValue.getProfileType() == "Service Seeker" && (setValue.getDomains() == "Elder Care" || setValue.getDomains() =="Elder Caregiver") && (setValue.getAccessReasons() == "Learn" || setValue.getAccessReasons() == "Hire")) {
	$scope.sschildCareContent = true;
	$scope.elderCareContentMyReference = true;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = true;	
	$scope.sselderCareContent = false;
    }
    else {
	$scope.elderCareContentMyReference = true;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = false;
	$scope.sschildCareContent = true;
	$scope.sselderCareContent = true;
    }

    if (setValue.getProfileType() == 'Service Seeker') {
	$scope.onlyForServiceProvider = true;
    }


    //Reset form data
    $scope.resetForm = {};

    //reset form
    var reset = function () {
	if ($scope.aboutForm) {
	    userDetails = angular.copy(resetForm);
	    $scope.aboutForm.$setPristine();
	}
    };


    $scope.selectBackgroudCheck = function (event) {
	var isActive = $('.bgSelection').hasClass('active-bg-check');
	$('.bgSelection').removeClass('active-bg-check');
	$(event.target).parent().parent().addClass('active-bg-check');
	var selectedList = $(event.target).prev().prop("checked", true);
	$scope.backgroundSelction = 'true';
    };

    var submitFormValue = function (userData) {
	
	//submit from data to user
	myReferenceAPI.updateDetails(userData)
	    .then(function (data) {
		notifyManager.show('Successfully submitted', 'success');
	    },
		  function (err) {
		      notifyManager.show('Form submission failed', 'error');
		  });
    };

    $scope.submitBgCheck = function () {

	var userDetails = {
	    'authentication_token': $rootScope.authToken,
	    'service_type': $rootScope.profileType,
	    'user': {
	    	'user_details_attributes': [{
	            'verification_type': $scope.membershipId //n
		}]
	    }
	};

	//submit formdata to API
	submitFormValue(userDetails);
    };

    $scope.submitRefCheck = function () {

	var userDetails = {
	    'authentication_token': $rootScope.authToken,
	    'service_type': $rootScope.profileType,
	    'user': {
		'skip_validation':true,
		'user_references_attributes': {
		    "0":{
			'id': $scope.user_reference_id || null,
			'first_name': $scope.firstName,
			'last_name': $scope.lastName,
			'email': $scope.emailId,
			'relationship': $scope.selectedRelationship['id'],
			'known_duration': $scope.knowDuration,
			'phone': $scope.mobileNo,
			'icare_membership': $scope.membershipId
		    },
		},
	    }
	};

	//submit formdata to API
	submitFormValue(userDetails);
    };


}]);


/*-----  End of Controller = Myreference  ------*/



